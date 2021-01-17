<template>
  <div class="text-gray-300">
    <font-awesome-icon :icon="icon" class="mr-2 text-2xl" />
    <span class="text-2xl font-semibold tracking-wide md:text-3xl">{{
      title
    }}</span>

    <p class="pt-3 text-xl text-gray-200"><slot /></p>
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
