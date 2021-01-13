<template>
  <div>
    <label class="form-label">Address</label>
    <div v-click-outside="clickedOutside" class="relative mt-1">
      <input
        v-if="!chosenOption"
        ref="input"
        v-model="searchTerm"
        placeholder="Start by entering an address"
        tabindex="0"
        class="w-full input"
        @input="handleInput"
      />
      <span v-else>
        {{ chosenOption }}
      </span>
      <span
        v-if="searchTerm"
        class="absolute inset-y-0 right-0 flex items-center pr-3 cursor-pointer"
        @click.prevent="reset()"
      >
        x
      </span>
      <div
        v-show="searchTerm && showOptions"
        tabindex="0"
        class="absolute z-50 w-full mt-1 overflow-hidden overflow-y-scroll bg-white border border-gray-300 rounded-md shadow-md max-h-48"
        @click.self="handleSelf()"
        @focusout="showOptions = false"
      >
        <ul class="py-1">
          <li
            v-for="(item, index) in options"
            :key="index"
            class="px-3 py-2 cursor-pointer hover:bg-gray-200"
            @click="handleClick(item)"
          >
            {{ item.name }}
          </li>
          <li v-if="!options.length" class="px-3 py-2 text-center">
            No Matching Results
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import vClickOutside from 'v-click-outside'
import debounce from 'lodash.debounce'

export default {
  directives: {
    clickOutside: vClickOutside.directive,
  },
  data() {
    return {
      showOptions: false,
      chosenOption: '',
      searchTerm: '',
      options: [],
    }
  },

  watch: {
    searchTerm(newVal) {
      this.autocompleteAddress(newVal)
    },
  },

  methods: {
    autocompleteAddress: debounce(async function (newVal) {
      if (!newVal || newVal.length < 3) return
      const encodedSearch = encodeURIComponent(newVal)
      const url = `https://api.mapbox.com/geocoding/v5/mapbox.places/${encodedSearch}.json?access_token=${this.$config.mapboxKey}`

      try {
        const response = await this.$http.$get(url)

        this.options = response.features.map((feature) => {
          return {
            name: feature.place_name,
            coordinates: {
              latitude: feature.center[0],
              longitude: feature.center[1],
            },
          }
        })
      } catch (err) {}
    }, 250),
    reset() {
      this.searchTerm = ''
      this.chosenOption = ''
      this.$emit('address-changed', null)
    },

    handleInput(evt) {
      this.showOptions = true
    },

    handleClick(item) {
      this.$emit('address-changed', item)
      this.chosenOption = item.name
      this.showOptions = false
      this.$refs.input.focus()
    },

    clickedOutside() {
      this.showOptions = false
    },
  },
}
</script>
