<template>
  <div class="space-y-2">
    <div class="grid grid-cols-2 gap-6">
      <div>
        <label for="provider" class="form-label">Provider</label>
        <div class="mt-1 sm:mt-0">
          <select
            id="provider"
            v-model="provider"
            name="provider"
            autocomplete="provider"
            class="dropdown"
          >
            <option
              v-for="providerOption in availableProviders"
              :key="providerOption"
              :value="providerOption"
            >
              {{ providerOption }}
            </option>
          </select>
        </div>
      </div>

      <div>
        <label for="style" class="form-label">Style</label>
        <div class="mt-1 sm:mt-0">
          <select
            id="style"
            v-model="style"
            name="style"
            autocomplete="style"
            class="dropdown"
          >
            <option
              v-for="styleOption in availableStyles"
              :key="styleOption"
              :value="styleOption"
            >
              {{ styleOption }}
            </option>
          </select>
        </div>
      </div>
    </div>

    <div class="grid grid-cols-2 gap-6">
      <div>
        <label for="width" class="form-label">Width</label>
        <input
          id="width"
          v-model="width"
          name="width"
          class="w-full mt-1 input"
        />
      </div>

      <div>
        <label for="height" class="form-label">Height</label>
        <input
          id="height"
          v-model="height"
          name="height"
          class="w-full mt-1 input"
        />
      </div>
    </div>

    <div>
      <label for="zoom" class="form-label">Zoom</label>
      <vue-slider id="zoom" v-model="zoom" :min="0" :max="22" />
    </div>

    <div>
      <label for="rotation" class="form-label">Rotation</label>
      <vue-slider id="rotation" v-model="rotation" :min="0" />
    </div>

    <div>
      <label for="tilt" class="form-label">Tilt</label>
      <vue-slider id="tilt" v-model="tilt" :min="0" :max="60" />
    </div>

    <div>
      <label class="form-label">Marker</label>
      <div class="mt-1">
        <button
          type="button"
          aria-pressed="false"
          aria-labelledby="toggleLabel"
          class="relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          :class="markerEnabled ? ' bg-indigo-600' : ' bg-gray-200'"
          @click="markerEnabled = !markerEnabled"
        >
          <span class="sr-only">Use setting</span>
          <span
            aria-hidden="true"
            class="inline-block w-5 h-5 transition duration-200 ease-in-out transform bg-white rounded-full shadow ring-0"
            :class="markerEnabled ? 'translate-x-5' : 'translate-x-0'"
          ></span>
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/material.css'

export default {
  components: {
    VueSlider,
  },
  props: { location: { type: Object, required: true } },
  data() {
    return {
      provider: 'Mapbox',
      style: 'streets-v11',
      zoom: 18,
      tilt: 0,
      rotation: 0,
      height: 500,
      width: 500,
      markerEnabled: true,
    }
  },
  computed: {
    availableStyles() {
      const map = new Map([
        [
          'Mapbox',
          [
            'streets-v11',
            'light-v10',
            'dark-v10',
            'outdoors-v11',
            'satellite-v9',
          ],
        ],
        ['Google Maps', ['Default']],
      ])
      return map.get(this.provider)
    },
    availableProviders() {
      return ['Mapbox']
    },
  },
  watch: {
    provider() {
      this.notifyChange()
    },
    style() {
      this.notifyChange()
    },
    zoom() {
      this.notifyChange()
    },
    rotation() {
      this.notifyChange()
    },
    tilt() {
      this.notifyChange()
    },
    height() {
      this.notifyChange()
    },
    width() {
      this.notifyChange()
    },
  },
  methods: {
    notifyChange() {
      this.$emit('config-changed', {
        provider: this.provider,
        style: this.style,
        rotation: this.rotation,
        tilt: this.tilt,
        zoom: this.zoom,
        height: this.height,
        width: this.width,
      })
    },
  },
}
</script>

<style lang="scss">
.vue-slider-dot-handle {
  @apply bg-indigo-500;

  &::after {
    @apply bg-indigo-300;
  }
}

.vue-slider-rail {
  @apply bg-indigo-300;
}

.vue-slider-process {
  @apply bg-indigo-500;
}

.vue-slider-dot-tooltip-inner {
  @apply bg-indigo-500;
}
</style>
