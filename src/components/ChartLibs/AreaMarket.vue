<script setup lang="ts">
import { ref, unref, inject, computed, watch } from 'vue'
import { propTypes } from '@/utils/propTypes'

import DefaultChart from './DefaultChart.vue'
import hooks from '@/hooks'
import { getRandomBetween } from '@/utils/commonFn'
// import { marketAreaListApi } from '@/api'

const { useModuleData } = hooks
const { calcFont, contrastRatio } = useModuleData(null)

const loadFinish = ref(false)

const data = ref([])

const supermarket = inject('supermarket', [])

const props = defineProps({
  isScale: propTypes.number.def(1)
})

const packageData = (areaMarketList = []) => {
  for (var i = 0; i < areaMarketList.length; i++) {
    const getRandomSize =
      contrastRatio.value * getRandomBetween(50 * props.isScale, 80 * props.isScale)
    const obj = {
      name: areaMarketList[i].name,
      value: areaMarketList[i].children?.length,
      symbolSize: getRandomSize,
      itemStyle: {
        color:
          'rgb(' +
          Math.round(Math.random() * 255) +
          ', ' +
          Math.round(Math.random() * 255) +
          ', ' +
          Math.round(Math.random() * 255) +
          ')'
      }
    }
    data.value.push(obj)
  }
}

const initData = (newVal) => {
  const list = unref(newVal).filter((item) => item.id !== 1)
  packageData(list)
  loadFinish.value = true

  console.log('area-initdata')
}

if (props.isScale > 1) {
  initData(supermarket)
}

watch(
  () => supermarket,
  (newVal) => {
    initData(newVal)
  },
  {
    deep: true
  }
)

const option = computed(() => {
  return {
    title: {
      top: 'auto',
      text: '区域中心',
      // left: '5%',
      bottom: 0,
      textStyle: {
        fontSize: calcFont(16 * props.isScale),
        fontWeight: 'bolder',
        color: '#fff' // 主标题文字颜色
      }
    },
    tooltip: {
      show: true,
      extraCssText: 'z-index:3'
    },
    grid: {
      bottom: '10%'
    },
    series: [
      {
        type: 'graph', // 关系图
        layout: 'force', //图的布局，类型为力导图，'circular' 采用环形布局
        force: {
          repulsion: [
            props.isScale > 1 ? 50 * props.isScale * 2 : 50,
            props.isScale > 1 ? 140 * props.isScale * 2 : 140
          ], //节点之间的斥力因子。支持数组表达斥力范围，值越大斥力越大。
          edgeLength: 10 * props.isScale //边的两个节点之间的距离，这个距离也会受 repulsion。[10, 50] 。值越小则长度越长
        },
        roam: true,
        label: {
          normal: {
            show: true
            // fontSize: calcFont(20)
          }
        },
        data: data.value
      }
    ]
  }
})
</script>

<template>
  <DefaultChart :option="option" :autoplay="true" v-if="loadFinish" />
</template>

<style lang="less" scoped>
.area-market {
  height: 32vh;
  overflow: hidden;
}
</style>
