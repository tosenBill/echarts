<script setup lang="ts">
import { ref } from 'vue'
import CountStatistic from '@/components/ChartLibs/CountStatistic.vue'
import ChinaChart from '@/components/ChartLibs/ChinaChart.vue'
import Notice from '@/components/ChartLibs/Notice.vue'

import { chartTitle } from '@/utils/enum'

const emits = defineEmits(['curComps'])

const chartClicked = (compsName: string, title: string) => {
  console.log('chartClicked', compsName, title)
  emits('curComps', { compsName, title })
}
</script>

<template>
  <div class="center-content">
    <div class="center-content__top">
      <CountStatistic />
    </div>
    <div class="center-content__center">
      <ChinaChart @click="chartClicked('ChinaChart', chartTitle['ChinaChart'])" />
    </div>
    <div class="center-content__bottom" style="fontsize: 30px">
      <Notice @click="chartClicked('Notice', chartTitle['Notice'])" />
    </div>
  </div>
</template>

<style lang="less" scoped>
.center-content {
  height: calc(100vh - 75 * var(--app-base-unit));
  display: flex;
  flex-direction: column;
  &__top {
    height: calc(150 * var(--app-base-unit));
  }
  &__center {
    flex: 1;
    // height: calc(500 * var(--app-base-unit))
  }
  &__bottom {
    height: calc(200 * var(--app-base-unit));
    display: flex;
    justify-content: center;
    align-items: center;
  }
}
</style>
