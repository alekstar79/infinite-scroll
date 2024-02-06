<template>
  <div class="wrapper">
    <div class="list">
      <pre>{{ list }}</pre>
    </div>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed, onMounted } from 'vue'

import { FETCH_DATA } from '@/store/store-types'

const store = useStore()
const list = computed(() => store.state.page.list)

onMounted(() => {
  store.dispatch(FETCH_DATA)
})
</script>

<style lang="scss" scoped>
  .wrapper {
    margin-top: 1.6rem;
  }
</style>
