<template>
    <div class="w-full flex bg-purple-200">
        <div class="w-72 h-screen fixed md:static top-0" >
            <SideBar />
        </div>
        <div class="w-full">
            <PageNav />
        </div>
    </div>
</template>

<script setup>
import PageNav from '../Utility/PageNav.vue';
import SideBar from '../Utility/SideBar.vue';


</script>

<style lang="scss" scoped>

</style>