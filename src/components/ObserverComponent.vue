<template>
  <div
    ref="observerNode"
    class="observer"
  >
    <div
      v-show="state === 'loading'"
      class="observer--loading"
    >
      <slot name="spinner" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, onUnmounted } from 'vue'
import { startObserver, getParentEl } from '@/utils'

const emit = defineEmits(['infinite'])
const props = defineProps({
  target: {
    type: [HTMLElement, String],
    default: null
  },
  distance: {
    type: Number,
    default: 0
  },
  top: {
    type: Boolean,
    default: false
  }
})

const observerNode = ref(null)
const state = ref('')

const params = {
  observerNode,
  distance: props.distance,
  top: props.top,
  parentEl: null,

  emit()
  {
    stateHandler.loading()
    emit('infinite', stateHandler)
  }
}

const stateHandler = {
  loading() {
    state.value = 'loading'
  },
  loaded() {
    state.value = 'loaded'
  },
  error() {
    // do something...
  }
}

let observer = null

onMounted(async () => {
  params.parentEl = await getParentEl(props.target)
  observer = startObserver(params)
})

onUnmounted(() => {
  observer?.disconnect()
})
</script>

<style lang="scss" scoped>
  .observer {
    &--loading,
    &--error {
      display: flex;
      justify-content: center;
      padding: 16px;
    }
  }
</style>
