<script setup lang="ts">
import { ref, watch } from 'vue'
import { clearTimer } from '@/utils'

const props = defineProps({
  // 数值
  value: {
    type: Number,
    default: 0
  },
  // 字体颜色
  color: {
    type: String,
    default: '#3fffe4'
  },
  // 持续时间
  duration: {
    type: Number,
    default: 1000
  }
})

const emit = defineEmits(['update:value'])
const timer = ref(null)

watch(
  () => props.value,
  (val) => {
    if (val !== 0) {
      clearTimer([timer.value])
      timer.value = setTimeout(() => {
        emit('update:value', 0)
      }, props.duration)
    }
  }
)

const setText = () => `${props.value > 0 ? '+' : ''}${props.value}`

const geRightPos = (value) => `-${value.toString().length * 10 + 10}px`
</script>

<template>
  <div class="fade-num-container">
    <slot></slot>
    <transition name="fade">
      <span v-if="value !== 0" class="change-num" :style="{ color, right: geRightPos(value) }">{{
        setText()
      }}</span>
    </transition>
  </div>
</template>

<style lang="less" scoped>
.fade-num-container {
  position: relative;
  // padding: 0 size(5);
}
.change-num {
  position: absolute;
  z-index: 999;
  font-weight: normal;
  font-size: calc(14 * var(--app-base-unit));
  // top: calc(40 * var(--app-base-unit));;
  right: calc(40 * var(--app-base-unit));
}
</style>
