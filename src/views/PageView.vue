<template>
  <div class="wrapper">
    <div class="list">
      <pre>{{ list }}</pre>
    </div>

    <ObserverComponent @infinite="load" />
  </div>
</template>

<script setup>
import ObserverComponent from '@/components/ObserverComponent'

import { FETCH_DATA } from '@/store/store-types'

import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()
const list = computed(() => store.state.page.list)

let page = 1

const load = () => {
  store.dispatch(FETCH_DATA, page++)
}
</script>

<style lang="scss" scoped>
  .wrapper {
    margin-top: 1.6rem;
  }
  .list {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1rem;
  }
</style>
