<template>
  <button class="button primary" :disabled="!image" @click="download">
    Download image
  </button>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: true,
    },
  },
  methods: {
    toDataURL(url) {
      return fetch(url)
        .then((response) => {
          return response.blob()
        })
        .then((blob) => {
          return URL.createObjectURL(blob)
        })
    },
    async download() {
      if (!this.image) return
      const a = document.createElement('a')
      a.href = await this.toDataURL(this.image)
      a.download = 'map.png'
      document.body.appendChild(a)
      a.click()
      document.body.removeChild(a)
    },
  },
}
</script>
