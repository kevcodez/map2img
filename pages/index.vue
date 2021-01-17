<template>
  <div class="bg-white">
    <site-navbar />

    <div>
      <div>
        <cta-section id="cta" />
      </div>

      <div class="bg-gray-800 section">
        <advantage-list id="advantages" />
      </div>

      <div class="section">
        <builder id="create" />
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
    @apply max-w-7xl lg:px-8 mx-auto px-6 py-16;
  }
}
</style>
