<template>
  <div class="grid gap-10 md:gap-16 md:grid-cols-2">
    <advantage-list-item title="Fast" :icon="['fas', 'rocket']">
      Embedding an image rather than a map is faster for your users. No need to
      include some JavaScript.
    </advantage-list-item>

    <advantage-list-item title="Easy as cake" :icon="['fas', 'birthday-cake']">
      Registering for API keys with Google Maps/Mapbox and generating images can
      be a bit complicated. Use the simple configurator below to generator your
      image in no time.
    </advantage-list-item>

    <advantage-list-item title="Customization" :icon="['fas', 'palette']">
      Quickly customize map styling, zoom level, tilt and marker styling to
      adjust the look and feel to your needs.
    </advantage-list-item>

    <advantage-list-item title="Free" :icon="['fas', 'credit-card']">
      This service is free, you don't have to pay a cent to generate those
      images. If you do find it useful, you can
      <a
        href="https://www.buymeacoffee.com/kevcodez"
        class="text-indigo-300 hover:text-white"
        target="blank"
        >buy me a coffee</a
      >.
    </advantage-list-item>
  </div>
</template>
