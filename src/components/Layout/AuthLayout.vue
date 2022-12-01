<template>
    <div class="w-full flex bg-purple-200 relative">
        <div :class="openNav? 'w-full z-50': 'w-0'" @click="checkNav()" :openNav="openNav" class="md:w-72  max-w-[18rem] overflow-hidden  bg-purple-600/30 transition-all duration-500 backdrop-blur-md md:backdrop-blur-0 md:bg-transparent h-[100%] fixed  top-0" >
            <SideBar />
        </div>
        <div class="w-full min-h-screen md:ml-72">
            <PageNav class="sticky top-0" @checkNav="checkNav()" />
            <div class="bg-[url('/images/banner/bg.jpg')] bg-fixed text-white/80 py-10 px-4 bg-center  h-full bg-cover">
                <slot />
            </div>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import PageNav from '../Utility/PageNav.vue';
import SideBar from '../Utility/SideBar.vue';


const openNav = ref(false)
const checkNav = ()=>{
    openNav.value = !openNav.value
}
</script>

<style lang="scss" scoped>

</style>