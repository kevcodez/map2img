<template>
  <!-- This example requires Tailwind CSS v2.0+ -->
  <footer class="mt-8 bg-gray-800">
    <div class="px-4 py-6 mx-auto overflow-hidden max-w-7xl sm:px-6 lg:px-8">
      <nav aria-label="Footer">
        <div class="grid space-y-5 md:space-y-0 md:grid-cols-2">
          <div class="flex flex-wrap">
            <div class="px-5">
              <a href="#nav" class="text-base text-gray-300 hover:text-white">
                Back to Top
              </a>
            </div>

            <div class="px-5">
              <a
                href="https://www.buymeacoffee.com/kevcodez"
                target="blank"
                class="text-base text-gray-300 hover:text-white"
              >
                Buy me a coffee
              </a>
            </div>

            <div class="px-5">
              <a
                href="https://github.com/kevcodez/map2img"
                target="blank"
                class="text-base text-gray-300 hover:text-white"
              >
                Contribute
              </a>
            </div>
          </div>
          <div class="flex flex-wrap justify-end">
            <div class="px-5">
              <a
                href="https://twitter.com/kevcodez"
                target="blank"
                class="text-gray-400 hover:text-gray-300"
              >
                <span class="sr-only">Twitter</span>
                <font-awesome-icon class="text-xl" :icon="['fab', 'twitter']" />
              </a>
            </div>
            <div class="px-5">
              <a
                href="https://github.com/kevcodez"
                target="blank"
                class="text-gray-400 hover:text-gray-300"
              >
                <span class="sr-only">GitHub</span>
                <font-awesome-icon class="text-xl" :icon="['fab', 'github']" />
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  </footer>
</template>
