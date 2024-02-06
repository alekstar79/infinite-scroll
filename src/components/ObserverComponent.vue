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
    <div
      v-show="state === 'error'"
      class="observer--error"
    >
      <slot name="error" />
    </div>
  </div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, nextTick } from 'vue'
import { startObserver, getParentEl, isVisible } from '@/utils'

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

/**
* @type {{observerNode: Ref<UnwrapRef<HTMLElement|null>>, distance: InferPropType<{default: number, type: NumberConstructor}>, top: InferPropType<{default: boolean, type: BooleanConstructor}>, parentEl: null, emit(): void}}
*/
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

/**
* @type {{loaded(): void, loading(): void, error(): void}}
*/
const stateHandler = {
  loading() {
    state.value = 'loading'
  },
  async loaded() {
    state.value = 'loaded'

    await nextTick()

    if (isVisible(observerNode.value, params.parentEl)) {
      params.emit()
    }
  },
  error() {
    state.value = 'error'
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
