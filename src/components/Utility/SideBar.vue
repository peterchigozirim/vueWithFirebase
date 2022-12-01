 <template>
    <div class="bg-[url('/images/banner/bg.jpg')] bg-fixed w-72 md:w-full max-w-[18rem] h-full text-white/80 bg-left overflow-y-auto bg-repeat bg-cover scrollbar-thumb-rose-900/60 scrollbar-track-[#26041d] scrollbar-thin">
        <div class="h-80 py-16 bg-white/5 backdrop-blur-md flex  flex-col space-y-6 items-center">
            <div class="w-28 h-28 border-white/50 border rounded-full">
                <img src="/images/icons/avatar.png" class="h-full w-full" alt="">
            </div>
            <div class="text-lg font-thin">
                <p>
                    {{ store.user.email }}
                </p>
            </div>
        </div>
        <div class="space-y-4 py-4">
            <div class="px-2">
                <p>Welcome</p>
            </div>
            <div class="space-y-0.5">
                <RouterLink to="/" class="py-4 pl-6 bg-white/20 hover:bg-white/50 backdrop-blur-md inline-block w-full">Dashboard</RouterLink>
                <RouterLink to="/" class="py-4 pl-6 bg-white/20 hover:bg-white/50 backdrop-blur-md inline-block w-full">Dashboard</RouterLink>
                <RouterLink to="/" class="py-4 pl-6 bg-white/20 hover:bg-white/50 backdrop-blur-md inline-block w-full">Dashboard</RouterLink>
                <RouterLink to="/" class="py-4 pl-6 bg-white/20 hover:bg-white/50 backdrop-blur-md inline-block w-full">Dashboard</RouterLink>
                <RouterLink to="/" class="py-4 pl-6 bg-white/20 hover:bg-white/50 backdrop-blur-md inline-block w-full">Dashboard</RouterLink>
                <RouterLink to="/" class="py-4 pl-6 bg-white/20 hover:bg-white/50 backdrop-blur-md inline-block w-full">Dashboard</RouterLink>
                <RouterLink to="/" class="py-4 pl-6 bg-white/20 hover:bg-white/50 backdrop-blur-md inline-block w-full">Dashboard</RouterLink>
            </div>
        </div>
    </div>
 </template>
 
 <script setup>
    import { RouterLink } from 'vue-router';
    import { AuthStore } from '../../stores/AuthStore';
    
    const store = AuthStore()
 </script>
 
 <style scoped>

 </style>