<template>
  <div class="grid md:grid-cols-2">
    <div class="flex flex-col items-center justify-center">
      <font-awesome-icon class="text-4xl" :icon="['fas', 'map-signs']" />
      <h1 class="mt-4 text-4xl font-bold">map2img</h1>
      <h2 class="mt-4 text-2xl text-center">
        Quickly turn an address, place or location into a static image. No
        coding required, free of charge.
      </h2>
      <a href="#create" class="mt-4 text-lg button primary">Create image</a>
    </div>
    <div class="hidden md:block">
      <img src="~assets/map.png" />
    </div>
  </div>
</template>
