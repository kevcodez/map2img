<template>
  <div class="bg-white">
    <site-navbar />

    <div>
      <div>
        <cta-section id="cta" />
      </div>

      <div class="section bg-gray-50">
        <advantage-list id="advantages" class="" />
      </div>

      <div class="section">
        <builder id="create" class="" />
      </div>
    </div>

    <site-footer />
  </div>
</template>

<script>
export default {}
</script>

<style lang="scss">
.section {
  > div {
    @apply max-w-7xl sm:px-6 lg:px-8 mx-auto px-4 py-4 sm:py-4 md:py-8;
  }
}
</style>
