<script setup lang="ts">
import { onMounted, ref, provide, watch, computed } from 'vue'
import { BorderBox1 } from '@dataview/datav-vue3'
import hooks from '@/hooks'

import Header from '@/components/Header/index.vue'
import Loading from '@/components/GlobalLoading/index.vue'

import LeftContent from './components/LeftContent.vue'
import CenterContent from './components/CenterContent.vue'
import RightContent from './components/RightContent.vue'

// 接口
// import { OrderStatisticDemo } from '@/utils/demo'
import { orderStatisticApi } from '@/api'

const { useScreen, useCommon } = hooks
const { setScreenMode } = useCommon()
const isLoading = ref(true)
const orderStatistic = ref({})

// 中上
const regions = computed(() => orderStatistic.value.regions)
const addNewOrder = computed(() => orderStatistic.value.addNewOrder)
const totalAmount = computed(() => orderStatistic.value.totalAmount)
// 右2
const orderComplete = computed(() => orderStatistic.value.completions)
// 左1
const orderCarousel = computed(() => orderStatistic.value.unitUseOrder)
// 左3
const projectList = computed(() => orderStatistic.value.projectInfoList)

provide('orderComplete', orderComplete)
provide('orderCarousel', orderCarousel)
provide('projectList', projectList)
provide('orderCount', { regions, totalAmount, addNewOrder })

const getOrderStatistic = async () => {
  const orderRes = await orderStatisticApi()
  orderStatistic.value = orderRes.data

  isLoading.value = false
}

getOrderStatistic()

// 制定html根字体大小
const initHtmlFontSize = () => {
  // logInfo(
  //   `设计稿为：${design.width}*${design.height}px；当前视图为：${viewActive.value}，可视区域大小：${screen.width}*${screen.height}px`
  // );

  screen.width = document.body.clientWidth
  screen.height = document.body.clientHeight

  const hr = screen.height / design.height // 屏幕高 / 设计稿的高
  const wr = screen.width / design.width // 屏幕宽 / 设计稿宽
  const swhr = screen.width / screen.height // 屏幕的宽高比, 大于1：横屏；否则：竖屏。

  console.log('screen-params', {
    'screen.width': screen.width,
    'screen.height': screen.height,
    'design.width': design.width,
    'design.height': design.height,
    swhr: swhr
  })

  // 横屏
  if (swhr > 1) {
    if (screen.width > 1200) {
      // 超宽屏大于 21：9
      if (swhr >= 21 / 9) {
        if (swhr > design.ratio) {
          contrastRatio.value = screen.height < minScreen.height ? 0.56 : hr * 1.2 // 以高度为基准制定
        } else {
          contrastRatio.value = screen.width < minScreen.width ? 0.6 : wr * 1.2 // 以宽度为基准制定
        }
      } else {
        // contrastRatio.value = hr; // 以高度为基准制定
        if (swhr > design.ratio) {
          contrastRatio.value = screen.height < minScreen.height ? 0.56 : hr // 以高度为基准制定
        } else {
          contrastRatio.value = screen.width < minScreen.width ? 0.6 : wr // 以宽度为基准制定
        }
      }
    } else {
      contrastRatio.value = 1
    }
  }
  // 竖屏
  document.documentElement.style.fontSize = contrastRatio.value * 100 + 'px'
}

const { design, screen, minScreen, contrastRatio } = useScreen(initHtmlFontSize)
// console.log('user-screnn', design, screen, minScreen, contrastRatio)

setScreenMode('AdptMultiDevice')
onMounted(() => {
  // setTimeout(() => {
  //
  // }, 2000)
})
</script>

<template>
  <div class="digital-screen-container">
    <header class="header"><Header /></header>
    <section class="section">
      <div class="aside-lf">
        <BorderBox1>
          <div class="container">
            <LeftContent />
          </div>
        </BorderBox1>
      </div>
      <div class="center">
        <CenterContent />
      </div>
      <div class="aside-rt">
        <BorderBox1>
          <div class="container">
            <RightContent />
          </div>
        </BorderBox1>
      </div>
    </section>
    <Loading v-if="isLoading" />
  </div>
</template>

<style lang="less" scoped>
.container {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: #fff;
}
.digital-screen-container {
  position: relative;
  height: 100%;
  overflow: hidden;
  display: flex;
  flex-direction: column;
}
.header {
  height: calc(55 * var(--app-base-unit));
}
.section {
  display: flex;
  height: calc(100vh - 55 * var(--app-base-unit));
  flex: 1;
  padding: calc(10 * var(--app-base-unit));
  box-sizing: border-box;
  .aside-lf {
    flex: 2;
  }
  .center {
    flex: 3;
  }
  .aside-rt {
    flex: 2;
  }
}
</style>