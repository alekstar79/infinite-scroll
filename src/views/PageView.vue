<template>
  <div class="wrapper">
    <h1>TEST</h1>

    <pre>{{ list }}</pre>
  </div>
</template>

<script setup>
import { useStore } from 'vuex'
import { computed } from 'vue'

const store = useStore()
const list = computed(() => store.state.page.list)
</script>

<style lang="scss" scoped>
  .wrapper {
    margin-top: 1.6rem;
  }
</style>
