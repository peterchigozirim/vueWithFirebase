<template>
    <div class="w-full bg-[#26041d] h-12 ">
        <div class="w-11/12 h-full mx-auto text-white/70 flex justify-between items-center">
            <div>
                <p>Page name</p>
            </div>
            <div class="flex h-full items-center">
                <div class="relative">
                    <div @click="(openProfile = !openProfile)" class="w-7 h-7 cursor-pointer overflow-hidden rounded-full bg-white/30 backdrop-blur-md">
                        <img src="/images/icons/avatar.png" class="h-full w-full" alt="">
                    </div>
                    <div :class="openProfile? 'w-44' : 'w-0'" class="absolute transition-all duration-500 h-16 top-10 overflow-hidden rounded capitalize bg-[#26041d] right-0">
                        <div>
                            <RouterLink to="/" class="px-2 hover:bg-white/40 py-1 flex items-center justify-between w-full" >
                                <div>
                                    <p>profile</p>
                                </div>
                                <div class="w-5 h-5 overflow-hidden rounded-full bg-white/30 backdrop-blur-md">
                                    <img src="/images/icons/avatar.png" class="h-full w-full" alt="">
                                </div>
                            </RouterLink>
                        </div>
                        <div>
                            <button @click="logOut()" class="px-2 hover:bg-white/40 py-1 flex capitalize items-center justify-between w-full">
                                <div>
                                    sign out
                                </div>
                                <div>
                                    <i class="ri-logout-circle-line -rotate-45 text-red-600"></i>
                                </div>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div v-if="loader" class="fixed top-0 left-0 h-screen w-screen flex z-50 bg-purple-800/20 backdrop-blur-md">
        <div class="m-auto filter-none blur-none z-10">
            <img src="/images/loader/loader.svg" alt="">
        </div>
    </div>
</template>

<script setup>
    import { ref } from 'vue';
    import { RouterLink } from 'vue-router'
    import { AuthStore } from '@/stores/AuthStore'

    const store = AuthStore()
    const openProfile = ref(false)
    // const scrolled = ref(0)
    const handleScroll = () => {
        openProfile.value = false
    }
    const loader = ref(false)
    const logOut = ()=>{
        loader.value = true
        store.signoutUser()
    }
    window.addEventListener('scroll', handleScroll())
</script>

<style lang="scss" scoped>

</style>