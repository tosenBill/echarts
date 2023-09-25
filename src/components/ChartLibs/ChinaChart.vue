<script setup lang="ts">
import { ref, unref, computed, watch, inject, watchEffect } from 'vue'

import DefaultChart from './DefaultChart.vue'
import hooks from '@/hooks'

import JEOJSON from '@/assets/json/china_geo.json'

import echarts from '@/utils/echarts'

const loadFinish = ref(false)
const mapDeviceNum = ref([]) as any
const { useModuleData } = hooks
const { calcFont } = useModuleData(null)
const geoJSON = ref(null)

const deviceMapCount = inject('deviceMapCount', [])

const demoData = [
  {
    name: '西藏',
    deviceNum: '29'
  },
  {
    name: '青海',
    deviceNum: '20'
  },
  {
    name: '陕西',
    deviceNum: '80'
  },
  {
    name: '山东',
    deviceNum: '50'
  },
  {
    name: '北京',
    deviceNum: '2'
  }
]

watch(
  [geoJSON, () => deviceMapCount],
  (val) => {
    const [flag, arr] = val
    if (flag && unref(arr)?.length) {
      packageData()
    }
  },
  {
    deep: true
  }
)

const mapEmitHandle = (jeoJson: any) => {
  geoJSON.value = jeoJson
}

const packageData = () => {
  var mapFeatures = unref(geoJSON).features
  console.log('unref(deviceMapCount.value)', unref(deviceMapCount.value))
  mapFeatures.forEach(function (v) {
    // 地区名称
    var name = v.properties.name
    // 地区经中心经纬度
    var geo = v.properties.center.concat([40])
    for (let i = 0; i < unref(deviceMapCount.value)?.length; i++) {
      const item = unref(deviceMapCount.value)[i]
      if (name.indexOf(item.name) !== -1) {
        const deviceNum = item.deviceNum
        mapDeviceNum.value.push({
          name,
          deviceNum,
          value: geo
          // label: {
          //   normal: {
          //     show: true,
          //     formatter: function (params) {
          //       console.log('params', params)
          //       return params.name + '--' + params.data.deviceNum //地图上展示文字 + 数值
          //     }
          //   }
          // }
        })
        break
      }
    }
  })
  loadFinish.value = true
  console.log('result-mapDeviceNum', mapDeviceNum.value)
}

// packageData()

const option = computed(() => {
  return {
    title: {
      left: 'left',
      textStyle: {
        color: '#fff'
      }
    },
    tooltip: {
      show: true,
      trigger: 'item',
      formatter: function (params) {
        return `设备数量：${params?.data?.deviceNum || '--'}`
      }
    },
    // legend: {
    //   orient: 'vertical',
    //   top: 'bottom',
    //   left: 'right',
    //   data: ['汉中', '上海 Top10', '广州 Top10'],
    //   textStyle: {
    //     color: '#fff'
    //   },
    //   selectedMode: 'single'
    // },
    geo: {
      map: 'china',
      zoom: 1.2,
      label: {
        emphasis: {
          show: false
        }
      },
      roam: false,
      itemStyle: {
        normal: {
          areaColor: '#142957',
          borderColor: '#0692a4'
        },
        emphasis: {
          areaColor: '#0b1c2d'
        }
      }
    },
    series: [
      // {
      //   name: '汉中',
      //   type: 'lines',
      //   zlevel: 1,
      //   effect: {
      //     show: true,
      //     period: 6,
      //     trailLength: 0.7,
      //     color: 'red',
      //     symbolSize: 3,
      //     symbol: 'circle'
      //   },
      //   data: [
      //     {
      //       coords: [
      //         [116.402217, 35.311657],
      //         [111.4124, 40.4901]
      //       ],
      //       lineStyle: { normal: { color: '#3ed4ff', width: 0, curveness: 0.2 } }
      //     },
      //     {
      //       coords: [
      //         [116.402217, 35.311657],
      //         [127.9688, 45.368]
      //       ],
      //       lineStyle: { normal: { color: '#3ed4ff', width: 0, curveness: 0.2 } }
      //     }
      //   ]
      // },
      // {
      //   name: '设备',
      //   type: 'lines',
      //   zlevel: 2,
      //   effect: {
      //     show: true,
      //     period: 6,
      //     trailLength: 0,
      //     symbol:
      //       'path://M.6,1318.313v-89.254l-319.9-221.799l0.073-208.063c0.521-84.662-26.629-121.796-63.961-121.491c-37.332-0.305-64.482,36.829-63.961,121.491l0.073,208.063l-319.9,221.799v89.254l330.343-157.288l12.238,241.308l-134.449,92.931l0.531,42.034l175.125-42.917l175.125,42.917l0.531-42.034l-134.449-92.931l12.238-241.308L1705',
      //     symbolSize: 15
      //   },
      //   data: [
      //     {
      //       coords: [
      //         [109.1162, 34.2004], // 西安
      //         [111.4124, 40.4901]
      //       ],
      //       lineStyle: { normal: { color: '#3ed4ff', width: 1, opacity: 0.4, curveness: 0.2 } }
      //     },
      //     {
      //       coords: [
      //         [109.1162, 34.2004], // 西安
      //         [127.9688, 45.368]
      //       ],
      //       lineStyle: { normal: { color: '#3ed4ff', width: 1, opacity: 0.4, curveness: 0.2 } }
      //     },
      //     {
      //       coords: [
      //         [109.1162, 34.2004], // 西安
      //         [87.617733, 43.792818]
      //       ],
      //       lineStyle: { normal: { color: '#3ed4ff', width: 1, opacity: 0.4, curveness: 0.2 } }
      //     }
      //   ]
      // },
      {
        name: '设备所在地',
        type: 'effectScatter', // 带有涟漪特效动画的散点（气泡）图
        coordinateSystem: 'geo',
        zlevel: 2,
        rippleEffect: { brushType: 'stroke' },
        label: { normal: { show: true, position: 'bottom', formatter: '{b}' } },
        itemStyle: { normal: { color: '#3ed4ff' } },
        data: mapDeviceNum.value,
        // data: [
        //   { name: '北京', value: [116.405285, 39.904989, 40], num: '88' },
        //   { name: '新乡', value: [116.402217, 35.311657, 40], num: '30' }, // 0: 经度、1：纬度、2：“显示点的大小”
        //   { name: '呼和浩特', value: [111.4124, 40.4901, 90], num: '60' },
        //   { name: '哈尔滨', value: [127.9688, 45.368, 90], num: '999' },
        //   { name: '西安', value: [109.1162, 34.2004, 60] },
        //   { name: '武汉', value: [114.3896, 30.6628, 50], num: '99' },
        //   { name: '沈阳', value: [123.1238, 42.1216, 20], num: '10000' },
        //   { name: '成都', value: [103.9526, 30.7617, 10] },
        //   {
        //     name: '乌鲁木齐',
        //     value: [87.617733, 43.792818, 40],
        //     num: '111',
        //     label: {
        //       normal: {
        //         show: true,
        //         formatter: function (params) {
        //           console.log('params', params)
        //           return params.name + '--' + params.data.num //地图上展示文字 + 数值
        //         }
        //       }
        //     }
        //   }
        // ],
        symbolSize: function (val) {
          return val[2] / 10
        }
      }
      // {
      //   name: "汉中",
      //   type: "lines",
      //   zlevel: 1,
      //   effect: { show: true, period: 6, trailLength: 0.7, color: "#fff", symbolSize: 3, symbol: "circle" },
      //   data: [
      //     {
      //       coords: [
      //         [116.402217, 35.311657],
      //         [111.4124, 40.4901],
      //       ],
      //       lineStyle: { normal: { color: "#3ed4ff", width: 0, curveness: 0.2 } },
      //     },
      //     {
      //       coords: [
      //         [116.402217, 35.311657],
      //         [127.9688, 45.368],
      //       ],
      //       lineStyle: { normal: { color: "#3ed4ff", width: 0, curveness: 0.2 } },
      //     },
      //   ],
      // },
    ]
  }
})
</script>

<template>
  <!-- <div ref="elRef" id="main"></div> -->
  <DefaultChart
    :option="option"
    :autoplay="true"
    :autoplayLen="8"
    :type="'map'"
    @mapEmit="mapEmitHandle"
  />
</template>

<style lang="less" scoped></style>