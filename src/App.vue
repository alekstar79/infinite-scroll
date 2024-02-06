<script setup>
import PageView from '@/views/PageView'
</script>

<template>
  <v-layout>
    <v-app-bar
      color="primary"
      height="64"
      elevation="1"
      prominent
    >
      <v-app-bar-nav-icon
        variant="text"
        @click.stop=""
      />
      <v-toolbar-title>Infinite Scroll</v-toolbar-title>

      <v-spacer />

      <v-btn
        variant="text"
        icon="mdi-magnify"
      />
      <v-btn
        variant="text"
        icon="mdi-filter"
      />
      <v-btn
        variant="text"
        icon="mdi-dots-vertical"
      />
    </v-app-bar>

    <v-main>
      <PageView />
    </v-main>
  </v-layout>
</template>
