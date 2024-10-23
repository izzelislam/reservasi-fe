<script lang="ts" setup>
  const isOpen = ref(false);
</script>

<template>
  <div class="flex flex-col gap-4 md:flex-row md:justify-between pb-6 mb-4 border-b border-gray-300">
    <div class="flex flex-col md:flex-row gap-4">
      <NuxtImg src="/assets/img/room.png" class="md:w-28 h-28 object-cover object-center rounded-lg"/>
      <div class="flex flex-col ">
        <h2 class="font-semibold text-burem-500 mb-2">Kamar double bad fasiliatas lengkap</h2>
        <p class="text-sm text-burem-200"> 7 Desember 2024 - 8 Desember 2024</p>
        <p class="text-sm text-burem-200 mb-3"> Transfer</p>
        <div class="flex gap-4 items-center">
          <h2 class="text-abang-500 font-bold text-2xl">Rp 650.000.0</h2>
          <UButton @click="isOpen = true" icon="i-solar-notification-lines-remove-bold-duotone" color="abang">Batalkan Pesanan</UButton>
        </div>
      </div>
    </div>
    <div class="flex flex-col md:items-end gap-2">
      <span class=" px-3 py-1 bg-kuneng rounded-lg text-sm">menunggu pembayaran</span>
      <p class="text-burem-200 text-sm">kode booking :</p>
      <span class="px-3 py-2 bg-ping rounded-lg font-semibold text-xl">
        ASBGDT12K8POS90
      </span>
    </div>
  </div>
  <UModal v-model="isOpen" :transition="false">
    <div class="p-4">
      <p class="font-semibold text-burem-500 text-center mb-8">Apakah Anda yakin Ingin membatalkan Pesanan Ini ?</p>
      <UButton block size="lg">Iya, Batalkan</UButton>
    </div>
  </UModal>
</template>