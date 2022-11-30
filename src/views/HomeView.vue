<script setup>
import { ref } from 'vue';
import Login from '../components/Auth/Login.vue';
import Register from '../components/Auth/Register.vue';

 const toggleAuth = ref(false)
const toggleAuthPage = async()=>{
   toggleAuth.value = !toggleAuth.value
   console.log(toggleAuth.value)
}

</script>

<template>
  <main>
    <div class="bg-[url('/images/banner/bg.jpg')] bg-cover h-screen w-full text-white">
      <div class="max-w-6xl w-11/12 md:w-auto mx-auto h-full">
        <div class="grid grid-cols-2 gap-4 h-full items-center">
          <div>
            <div>
              <p class="text-6xl font-bold">
                Welcome!
              </p>
              <hr class="border-2 w-1/3  my-6">
            </div>
            <div class="text-gray-300">
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Possimus magni, laboriosam architecto consequuntur recusandae natus qui dolorum doloremque accusamus rem veritatis nihil vel unde ut quia iure voluptatibus quisquam ad!
              </p>
            </div>
          </div>
          <div>
            <Register v-if="toggleAuth" @toggleAuthPage="toggleAuthPage()" />
            <Login v-else @toggleAuthPage="toggleAuthPage()"  />
          </div>
        </div>
      </div>
    </div>
  </main>
</template>