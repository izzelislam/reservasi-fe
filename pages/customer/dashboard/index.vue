<template>
  <NuxtLayout key="default" >
    <section class="bg-form py-12">
      <Container>
        <div class="flex flex-col md:flex-row gap-8">
          <div class="md:w-2/12 md:h-[400px] bg-white rounded-lg p-8">
            <Sidebar/>
          </div>
          <div class="md:w-10/12 bg-white rounded-lg p-6">
            <div class="text-burem-500 font-semibold pb-4 mb-4 border-b border-gray-300">
              <p>Selamat datang Dominic Solanske</p>
            </div>

            <Ticket v-for="i in 5" :key="i" />

          </div>
        </div>
      </Container>
    </section>
  </NuxtLayout>
</template>