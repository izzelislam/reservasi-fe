<script setup lang="ts">
  const year = new Date().getFullYear();

  const isOpenModalRegister = ref(false);
  const isOpenModalLogin = ref(false);
  const isOpenMenu = ref(false);

  const nama = ref('');

  const handleSwitch = (type: string) => {
    if (type === 'login') {
      isOpenModalRegister.value = false;
      isOpenModalLogin.value = true;
    } else {
      isOpenModalRegister.value = true;
      isOpenModalLogin.value = false;
    }
  };

  const handleToogleMenu = () => {
    isOpenMenu.value = !isOpenMenu.value;
  };

</script>

<template>
  <div class="bg-gray-100 py-3 z-20">
    <Container>
      <div class="flex justify-end">
        <div class="flex gap-5">
          <div class="flex gap-2 items-center">
            <UIcon name="i-solar-phone-calling-bold-duotone" class="w-5 h-5 text-gray-800" />
            <p class=" text-sm font-semibold text-gray-600">08712376123</p>
          </div>
          <div class="flex gap-2 items-center">
            <UIcon name="i-solar-mailbox-bold-duotone" class="w-5 h-5 text-gray-800" />
            <p class=" text-sm font-semibold text-gray-600">tola@mail.com</p>
          </div>
        </div>
      </div>
    </Container>
  </div>

  <nav class="py-6 sticky top-0 bg-white z-20">
    <Container class="flex flex-row justify-between md:items-center">
      <div>
        <NuxtImg src="/assets/img/logo.png" class="w-[180px]" />
      </div>
      <div class="hidden md:flex">
        <ul class="flex gap-6">
          <NuxtLink to="/">
            <li class=" font-semibold text-gray-600 flex gap-1 items-center cursor-pointer">
                <UIcon name="i-solar-home-smile-bold-duotone" class="w-6 h-6 text-gray-400" />
                <p>Home</p>
            </li>
          </NuxtLink>
          <NuxtLink to="/explore">
            <li class=" font-semibold text-gray-600 flex gap-1 items-center cursor-pointer">
                <UIcon name="i-solar-compass-bold-duotone" class="w-6 h-6 text-gray-400" />
                <p>Explore</p>
            </li>
          </NuxtLink>
          <NuxtLink to="/cek-pesanan">
            <li class=" font-semibold text-gray-600 flex gap-1 items-center cursor-pointer">
                <UIcon name="i-solar-compass-bold-duotone" class="w-6 h-6 text-gray-400" />
                <p>Cek Pesanan Anda</p>
            </li>
          </NuxtLink>
        </ul>
      </div>
      <div class="hidden md:flex gap-3">
        <UButton @click="isOpenModalRegister = true" icon="i-solar-lock-keyhole-unlocked-bold-duotone" variant="outline" size="lg">Daftar</UButton>
        <UButton
          icon="i-solar-login-2-bold-duotone"
          size="lg"
          @click="isOpenModalLogin = true"
        >
          Masuk
        </UButton>
      </div>
      <div>
        <UIcon @click="handleToogleMenu()" name="hugeicons-menu-01" class="w-7 h-7 text-gray-800 md:hidden cursor-pointer" :class="{'hidden' : isOpenMenu}" />
        <UIcon @click="handleToogleMenu()" name="hugeicons-cancel-01" class="w-7 h-7 text-gray-800 md:hidden cursor-pointer" :class="{'hidden' : !isOpenMenu}"/>
      </div>
    </Container>
  </nav>

  <slot />

  <footer>
    <Container>
      <div class="py-12 gap-12 grid grid-cols-1 md:grid-cols-5">
        <div>
          <NuxtImg src="/assets/img/logo.png" class="w-32" />
          <div>
            <p class="text-burem-200 text-sm my-3">Jl. Raya Cempaka No. 11, Cempaka Putih, Kaliangkrik Magelang jawatenggah </p>
            <p class="text-burem-200 text-sm my-3">Copyright @ {{ year }}. All rights reserved.</p>
          </div>
        </div>
        <div>
          <h2>Sosial Media</h2>
          <ul>
            <li class="text-burem-200 text-sm my-3">Facebook</li>
            <li class="text-burem-200 text-sm my-3">Instagram</li>
            <li class="text-burem-200 text-sm my-3">Tiktok</li>
          </ul>
        </div>
        <div>
          <h2>Pintasan Menu</h2>
          <ul>
            <li class="text-burem-200 text-sm my-3">Home</li>
            <li class="text-burem-200 text-sm my-3">Explore</li>
            <li class="text-burem-200 text-sm my-3">Cek Pesanan Anda</li>
            <li class="text-burem-200 text-sm my-3">Daftar</li>
            <li class="text-burem-200 text-sm my-3">Masuk</li>
          </ul>
        </div>
        <div>
          <h2>Support</h2>
          <ul>
            <li class="text-burem-200 text-sm my-3">Kontak Kami</li>
            <li class="text-burem-200 text-sm my-3">Bantuan</li>
            <li class="text-burem-200 text-sm my-3">FAQ</li>
            <li class="text-burem-200 text-sm my-3">Cara Pemesanan</li>

          </ul>
        </div>
        <div>
          <h2 class="mb-3">Download</h2>
          <NuxtLink to="#">
            <NuxtImg src="/assets/img/gplay.png" class="w-[150px]" />
          </NuxtLink>
        </div>
      </div>
    </Container>
  </footer>

  <!-- mobile menu -->
  <!-- create toggleable mobole menu -->
  <div class="bg-white fixed top-20 left-0 w-full h-full z-10" :class="{'hidden' : !isOpenMenu}">
    <div class="flex flex-col gap-6 px-6 py-12">
      <NuxtLink to="/">
        <p class="text-burem-200 text-sm">Home</p>
      </NuxtLink>
      <NuxtLink to="/explore">
        <p class="text-burem-200 text-sm">Explore</p>
      </NuxtLink>
      <NuxtLink to="/cek-pesanan">
        <p class="text-burem-200 text-sm">Cek Pesanan Anda</p>
      </NuxtLink>
      <UButton @click="isOpenModalRegister = true" icon="i-solar-lock-keyhole-unlocked-bold-duotone" variant="outline" size="lg" block>Daftar</UButton>
      <UButton
        icon="i-solar-login-2-bold-duotone"
        size="lg"
        @click="isOpenModalLogin = true"
        block
      >
        Masuk
      </UButton>
    </div>
  </div>
  <!-- end mobile menu -->
  
  <!-- reister -->
  <UModal v-model="isOpenModalRegister" :transition="true">
    <div class="p-6">
      <p class="font-semibold text-center mb-6">
        Silahkan isi form berikut untuk mendaftar
      </p>
      <CustomInput
        label="Nama Penguna"
        name="nama"
        v-model="nama"
        placeholder="Masukkan kamu"
      />
      <CustomInput
        label="Nomor whatsapp aktif"
        name="phone"
        v-model="nama"
        placeholder="Masukkan Nomor Whatsapp"
      />
      <CustomInput
        label="Email aktif"
        name="email"
        type="email"
        v-model="nama"
        placeholder="Masukkan Email"
      />
      <CustomInput
        label="Password"
        name="password"
        type="password"
        v-model="nama"
        placeholder="*********"
      />
      <div class="my-8">
        <UButton icon="i-solar-lock-keyhole-unlocked-bold-duotone" size="lg" class="py-3" block>Daftar</UButton>
      </div>
      <div>
        <p class="text-sm font-semibold text-center text-burem-500">Sudah punya akun? <span class="cursor-pointer" @click="handleSwitch('login')">Login disini</span></p>
      </div>
    </div>
  </UModal>
  <!-- end reister -->

  <!-- login -->
  <UModal v-model="isOpenModalLogin" :transition="true">
    <div class="p-6">
      <div class="p-6">
        <p class="text-burem-200 font-semibold text-center mb-12">
          Untuk Melanjutkan silahkan Login ke akun anda, atau daftar jika belum punya akun !
        </p>
        <CustomInput
          label="Nomor whatsapp atau email terdaftar"
          name="email"
          v-model="nama"
          placeholder="Nomor whatsapp atau email terdaftar"
        />

        <CustomInput
          label="Password"
          name="password"
          type="password"
          v-model="nama"
          placeholder="*********"
        />
        <div class="my-8">
          <UButton to="/customer/dashboard" icon="i-solar-login-2-bold-duotone" size="lg" class="py-3" block>Masuk</UButton>
        </div>
        <div>
          <p class="text-sm font-semibold text-center text-burem-500">Daftar Akun Baru? <span class="cursor-pointer" @click="handleSwitch('register')">Daftar disini</span></p>
        </div>
      </div>
    </div>
  </UModal>
  <!-- end login -->

</template>