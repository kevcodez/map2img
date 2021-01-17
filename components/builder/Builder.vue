<template>
  <div>
    <h3 class="mb-4 text-2xl font-bold tracking-wide text-center text-gray-600 uppercase">Create your image</h3>
    <builder-address-selector @address-changed="addressChanged" />

    <div class="grid gap-12 mt-2 md:grid-cols-2">
      <div>
        <builder-configuration @config-changed="mapConfigChanged" />
      </div>
      <div class="flex items-center justify-center">
        <builder-image-preview :image="image" />
      </div>
    </div>

    <div class="flex justify-center mt-5">
      <button v-if="dirty" class="button primary" :disabled="!address || !mapConfig" @click="generateImageUrl">
        Generate new image
      </button>
      <builder-image-export v-if="image && !dirty" :image="image" />
    </div>
  </div>
</template>

<script>
import { generateProviderImageUrl } from './generator/StaticImageGeneratorService'

export default {
  data() {
    return {
      address: null,
      dirty: true,
      mapConfig: {
        provider: 'Mapbox',
        style: 'streets-v11',
        zoom: 17,
        tilt: 0,
        rotation: 0,
        height: 500,
        width: 500,
        markerEnabled: true,
      },
      image: null,
    }
  },
  methods: {
    addressChanged(address) {
      this.address = address
      this.dirty = true
    },
    mapConfigChanged(mapConfig) {
      this.mapConfig = mapConfig
      this.dirty = true
    },
    generateImageUrl() {
      if (this.address && this.mapConfig) {
        this.image = generateProviderImageUrl(this.address, this.mapConfig, this.$config)
      } else {
        this.image = null
      }
      this.dirty = false
    },
  },
}
</script>
