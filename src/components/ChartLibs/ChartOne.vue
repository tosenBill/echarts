<script setup lang="ts">
import { ref, reactive } from 'vue'
import DefaultEchart from './DefaultChart.vue'

import { deviceEchartCountApi, deviceTypeEchartApi } from '@/api/common'

const loadFinish = ref(false)

const companyList = ref<Array<string>>([])
const deviceCount = ref<Array<number>>([]) // 设备数量
const branchCount = ref<Array<number>>([]) // 品牌数量
const typeCount = ref<Array<number>>([]) // 类型数量

const getDeviceEchartCount = async () => {
  try {
    const res = await deviceEchartCountApi()
    res?.data.forEach((item: any) => {
      const { deviceTypeCount, orgName, deviceCount: dC, brandCount: bC } = item
      companyList.value.push(orgName)
      deviceCount.value.push(dC)
      branchCount.value.push(bC)
      typeCount.value.push(deviceTypeCount)
    })
    console.log('companyList.value', companyList)
    loadFinish.value = true
    console.log('getDeviceEchartCount-res', res)
  } catch (err) {}
}

getDeviceEchartCount()

const option = reactive({
  title: {
    text: '公司设备数量/品牌数量/类型数量统计图',
    top: 0
    // left: 'center',
    // textStyle: {
    //   color: '#999',
    //   fontSize: 12
    // }
  },
  tooltip: {
    show: true,
    trigger: 'axis',
    backgroundColor: 'rgba(116,176,222,0.3)',
    extraCssText: 'box-shadow: 0 0 8px rgba(0, 128, 255, 0.27) inset;',
    borderWidth: 0,
    confine: false,
    appendToBody: true,
    axisPointer: {
      type: 'shadow',
      shadowStyle: {
        color: 'rgba(35,49,77,0.3)'
      }
    },
    textStyle: {
      color: '#fff',
      fontSize: 14
    }
  },
  grid: {
    top: 56,
    left: 5,
    right: 5,
    bottom: 16,
    containLabel: true
  },
  legend: {
    show: true,
    data: [
      {
        name: '设备数量',
        itemStyle: {
          color: '#4084EE'
        }
      },
      {
        name: '品牌数量',
        itemStyle: {
          color: '#FF8D28'
        }
      },
      {
        name: '类型数量',
        itemStyle: {
          color: '#6ACC29'
        }
      }
    ],
    top: 25,
    selectedMode: false,
    type: 'scroll',
    icon: 'circle',
    itemWidth: 16,
    itemHeight: 16,
    textStyle: {
      color: '#C3E3F9',
      fontSize: 12
    }
  },
  xAxis: {
    data: companyList.value, // x轴公司
    type: 'category',
    axisLine: {
      show: true,
      lineStyle: {
        color: '#2B72A1'
      }
    },
    axisLabel: {
      fontSize: 13,
      color: '#87CCFF'
    },
    splitLine: {
      show: false
    },
    axisTick: {
      show: false
    },
    interval: 0
  },
  yAxis: [
    {
      type: 'value',
      name: '单位',
      nameGap: 24,
      nameTextStyle: {
        align: 'center',
        fontSize: 16,
        color: '#2869A9'
      },
      splitNumber: 4,
      splitLine: {
        show: true,
        lineStyle: {
          color: 'rgba(255,255,255,0.1)'
        }
      },
      axisLine: {
        show: false
      },
      axisLabel: {
        margin: 10,
        fontSize: 16,
        color: '#2869A9'
      },
      axisTick: {
        show: true,
        lineStyle: {
          color: '#2869A9'
        }
      }
    }
  ],
  series: [
    {
      // 下面
      data: [1, 1, 1, 1, 1],
      color: '#1E7EFF',
      type: 'pictorialBar',
      tooltip: {
        show: false
      },
      barMaxWidth: 48,
      symbol: 'diamond',
      symbolOffset: [-31.2, '50%'],
      zlevel: 3,
      symbolSize: [26, 13]
    },
    {
      // 上面
      data: deviceCount.value,
      type: 'pictorialBar',
      tooltip: {
        show: false
      },
      barMaxWidth: 48,
      color: '#1E7EFF',
      symbolPosition: 'end',
      symbol: 'diamond',
      symbolOffset: [-31.2, '-50%'],
      symbolSize: [26, 10.4],
      zlevel: 2
    },
    {
      // 阴影
      data: deviceCount.value,
      type: 'pictorialBar',
      tooltip: {
        show: false
      },
      barMaxWidth: 48,
      color: {
        x: 0,
        y: 1,
        x2: 0,
        y2: 0,
        type: 'linear',
        global: false,
        colorStops: [
          {
            offset: 0,
            color: 'rgba(0,0,0,0.2)'
          },
          {
            offset: 1,
            color: 'rgba(0,0,0,0.3)'
          }
        ]
      },
      symbolPosition: 'end',
      symbol: 'rect',
      symbolSize: [13, '100%'],
      symbolOffset: [-37.699999999999996, 0],
      zlevel: 1
    },
    {
      data: deviceCount.value,
      type: 'bar',
      name: '设备数量',
      barGap: '20%',
      barWidth: 26,
      barMaxWidth: 48,
      label: {
        show: true,
        position: 'top',
        distance: 4.8,
        textStyle: {
          color: '#4084EE',
          fontSize: 16
        }
      },
      showBackground: false,
      backgroundStyle: {
        color: {
          x: 0,
          y: 1,
          x2: 0,
          y2: 0,
          type: 'linear',
          global: false,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(64,132,238,0.2)'
            },
            {
              offset: 1,
              color: 'rgba(64,132,238,1)'
            }
          ]
        },
        opacity: 0.1
      },
      itemStyle: {
        color: {
          x: 0,
          y: 1,
          x2: 0,
          y2: 0,
          type: 'linear',
          global: false,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(64,132,238,0.2)'
            },
            {
              offset: 1,
              color: 'rgba(64,132,238,1)'
            }
          ]
        }
      }
    },
    {
      data: [1, 1, 1, 1],
      color: '#FFA75A',
      type: 'pictorialBar',
      tooltip: {
        show: false
      },
      barMaxWidth: 48,
      symbol: 'diamond',
      symbolOffset: [0, '50%'],
      zlevel: 3,
      symbolSize: [26, 13]
    },
    {
      data: branchCount.value,
      type: 'pictorialBar',
      tooltip: {
        show: false
      },
      barMaxWidth: 48,
      color: '#FFA75A',
      symbolPosition: 'end',
      symbol: 'diamond',
      symbolOffset: [0, '-50%'],
      symbolSize: [26, 10.4],
      zlevel: 2
    },
    {
      data: branchCount.value,
      type: 'pictorialBar',
      tooltip: {
        show: false
      },
      barMaxWidth: 48,
      color: {
        x: 0,
        y: 1,
        x2: 0,
        y2: 0,
        type: 'linear',
        global: false,
        colorStops: [
          {
            offset: 0,
            color: 'rgba(0,0,0,0.2)'
          },
          {
            offset: 1,
            color: 'rgba(0,0,0,0.3)'
          }
        ]
      },
      symbolPosition: 'end',
      symbol: 'rect',
      symbolSize: [13, '100%'],
      symbolOffset: [-6.5, 0],
      zlevel: 1
    },
    {
      data: branchCount.value,
      type: 'bar',
      name: '品牌数量',
      barGap: '20%',
      barWidth: 26,
      barMaxWidth: 48,
      label: {
        show: true,
        position: 'top',
        distance: 4.8,
        textStyle: {
          color: '#FF8D28',
          fontSize: 16
        }
      },
      showBackground: true,
      backgroundStyle: {
        color: {
          x: 0,
          y: 1,
          x2: 0,
          y2: 0,
          type: 'linear',
          global: false,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(255,141,40,0.2)'
            },
            {
              offset: 1,
              color: 'rgba(255,141,40,1)'
            }
          ]
        },
        opacity: 0.1
      },
      itemStyle: {
        color: {
          x: 0,
          y: 1,
          x2: 0,
          y2: 0,
          type: 'linear',
          global: false,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(255,141,40,0.2)'
            },
            {
              offset: 1,
              color: 'rgba(255,141,40,1)'
            }
          ]
        }
      }
    },
    {
      data: [1, 1, 1, 1],
      color: '#6ACC29',
      type: 'pictorialBar',
      tooltip: {
        show: false
      },
      barMaxWidth: 48,
      symbol: 'diamond',
      symbolOffset: [31.200000000000003, '50%'],
      zlevel: 3,
      symbolSize: [26, 13]
    },
    {
      data: typeCount.value,
      type: 'pictorialBar',
      tooltip: {
        show: false
      },
      barMaxWidth: 48,
      color: '#6ACC29',
      symbolPosition: 'end',
      symbol: 'diamond',
      symbolOffset: [31.200000000000003, '-50%'],
      symbolSize: [26, 10.4],
      zlevel: 2
    },
    {
      data: typeCount.value,
      type: 'pictorialBar',
      tooltip: {
        show: false
      },
      barMaxWidth: 48,
      color: {
        x: 0,
        y: 1,
        x2: 0,
        y2: 0,
        type: 'linear',
        global: false,
        colorStops: [
          {
            offset: 0,
            color: 'rgba(0,0,0,0.2)'
          },
          {
            offset: 1,
            color: 'rgba(0,0,0,0.3)'
          }
        ]
      },
      symbolPosition: 'end',
      symbol: 'rect',
      symbolSize: [13, '100%'],
      symbolOffset: [24.700000000000003, 0],
      zlevel: 1
    },
    {
      data: typeCount.value,
      type: 'bar',
      name: '类型数量',
      barGap: '20%',
      barWidth: 26,
      barMaxWidth: 48,
      label: {
        show: true,
        position: 'top',
        distance: 4.8,
        textStyle: {
          color: '#6ACC29',
          fontSize: 16
        }
      },
      showBackground: true,
      backgroundStyle: {
        color: {
          x: 0,
          y: 1,
          x2: 0,
          y2: 0,
          type: 'linear',
          global: false,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(106,204,41,0.2)'
            },
            {
              offset: 1,
              color: 'rgba(106,204,41,1)'
            }
          ]
        },
        opacity: 0.1
      },
      itemStyle: {
        color: {
          x: 0,
          y: 1,
          x2: 0,
          y2: 0,
          type: 'linear',
          global: false,
          colorStops: [
            {
              offset: 0,
              color: 'rgba(106,204,41,0.2)'
            },
            {
              offset: 1,
              color: 'rgba(106,204,41,1)'
            }
          ]
        }
      }
    }
  ]
})
</script>

<template>
  <DefaultEchart
    :option="option"
    v-if="loadFinish"
    :autoplay="true"
    :autoplayLen="companyList.length"
  />
</template>

<style lang="less" scoped>
.chart-item {
  width: 100%;
  height: 100%;
}
</style>
