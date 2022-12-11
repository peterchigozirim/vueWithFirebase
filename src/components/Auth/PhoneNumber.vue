<template>
    <div class="w-11/12 md:w-9/12 rounded mx-auto backdrop-blur-md space-y-6 bg-white/10 px-4 md:px-12 py-4">
        <div>
            <div class="text-3xl font-bold text-center font-FiraSans">
                <p>Sign <span class="border-b ">In with Phone</span></p>
            </div>
        </div>
        <div>
            <form @submit.prevent="submit()" class="space-y-6">
                <div>
                    <label class="font-semibold mb-2 capitalize block ml-1" for="username">Phone Number</label>
                    <small>(+01)</small>
                    <div class="bg-white/10 rounded-full w-full h-10 flex items-center px-2 overflow-hidden text-gray-200">
                        <i class="ri-account-circle-line text-rose-400/90"></i>
                        <input type="text" v-model="form.phone" placeholder="Enter your Email Address" autocomplete="email" autofocus required class="w-full text-sm h-full focus:outline-none focus:ring-0 pl-2 bg-transparent">
                    </div>
                </div>
                <div>
                    <div class="w-full">
                        <button type="submit"  class="flex w-full h-10 rounded-full bg-gradient-to-r from-rose-500 to-purple-600 transition-all hover:to-rose-500 hover:from-purple-600 backdrop-blur items-center justify-center">Submit</button>
                    </div>
                </div>
                <div>
                    <div class="flex gap-2 justify-center text-2xl">
                        <div><i class="ri-facebook-circle-fill"></i></div>
                        <div><i class="ri-google-fill"></i></div>
                        <div><i class="ri-github-fill"></i></div>
                    </div>
                </div>
            </form>
        </div>
        
    </div>
    <div v-if="store.loader" class="fixed top-0 left-0 h-screen w-screen flex z-50 bg-purple-800/20 backdrop-blur-md">
        <div class="m-auto filter-none blur-none z-10">
            <img src="/images/loader/loader.svg" alt="">
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { AuthStore } from '@/stores/AuthStore'

    const store = AuthStore() 
  

    const form = ref({
        phone: '',
    })
    const submit = ()=>{
        store.phoneSignup(form.value)
    }
    
</script>