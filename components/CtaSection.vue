<template>
  <div
    class="grid lg:grid-cols-2 lg:max-w-7xl mx-auto py-8 px-8 lg:px-0 lg:py-0"
  >
    <div class="flex flex-col items-center justify-center">
      <font-awesome-icon class="text-4xl" :icon="['fas', 'map-signs']" />
      <h1 class="mt-4 text-5xl text-gray-900 font-bold">map2img</h1>
      <h2 class="mt-4 text-2xl text-center text-gray-500 px-4">
        Quickly turn an address, place or location into a static image. No
        coding required, free of charge.
      </h2>
      <a href="#create" class="mt-4 text-xl button primary py-3"
        >Create your image</a
      >
    </div>
    <div class="hidden lg:block">
      <img
        src="~assets/map.png"
        style="
          -webkit-clip-path: polygon(25% 0, 100% 0%, 100% 100%, 0% 100%);
          clip-path: polygon(25% 0, 100% 0%, 100% 100%, 0% 100%);
        "
      />
    </div>
  </div>
</template>
