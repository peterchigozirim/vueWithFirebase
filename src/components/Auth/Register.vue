<template>
    <div class="w-9/12 rounded mx-auto backdrop-blur-md space-y-6 bg-white/10 px-12 py-4">
        <div>
            <div class="text-3xl font-bold text-center font-FiraSans">
                <p>Sign <span class="border-b ">Up</span></p>
            </div>
        </div>
        <div>
            <form @submit.prevent="submit()" class="space-y-4">
                <!-- <div>
                    <label class="font-semibold mb-2 capitalize block ml-1" for="username">Full Name</label>
                    <div class="bg-white/10 rounded-full w-full h-10 flex items-center px-2 text-gray-200">
                        <i class="ri-account-circle-line text-rose-400/90"></i>
                        <input type="text" v-model="form.fullname" placeholder="Enter your Full Name" required class="w-full text-sm h-full focus:outline-none focus:ring-0 pl-2 bg-transparent">
                    </div>
                </div> -->

                <div>
                    <label class="font-semibold mb-2 capitalize block ml-1" for="username">Email</label>
                    <div class="bg-white/10 rounded-full w-full h-10 flex items-center px-2 text-gray-200">
                        <i class="ri-account-circle-line text-rose-400/90"></i>
                        <input type="email" v-model="form.email" placeholder="Enter your Email" required class="w-full text-sm h-full focus:outline-none focus:ring-0 pl-2 bg-transparent">
                    </div>
                </div>
                <div>
                    <label class="font-semibold mb-2 capitalize block ml-1" for="username">password</label>
                    <div class="bg-white/10 rounded-full w-full h-10 flex items-center px-2 text-gray-200">
                        <i class="ri-lock-password-line text-rose-400/90"></i>
                        <input type="password" v-model="form.password" placeholder="Enter your Password"  required class="w-full form-input text-sm h-full focus:outline-none focus:ring-0 pl-2 bg-transparent">
                    </div>
                </div>
                <div>
                    <label class="font-semibold mb-2 capitalize block ml-1" for="username">confirm password</label>
                    <div class="bg-white/10 rounded-full w-full h-10 flex items-center px-2 text-gray-200">
                        <i class="ri-lock-password-line text-rose-400/90"></i>
                        <input type="password" v-model="form.cpassword" placeholder="Enter your Confirm Password"  required class="w-full form-input text-sm h-full focus:outline-none focus:ring-0 pl-2 bg-transparent">
                    </div>
                    <span v-if="passError" class="text-xs text-red-500 font-semibold">*Password do not match</span>
                   
                </div>
                <div>
                    <div class="w-full">
                        <button type="submit"  class="flex w-full h-10 rounded-full bg-gradient-to-r from-rose-500 to-purple-900 transition-all hover:to-rose-500 hover:from-purple-600 backdrop-blur items-center justify-center">Create</button>
                    </div>
                </div>
                <div>
                    <div class="text-xs cursor-pointer hover:underline" @click="toggleAuthPage()">
                        <div class="capitalize">
                            <p>
                                i have an account
                            </p>
                        </div>
                        <div class="w-full">
                        <button type="button" @click="logOut()" v-if="store.user != null" class="flex w-full h-10 rounded-full bg-gradient-to-r from-rose-500 to-purple-900 transition-all hover:to-rose-500 hover:from-purple-600 backdrop-blur items-center justify-center">log-out</button>
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
    <div v-if="loader" class="fixed top-0 left-0 h-screen w-full flex z-50 bg-purple-800/20 backdrop-blur-md">
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
    const loader = ref(false)
    const form = ref({
        email: '',
        fullname: '',
        password: '',
        cpassword: ''
    })

    if (store.errors != null) {
        loader.value = false
    }

    const passError = ref(false)
    const submit = ()=>{
        if (form.value.password != form.value.cpassword) {
            return passError.value = true
        }else{
            loader.value = true
            store.registerUser(form.value)
        }
    }

    const logOut = ()=>{
        store.signoutUser()
    }
</script>
