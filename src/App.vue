<script setup>
import { onMounted } from 'vue';
import { RouterLink, RouterView } from 'vue-router'
import { AuthStore } from '@/stores/AuthStore'

  const storeAuth = AuthStore()
onMounted(() => {
  storeAuth.init()
})
</script>

<template>
  <header>
    
  </header>

  <RouterView />
</template>

<style scoped>

</style>
