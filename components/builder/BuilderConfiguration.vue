<template>
  <ValidationObserver>
    <div class="space-y-4">
      <div class="grid grid-cols-2 gap-6">
        <div>
          <label for="provider" class="form-label">Provider</label>
          <div class="mt-1 sm:mt-0">
            <select id="provider" v-model="provider" name="provider" autocomplete="provider" class="dropdown">
              <option v-for="providerOption in availableProviders" :key="providerOption" :value="providerOption">
                {{ providerOption }}
              </option>
            </select>
          </div>
        </div>

        <div>
          <label for="style" class="form-label">Style</label>
          <div class="mt-1 sm:mt-0">
            <select id="style" v-model="style" name="style" autocomplete="style" class="dropdown">
              <option v-for="styleOption in availableStyles" :key="styleOption" :value="styleOption">
                {{ styleOption }}
              </option>
            </select>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-2 gap-6">
        <div>
          <label for="width" class="form-label">
            Width
            <font-awesome-icon
              :icon="['far', 'question-circle']"
              v-tooltip="{ content: 'Width in pixel - 1 to 1280' }"
            />
          </label>
          <ValidationProvider v-slot="{ errors }" rules="required|numeric|min_value:1|max_value:1280">
            <input id="width" v-model="width" name="Width" class="w-full mt-1 input" />
            <span class="form-error">{{ errors[0] }}</span>
          </ValidationProvider>
        </div>

        <div>
          <label for="height" class="form-label">
            Height
            <font-awesome-icon
              :icon="['far', 'question-circle']"
              v-tooltip="{ content: 'Height in pixel - 1 to 1280' }"
            />
          </label>
          <ValidationProvider v-slot="{ errors }" rules="required|numeric|min_value:1|max_value:1280">
            <input id="height" v-model="height" name="Height" class="w-full mt-1 input" />
            <span class="form-error">{{ errors[0] }}</span>
          </ValidationProvider>
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

      <div v-if="provider === 'Mapbox'">
        <label for="tilt" class="form-label">Tilt</label>
        <vue-slider id="tilt" v-model="tilt" :min="0" :max="60" />
      </div>

      <div class="grid grid-cols-2">
        <div>
          <label class="form-label">Marker</label>
          <div class="mt-1">
            <button
              type="button"
              aria-pressed="false"
              aria-labelledby="toggleLabel"
              class="relative inline-flex flex-shrink-0 h-6 transition-colors duration-200 ease-in-out border-2 border-transparent rounded-full cursor-pointer w-11 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              :class="markerEnabled ? ' bg-blue-600' : ' bg-gray-200'"
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
        <div v-if="markerEnabled">
          <label class="form-label">Color</label>
          <color-picker class="mt-1" v-model="markerColor" />
        </div>
      </div>
    </div>
  </ValidationObserver>
</template>

<script>
import VueSlider from 'vue-slider-component'
import 'vue-slider-component/theme/material.css'

export default {
  components: {
    VueSlider,
  },
  props: { location: { type: Object, required: false, default: null } },
  data() {
    return {
      provider: 'Mapbox',
      style: 'Streets',
      zoom: 17,
      tilt: 0,
      rotation: 0,
      height: 500,
      width: 500,
      markerEnabled: true,
      markerColor: '#000000',
    }
  },
  computed: {
    availableStyles() {
      const map = new Map([
        ['Mapbox', ['Streets', 'Light', 'Dark', 'Outdoors', 'Satellite']],
        ['Google Maps', ['Classic', 'Light', 'Atlas', 'Grey', 'Night', 'Real Estate', 'Travel']],
      ])
      return map.get(this.provider)
    },
    availableProviders() {
      return ['Mapbox', 'Google Maps']
    },
  },
  watch: {
    provider(newVal) {
      if (newVal === 'Mapbox') {
        this.style = 'Streets'
      } else if (newVal === 'Google Maps') {
        this.style = 'Classic'
      }

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
    markerColor() {
      this.notifyChange()
    },
    markerEnabled() {
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
        markerEnabled: this.markerEnabled,
        markerColor: this.markerColor,
      })
    },
  },
}
</script>

<style lang="scss">
.vue-slider-dot-handle {
  @apply bg-blue-500;

  &::after {
    @apply bg-blue-300;
  }
}

.vue-slider-rail {
  @apply bg-blue-300;
}

.vue-slider-process {
  @apply bg-blue-500;
}

.vue-slider-dot-tooltip-inner {
  @apply bg-blue-500;
}

.tooltip {
  display: block !important;
  z-index: 10000;

  .tooltip-inner {
    background: black;
    color: white;
    border-radius: 16px;
    padding: 5px 10px 4px;
  }

  .tooltip-arrow {
    width: 0;
    height: 0;
    border-style: solid;
    position: absolute;
    margin: 5px;
    border-color: black;
  }

  &[x-placement^='top'] {
    margin-bottom: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 0 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      bottom: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^='bottom'] {
    margin-top: 5px;

    .tooltip-arrow {
      border-width: 0 5px 5px 5px;
      border-left-color: transparent !important;
      border-right-color: transparent !important;
      border-top-color: transparent !important;
      top: -5px;
      left: calc(50% - 5px);
      margin-top: 0;
      margin-bottom: 0;
    }
  }

  &[x-placement^='right'] {
    margin-left: 5px;

    .tooltip-arrow {
      border-width: 5px 5px 5px 0;
      border-left-color: transparent !important;
      border-top-color: transparent !important;
      border-bottom-color: transparent !important;
      left: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &[x-placement^='left'] {
    margin-right: 5px;

    .tooltip-arrow {
      border-width: 5px 0 5px 5px;
      border-top-color: transparent !important;
      border-right-color: transparent !important;
      border-bottom-color: transparent !important;
      right: -5px;
      top: calc(50% - 5px);
      margin-left: 0;
      margin-right: 0;
    }
  }

  &[aria-hidden='true'] {
    visibility: hidden;
    opacity: 0;
    transition: opacity 0.15s, visibility 0.15s;
  }

  &[aria-hidden='false'] {
    visibility: visible;
    opacity: 1;
    transition: opacity 0.15s;
  }
}
</style>
