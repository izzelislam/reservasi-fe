<template>
  <ul>
    <li>
      <NuxtLink to="/customer/dashboard" class="flex items-center gap-2 mb-5">
        <UIcon name="i-solar-home-smile-bold-duotone" class="w-6 h-6 text-primary" />
        <p class="text-burem-500 ">Dashboard</p>
      </NuxtLink>
    </li>
    <li>
      <NuxtLink to="/customer/booking" class="flex items-center gap-2 mb-5" overide="true">
        <UIcon name="i-solar-compass-bold-duotone" class="w-6 h-6 text-primary" />
        <p class="text-burem-500 ">Booking</p>
      </NuxtLink>
    </li>
    <li>
      <NuxtLink to="/customer/profile" class="flex items-center gap-2 mb-5">
        <UIcon name="i-solar-user-bold-duotone" class="w-6 h-6 text-primary" />
        <p class="text-burem-500 ">Profile</p>
      </NuxtLink>
    </li>
  </ul>
</template>