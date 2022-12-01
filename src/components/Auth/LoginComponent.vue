<template>
    <div class="w-11/12 md:w-9/12 rounded mx-auto backdrop-blur-md space-y-6 bg-white/10 px-4 md:px-12 py-4">
        <div>
            <div class="text-3xl font-bold text-center font-FiraSans">
                <p>Sign <span class="border-b ">In</span></p>
            </div>
        </div>
        <div>
            <form @submit.prevent="submit()" class="space-y-6">
                <div>
                    <label class="font-semibold mb-2 capitalize block ml-1" for="username">Email</label>
                    <div class="bg-white/10 rounded-full w-full h-10 flex items-center px-2 overflow-hidden text-gray-200">
                        <i class="ri-account-circle-line text-rose-400/90"></i>
                        <input type="text" v-model="form.email" placeholder="Enter your Email Address" autocomplete="email" autofocus required class="w-full text-sm h-full focus:outline-none focus:ring-0 pl-2 bg-transparent">
                    </div>
                </div>
                <div>
                    <label class="font-semibold mb-2 capitalize block ml-1" for="username">password</label>
                    <div class="bg-white/10 rounded-full w-full h-10 flex items-center overflow-hidden px-2 text-gray-200">
                        <i class="ri-lock-password-line text-rose-400/90"></i>
                        <input type="password" v-model="form.password" placeholder="Enter your username" autocorrect="password" autofocus required class="w-full text-sm h-full focus:outline-none focus:ring-0 pl-2 bg-transparent">
                    </div>
                </div>
                <div>
                    <div class="w-full">
                        <button type="submit"  class="flex w-full h-10 rounded-full bg-gradient-to-r from-rose-500 to-purple-600 transition-all hover:to-rose-500 hover:from-purple-600 backdrop-blur items-center justify-center">Submit</button>
                    </div>
                </div>
                <div>
                    <div class="flex justify-between text-xs">
                        <div class="capitalize">
                            <p>
                                forget password
                            </p>
                        </div>
                        <div class="capitalize cursor-pointer hover:underline select-none" @click="toggleAuthPage()">
                            <p>
                                i don't have an account
                            </p>
                        </div>
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
    <div v-if="loader" class="fixed top-0 left-0 h-screen w-screen flex z-50 bg-purple-800/20 backdrop-blur-md">
        <div class="m-auto filter-none blur-none z-10">
            <img src="/images/loader/loader.svg" alt="">
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import { AuthStore } from '@/stores/AuthStore'

    const store = AuthStore() 
  
    const emit = defineEmits(['toggleAuthPage'])
    const toggleAuthPage = async() =>{
       await emit('toggleAuthPage')
    } 

    const form = ref({
        email: '',
        password: ''
    })
    const loader = ref(false)
    const submit = ()=>{
        loader.value = true
        store.loginUser(form.value)
    }
    
</script>