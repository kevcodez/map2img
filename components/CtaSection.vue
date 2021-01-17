<template>
  <div
    class="grid px-8 py-8 mx-auto lg:grid-cols-2 lg:max-w-7xl lg:px-0 lg:py-0"
  >
    <div class="flex flex-col items-center justify-center">
      <font-awesome-icon class="text-4xl" :icon="['fas', 'map-signs']" />
      <h1 class="mt-4 text-5xl font-bold text-gray-900">map2img</h1>
      <h2 class="px-4 mt-4 text-2xl text-center text-gray-500">
        Quickly turn an address, place or location into a static image. No
        coding required, free of charge.
      </h2>
      <a href="#create" class="py-3 mt-6 text-xl button primary"
        >Create your image</a
      >
    </div>
    <div class="hidden lg:block">
      <img
        src="~assets/map.png"
        style="
          -webkit-clip-path: polygon(15% 0, 100% 0%, 100% 100%, 0% 100%);
          clip-path: polygon(15% 0, 100% 0%, 100% 100%, 0% 100%);
        "
      />
    </div>
  </div>
</template>
