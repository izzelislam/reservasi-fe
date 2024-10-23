<template>
  <NuxtLayout key="default">

    <section class="mb-6 mt-12">
      <Container>
        <p class="text-burem-500 font-bold">Sesuaiin lagi sama tanggal yang kamu mau ?</p>
      </Container>
    </section>

    <section class="mb-8">
      <Container>
        <div class="bg-white shadow-lg p-4  grid grid-cols-1 md:grid-cols-3 gap-8">
        
          <div id="wrapper" class="flex gap-3 items-center bg-form rounded-lg focus-within:border focus-within:border-primary">
            <div class="pl-2 flex items-center flex-col">
              <UIcon name="i-solar-calendar-bold-duotone" class="w-7 h-7 text-primary" />
            </div>
            <input class="focus:outline-none w-full h-4 bg-form py-6 rounded-lg" placeholder="Tanggal Check-Out" type="" />
          </div>

          <div id="wrapper" class="flex gap-3 items-center bg-form rounded-lg focus-within:border focus-within:border-primary">
            <div class="pl-2 flex items-center flex-col">
              <UIcon name="i-solar-calendar-bold-duotone" class="w-7 h-7 text-primary" />
            </div>
            <input class="focus:outline-none w-full h-4 bg-form py-6 rounded-lg" placeholder="Tanggal Check-Out" type="" />
          </div>
          
          <div>
            <UButton icon="i-solar-rounded-magnifer-bold-duotone" size="lg" block>Cari Ketersediaan</UButton>
          </div>
        </div>
      </Container>
    </section>

    <section class="bg-form py-12">
      <Container>
        <div class="mb-6">
          <p class="text-burem-500 font-bold">Hore  tanggal yang kamu pilih masih tersedia </p>
          <p class="text-sm text-burem-200">Silahkan pilih kamar yang kamu suka</p>
        </div>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-8">
          <ProductCard v-for="i in 8" :key="i" />
        </div>
      </Container>
    </section>

  </NuxtLayout>
</template>
