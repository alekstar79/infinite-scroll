<template>
  <div class="spinner" />
</template>

<style lang="scss" scoped>
.spinner {
  box-sizing: initial;
  height: 32px;
  width: 32px;

  border: 2px solid #a1a1a1;
  border-right-color: transparent;
  border-radius: 50%;

  animation: spin .9s linear infinite;
}
@keyframes spin {
  100% {
    transform: rotate(360deg);
  }
}
</style>
