<template>
  <div class="relative flex" ref="colorpicker">
    <div class="flex items-center" @click="togglePicker()">
      <div class="rounded-full w-7 h-7" :style="'background-color: ' + colorValue"></div>
      <span class="ml-2">{{ colorValue }}</span>
    </div>
    <chrome-picker
      v-if="displayPicker"
      :value="colors"
      @input="updateFromPicker"
      :disable-fields="true"
      :disable-alpha="true"
    />
  </div>
</template>

<script>
import { Chrome } from 'vue-color'

export default {
  components: {
    'chrome-picker': Chrome,
  },
  props: ['color'],
  data() {
    return {
      colors: {
        hex: '#000000',
      },
      colorValue: '',
      displayPicker: false,
    }
  },
  mounted() {
    this.setColor(this.color || '#000000')
  },
  methods: {
    setColor(color) {
      this.updateColors(color)
      this.colorValue = color
    },
    updateColors(color) {
      if (color.slice(0, 1) == '#') {
        this.colors = {
          hex: color,
        }
      } else if (color.slice(0, 4) == 'rgba') {
        var rgba = color.replace(/^rgba?\(|\s+|\)$/g, '').split(','),
          hex =
            '#' +
            ((1 << 24) + (parseInt(rgba[0]) << 16) + (parseInt(rgba[1]) << 8) + parseInt(rgba[2])).toString(16).slice(1)
        this.colors = {
          hex: hex,
          a: rgba[3],
        }
      }
    },
    showPicker() {
      document.addEventListener('click', this.documentClick)
      this.displayPicker = true
    },
    hidePicker() {
      document.removeEventListener('click', this.documentClick)
      this.displayPicker = false
    },
    togglePicker() {
      this.displayPicker ? this.hidePicker() : this.showPicker()
    },
    updateFromPicker(color) {
      this.colors = color
      if (color.rgba.a == 1) {
        this.colorValue = color.hex
      } else {
        this.colorValue = 'rgba(' + color.rgba.r + ', ' + color.rgba.g + ', ' + color.rgba.b + ', ' + color.rgba.a + ')'
      }
    },
    documentClick(e) {
      var el = this.$refs.colorpicker,
        target = e.target
      if (el !== target && !el.contains(target)) {
        this.hidePicker()
      }
    },
  },
  watch: {
    colorValue(val) {
      if (val) {
        this.updateColors(val)
        this.$emit('input', val)
      }
    },
  },
}
</script>

<style>
.vc-chrome {
  position: absolute;
  top: 27px;
  right: 20px;
  z-index: 9;
}
</style>
