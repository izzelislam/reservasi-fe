<template>
  <NuxtLayout key="default">
    
    <section class="mb-4">
      <Container>
        <div class="py-6 flex flex-col md:flex-row gap-8">
          <div class="w-12/12 md:w-11/12 h-[350px]">
            <NuxtImg src="/assets/img/room.png" class="w-full h-full object-cover object-center rounded-lg" />
          </div>
          <div class="md:h-[350px] flex flex-row md:flex-col gap-4 overflow-auto">
            <NuxtImg src="/assets/img/room.png" class="w-36 h-36 object-cover object-center rounded-lg cursor-pointer" />
            <NuxtImg src="/assets/img/room.png" class="w-36 h-36 object-cover object-center rounded-lg cursor-pointer" />
            <NuxtImg src="/assets/img/room.png" class="w-36 h-36 object-cover object-center rounded-lg cursor-pointer" />
            <NuxtImg src="/assets/img/room.png" class="w-36 h-36 object-cover object-center rounded-lg cursor-pointer" />
            <NuxtImg src="/assets/img/room.png" class="w-36 h-36 object-cover object-center rounded-lg cursor-pointer" />
            <NuxtImg src="/assets/img/room.png" class="w-36 h-36 object-cover object-center rounded-lg cursor-pointer" />
          </div>
        </div>
      </Container>
    </section>

    <section>
      <Container>
        <div class="flex flex-col md:flex-row gap-4 md:justify-between border-b border-gray-300 pb-6">
          <div>
            <h2 class="text-burem-500 font-semibold text-2xl mb-3">Kamar double bed fasilitas  lengkap</h2>
            <div class="bg-ping p-4 rounded-lg flex gap-3">
              <div>
                <UIcon name="i-solar-box-bold-duotone" class="w-8 h-8 text-primary" />
              </div>
              <div>
                <p class="text-burem-200 mb-1">Tanggal yang anda pilih tersedia</p>
                <p class="text-burem-500 text-sm font-semibold">17 Agustus 2024 -  21 Agustus 2024 </p>
              </div>
            </div>
          </div>
          <div class="hidden md:flex gap-2 flex-col items-end">
            <p class="text-sm font-semibold text-burem-500">Harga / Kamar /Malam</p>
            <div class="flex items-center gap-3">
              <p class="text-burem-200 line-through">RP 600.000.00</p> <p class="text-abang-500 font-semibold text-xl">RP 600.000.00</p>
            </div>
            <UButton to="/checkout" class=" text-center" size="lg">Booking Sekarang</UButton>
          </div>
        </div>

        <div class="py-6 border-b border-gray-300">
          <h2 class="text-burem-500 font-semibold text-xl mb-4">Fasilitas</h2>
          <div class="flex flex-wrap gap-4">
            <div class="flex items-center gap-3">
              <UIcon name="i-solar-bed-bold-duotone" class="w-8 h-8 text-burem-200" />
              <p class="text-sm font-semibold text-burem-500">4 kamar</p>
            </div>
            <div class="flex items-center gap-3">
              <UIcon name="i-solar-bath-bold-duotone" class="w-8 h-8 text-burem-200" />
              <p class="text-sm font-semibold text-burem-500">Kamar mandi</p>
            </div>
            <div class="flex items-center gap-3">
              <UIcon name="i-solar-tv-bold-duotone" class="w-8 h-8 text-burem-200" />
              <p class="text-sm font-semibold text-burem-500">Televisi</p>
            </div>
            <div class="flex items-center gap-3">
              <UIcon name="i-solar-home-wifi-bold-duotone" class="w-8 h-8 text-burem-200" />
              <p class="text-sm font-semibold text-burem-500">Free Wifi</p>
            </div>
          </div>
        </div>

        <div class="py-6 border-b border-gray-300">
          <h2 class="text-burem-500 font-semibold text-xl mb-4">Informasi</h2>
          <div class="text-burem-200 leading-6">
            <p>
              Bracha Villas Bali menawarkan akomodasi di Seminyak dan berjarak sejauh 5 km  dari Pantai Petitenget. Properti ini memiliki kolam renang, taman dan  WiFi gratis. Tiap kamar dilengkapi dengan AC dan ruang tamu. Shower dan peralatan mandi gratis tersedia di kamar mandi.
              Tamu dapat menikmati makanan di Rustica Cucina Italiana.  <br>

              Staf di properti dapat membantu  anda terkait resepsionis 24 jam dan layanan concierge. Fasilitas lain  yang tersedia di Bracha Villas Bali adalah ruang makan dan dapur. Bracha Villas Bali terletak  sejauh 850 meter dari Seminyak Village dan 4,6 km dari Finns Recreations Club. Bandara terdekat adalah Bandara Internasional Ngurah Rai, 28 km  dari properti.
            </p>
          </div>
        </div>

        <div class="py-6 border-b border-gray-300">
          <h2 class="text-burem-500 font-semibold text-xl mb-4">Kebijakan</h2>
          <div class="text-burem-200 leading-6">
            <p>
              Bracha Villas Bali menawarkan akomodasi di Seminyak dan berjarak sejauh 5 km  dari Pantai Petitenget. Properti ini memiliki kolam renang, taman dan  WiFi gratis. Tiap kamar dilengkapi dengan AC dan ruang tamu. Shower dan peralatan mandi gratis tersedia di kamar mandi.
              Tamu dapat menikmati makanan di Rustica Cucina Italiana.  <br>

              Staf di properti dapat membantu  anda terkait resepsionis 24 jam dan layanan concierge. Fasilitas lain  yang tersedia di Bracha Villas Bali adalah ruang makan dan dapur. Bracha Villas Bali terletak  sejauh 850 meter dari Seminyak Village dan 4,6 km dari Finns Recreations Club. Bandara terdekat adalah Bandara Internasional Ngurah Rai, 28 km  dari properti.
            </p>
          </div>
        </div>
      </Container>
    </section>
    
    <!-- floating section on mobile -->
    <div class="fixed bottom-0 left-0 right-0 z-10 block md:hidden p-4 drop-shadow-[0_0px_22px_rgba(0,0,0,0.50)] bg-white rounded-t-lg">
      <div class="flex justify-between mb-4">
        <div class="w-1/2">
          <h2 class="text-burem-500 text-sm font-semibold">Kamar double bed fasilitas  lengkap</h2>
        </div>
        <div class="flex gap-2 flex-col items-end">
          <p class="text-xs font-semibold text-burem-500">Harga / Kamar /Malam</p>
          <p class="text-abang-500 font-semibold text-lg">RP 600.000.00</p>
        </div>
      </div>
      <UButton to="/checkout" class="text-center" size="lg" block>Booking Sekarang</UButton>
    </div>
    <!-- end floating section on mobile -->
  </NuxtLayout>
</template>