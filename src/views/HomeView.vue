<script setup>

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
            <div class="w-9/12 rounded mx-auto backdrop-blur-md space-y-6 bg-white/10 px-12 py-4">
              <div>
                <div class="text-3xl font-bold text-center font-FiraSans">
                  <p>Sign <span class="border-b ">In</span></p>
                </div>
              </div>
              <div>
                <form action="">
                  <div>
                    <label class="font-semibold mb-2 capitalize block " for="username">username</label>
                    <div class="bg-white/20 rounded-full w-full h-10">
                      <input type="text" placeholder="Enter your username" class="w-full text-sm h-full focus:outline-none focus:ring-0 px-3 bg-transparent">
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
