<template>
  <div class="wrapper">
    <div class="list">
      <v-card
        v-for="({ picture, name, email }, i) in list"
        :key="i"
      >
        <v-card-item>
          <template #prepend>
            <v-avatar size="64">
              <v-img
                :src="picture.medium"
                alt=""
              />
            </v-avatar>
          </template>

          <v-card-title>{{ name.title }}. {{ name.first }} {{ name.last }}</v-card-title>

          <v-card-subtitle>{{ email }}</v-card-subtitle>
        </v-card-item>

        <v-divider />

        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
        </v-card-text>
      </v-card>
    </div>

    <ObserverComponent @infinite="load">
      <template #spinner>
        <SpinnerComponent />
      </template>
    </ObserverComponent>
  </div>
</template>

<script setup>
import ObserverComponent from '@/components/ObserverComponent'
import SpinnerComponent from '@/components/SpinnerComponent'

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
