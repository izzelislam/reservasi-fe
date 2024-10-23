<template>
  <div>
    <NuxtLink to="/explore/2">
      <div class="rounded-lg shadow-lg cursor-pointer hover:shadow-xl hover:scale-105 transition-all duration-300">
        <div
          class="h-[200px] w-full bg-cover bg-center bg-no-repeat rounded-lg "
          style="background-image: url('/assets/img/room.png')"
        >
        </div>
        <div class="p-6">
          <p class="text-primary text-xs font-semibold mb-2">Kapasitas : 4 orang dewasa </p>
          <h2 class="text-burem-500 font-semibold line-clamp-2 mb-3">Kamar double bed fasilitas lengkap</h2>

          <p class="text-burem-200 line-through">IDR 600.000.00</p>
          <p class="text-abang-500 font-bold text-xl">IDR 600.000.00</p>
        </div>
      </div>
    </NuxtLink>
  </div>
</template>