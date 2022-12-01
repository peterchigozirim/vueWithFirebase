<template>
    <div class="bg-[url('/images/banner/bg.jpg')] bg-cover h-screen w-full text-white">
      <div class="max-w-6xl w-11/12 md:w-auto mx-auto h-full">
        <div class="grid md:grid-cols-2 gap-4 h-full pt-20 md:pt-0 md:items-center">
          <WelcomeComponent class="hidden md:block" />
          <div>
            <RegisterComponent v-if="toggleAuth" @toggleAuthPage="toggleAuthPage()" />
            <LoginComponent v-else @toggleAuthPage="toggleAuthPage()"  />
          </div>
        </div>
      </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import LoginComponent from '../components/Auth/LoginComponent.vue';
    import RegisterComponent from '../components/Auth/RegisterComponent.vue';
    import WelcomeComponent from '../components/Auth/WelcomeComponent.vue';

    const toggleAuth = ref(false)
    const toggleAuthPage = async()=>{
      toggleAuth.value = !toggleAuth.value
    }
</script>

<style lang="scss" scoped>

</style>