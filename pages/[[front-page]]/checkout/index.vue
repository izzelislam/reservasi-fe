<script setup lang="ts">
  const payments = [{
      name: 'transfer',
      value: 'transfer'
    }, {
      name: 'cash',
      value: 'cash',
    }
  ]

  const payment = ref('transfer')

</script>


<template>
  <NuxtLayout key="default">
    <section class="bg-form">
      <Container class="py-8">
        <div class="mb-6">
          <p class="text-burem-500 font-bold">Checkout</p>
        </div>
        <div class="flex flex-col md:flex-row gap-8">
          <div class="bg-white p-6 rounded-lg flex flex-col md:flex-row gap-4 md:w-8/12">
            <NuxtImg src="/assets/img/room.png" class="md:w-28 md:h-28 object-cover object-center rounded-lg" />
            <div>
              <h2 class="text-burem-500 font-semibold">Kamar double bed fasilitas  lengkap dengan view</h2>
              <p class="text-burem-200 text-sm py-4">17 Agustus 2024 -  21 Agustus 2024 </p>
              
              <p class="text-sm font-semibold text-burem-500 mb-1">Harga / Kamar /Malam</p>
              <div class="flex items-center gap-3">
                <p class="text-abang-500 font-bold text-xl">Rp   600.000.00</p>
                <p class="text-burem-200 line-through">Rp 700.000.00</p>
              </div>
            </div>
          </div>

          <div class="hidden md:block md:w-4/12 bg-white p-6 rounded-lg">
            <div class="mb-4 pb-4 border-b border-gray-300">
              <p class="font-semibold text-lg text-burem-500">Total bayar</p>
            </div>
            <div class="pb-4 mb-4 border-b border-gray-300">
              <p class="text-burem-200 mb-2">Kamar double bed fasilitas  lengkap dengan view terbaik</p>
              <p class="text-abang-500 font-bold text-2xl">Rp 600.000.00</p>
            </div>
            <div>
              <p class="text-burem-200 text-sm mb-2">Pilih metode pembayaran</p>
               <USelect size="lg" v-model="payment" :options="payments" option-attribute="name" color="gray"/>
            </div>
            <div>
              <UButton color="primary" class="mt-4" size="xl" block icon="i-solar-box-bold-duotone">Booking</UButton>
            </div>
          </div>
        </div>
      </Container>

    </section>

    <!-- floationg action -->
    <div class="fixed md:hidden left-0 right-0 bottom-0 z-10 bg-white p-6 rounded-lg rounded-t-xl drop-shadow-[0_0px_22px_rgba(0,0,0,0.50)]">
      <div class="mb-4 pb-4 border-b border-gray-300">
        <p class="font-semibold text-lg text-burem-500">Total bayar</p>
      </div>
      <div class="pb-4 mb-4 border-b border-gray-300">
        <p class="text-burem-200 mb-2">Kamar double bed fasilitas  lengkap dengan view terbaik</p>
        <p class="text-abang-500 font-bold text-2xl">Rp 600.000.00</p>
      </div>
      <div>
        <p class="text-burem-200 text-sm mb-2">Pilih metode pembayaran</p>
          <USelect size="lg" v-model="payment" :options="payments" option-attribute="name" color="gray"/>
      </div>
      <div>
        <UButton color="primary" class="mt-4" size="xl" block icon="i-solar-box-bold-duotone">Booking</UButton>
      </div>
    </div>
    <!-- end floationg action -->
  </NuxtLayout>
</template>