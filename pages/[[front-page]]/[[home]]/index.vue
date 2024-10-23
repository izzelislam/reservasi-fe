<script setup lang="ts">
  
  const year = new Date().getFullYear();

</script>

<template>
  <NuxtLayout key="default">
    <section 
      class="bg-cover bg-center bg-no-repeat h-[600px] flex flex-col justify-center items-center"
      style="background-image: url('/assets/img/main-bg.png')"
    >
      <Container>
        <div class="flex justify-between items-center">
          <div class="hidden md:flex flex-col justify-center">
            <p class="text-4xl font-bold text-white">Booking home stay online <br/>dengan harga promo</p>
          </div>
          <div class="bg-white p-8 rounded-lg shadow-lg w-[460px]">
            <p class="font-semibold text-gray-600 mb-8">Yuk cari tanggal yang sesuai  <br> tempat paling nyaman buat kamu</p>

            <div id="wrapper" class="flex gap-3 items-center bg-form rounded-lg focus-within:border focus-within:border-primary mb-8">
              <div class="pl-2 flex items-center flex-col">
                <UIcon name="i-solar-calendar-bold-duotone" class="w-7 h-7 text-primary" />
              </div>
              <input class="focus:outline-none w-full h-4 bg-form py-6 rounded-lg" placeholder="Tanggal Check-In" type="" />
            </div>

            <div id="wrapper" class="flex gap-3 items-center bg-form rounded-lg focus-within:border focus-within:border-primary mb-8">
              <div class="pl-2 flex items-center flex-col">
                <UIcon name="i-solar-calendar-bold-duotone" class="w-7 h-7 text-primary" />
              </div>
              <input class="focus:outline-none w-full h-4 bg-form py-6 rounded-lg" placeholder="Tanggal Check-Out" type="" />
            </div>

            <div>
              <UButton icon="i-solar-rounded-magnifer-bold-duotone" size="lg" block>Cari Ketersediaan</UButton>
            </div>

          </div>
        </div>
      </Container>
    </section>

    <section class="bg-form">
      <Container class="py-24">
        <div class="flex flex-wrap gap-4 items-center mb-12">
          <div class="bg-primary rounded-full w-12 h-12 flex justify-center items-center">
            <UIcon name="i-solar-bed-bold-duotone" class="w-7 h-7 text-white " />
          </div>
          <div>
            <p class="text-burem-500 font-bold">Tidur nyenyak di  sini </p>
            <p class="text-sm text-burem-200">Wujudin staycation impianmu di vila dan penginapan dengan view terbaik.</p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <ProductCard v-for="i in 8" :key="i" />
        </div>

      </Container>
    </section>

    <section class="py-8">
      <Container>
        <div  class="p-12 bg-primary rounded-lg flex justify-between items-center flex-wrap gap-4">
          <div class="">
            <p class="text-white font-semibold text-2xl mb-3">
              Sekarang bisa lebih tenang karena <br> kamu
              bisa booking secara online
            </p>
            <p class="text-white">Selain anti ribet dan gak takut kehabisan kamu juga bisa dapet penawaran spesial</p>
          </div>
          <div>
            <button class="bg-kuneng text-burem-500 font-semibold px-6 py-3 rounded-lg hover:bg-kuneng/80">Cek Ketersediaan</button>          
          </div>
        </div>
      </Container>
    </section>

    <section class="bg-form">
      <Container class="py-24">
        <div class="flex flex-wrap gap-4 items-center mb-12">
          <div class="bg-primary rounded-full w-12 h-12 flex justify-center items-center">
            <UIcon name="i-solar-document-bold-duotone" class="w-7 h-7 text-white " />
          </div>
          <div>
            <p class="text-burem-500 font-bold">Informasi Buat kamu </p>
            <p class="text-sm text-burem-200">informasi buat bantu kamu saat liburan </p>
          </div>
        </div>

        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <InfoCard v-for="i in 4" :key="i" />
        </div>

      </Container>
    </section>

    <section class="bg-form pb-12">
      <Container class="cursor-pointer">
        <img src="/assets/img/playstore.png" class="w-full" />
      </Container>
    </section>
  </NuxtLayout>
</template>