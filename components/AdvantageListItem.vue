<template>
  <div>
    <font-awesome-icon :icon="icon" class="mr-2" />
    <span class="mb-2 text-xl font-semibold">{{ title }}</span>

    <p class="text-lg text-gray-800"><slot /></p>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    icon: {
      type: Array,
      required: true,
    },
  },
}
</script>
