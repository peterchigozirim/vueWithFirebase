<template>
    <div class="w-9/12 rounded mx-auto backdrop-blur-md space-y-6 bg-white/10 px-12 py-4">
        <div>
            <div class="text-3xl font-bold text-center font-FiraSans">
                <p>Sign <span class="border-b ">Up</span></p>
            </div>
        </div>
        <div>
            <form action="" class="space-y-4">
                <div>
                    <label class="font-semibold mb-2 capitalize block ml-1" for="username">Full Name</label>
                    <div class="bg-white/10 rounded-full w-full h-10 flex items-center px-2 text-gray-200">
                        <i class="ri-account-circle-line text-rose-400/90"></i>
                        <input type="text" placeholder="Enter your Full Name" required class="w-full text-sm h-full focus:outline-none focus:ring-0 pl-2 bg-transparent">
                    </div>
                </div>

                <div>
                    <label class="font-semibold mb-2 capitalize block ml-1" for="username">Email</label>
                    <div class="bg-white/10 rounded-full w-full h-10 flex items-center px-2 text-gray-200">
                        <i class="ri-account-circle-line text-rose-400/90"></i>
                        <input type="text" placeholder="Enter your Email" required class="w-full text-sm h-full focus:outline-none focus:ring-0 pl-2 bg-transparent">
                    </div>
                </div>
                <div>
                    <label class="font-semibold mb-2 capitalize block ml-1" for="username">password</label>
                    <div class="bg-white/10 rounded-full w-full h-10 flex items-center px-2 text-gray-200">
                        <i class="ri-lock-password-line text-rose-400/90"></i>
                        <input type="password" placeholder="Enter your Password" min="6" required class="w-full form-input text-sm h-full focus:outline-none focus:ring-0 pl-2 bg-transparent">
                    </div>
                </div>
                <div>
                    <label class="font-semibold mb-2 capitalize block ml-1" for="username">confirm password</label>
                    <div class="bg-white/10 rounded-full w-full h-10 flex items-center px-2 text-gray-200">
                        <i class="ri-lock-password-line text-rose-400/90"></i>
                        <input type="password" placeholder="Enter your Confirm Password" min="6" required class="w-full form-input text-sm h-full focus:outline-none focus:ring-0 pl-2 bg-transparent">
                    </div>
                </div>
                <div>
                    <div class="w-full">
                        <button type="submit"  class="flex w-full h-10 rounded-full bg-gradient-to-r from-rose-500 to-purple-600 transition-all hover:to-rose-500 hover:from-purple-600 backdrop-blur items-center justify-center">Submit</button>
                    </div>
                </div>
                <div>
                    <div class="text-xs cursor-pointer hover:underline" @click="toggleAuthPage()">
                        <div class="capitalize">
                            <p>
                                i have an account
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
</template>

<script setup>
import { ref } from 'vue';


    const emit = defineEmits(['toggleAuthPage'])
    const toggleAuthPage = async () =>{
        await emit('toggleAuthPage')
    }

    const form = ref({
        email: '',
        fullname: '',
        password: ''
    })
</script>
