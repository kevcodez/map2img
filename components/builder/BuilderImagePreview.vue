<template>
  <div>
    <img v-if="image" :src="image" />
    <font-awesome-icon v-else class="text-gray-700 text-9xl" :icon="['fas', 'image']" />
  </div>
</template>

<script>
export default {
  props: {
    image: {
      type: String,
      required: false,
      default: null,
    },
  },
}
</script>
