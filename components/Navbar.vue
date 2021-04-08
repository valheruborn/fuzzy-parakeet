<template>
  <nav
    class="flex flex-col items-center sticky top-0 z-50 bg-gray-300 sm:h-16 sm:flex-row" id="navbar"
  >
    <div class="flex w-full h-full sm:w-max">
      <div
        class="ml-2 font-bold text-lg whitespace-nowrap h-full cursor-pointer pt-1 text-center sm:ml-0 sm:px-2 sm:pt-0 sm:flex sm:items-center sm:flex-none sm:hover:bg-gray-500 sm:hover:text-white"
      >
        <NuxtLink to="/">The Full Stack Noob</NuxtLink>
      </div>

      <button
        class="focus:outline-none active:bg-gray-500 active:text-white ml-auto mr-2 sm:hidden" @click="toggleNavbarItems"
      >
        <svg
          class="w-6"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fill-rule="evenodd"
            d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
            clip-rule="evenodd"
          />
        </svg>
      </button>
    </div>

    <div class="sm:flex w-full sm:h-full" :class="showNavbarItems">
      <ul>
        <li>
          <NuxtLink to="/">Home</NuxtLink>
        </li>
        <li>
          <NuxtLink to="/about/">About Me!</NuxtLink>
        </li>
      </ul>
      <searchInput />
    </div>
  </nav>
</template>
"
<script>
import searchInput from "@/components/navbar/searchInput";

export default {
  name: "Navbar",
  components: {
    searchInput,
  },
  data() {
    return {
      showNavbarItems: "hidden",
    };
  },
  methods: {
    toggleNavbarItems() {
      if (this.showNavbarItems == "hidden") {
        this.showNavbarItems = "";
      } else {
        this.showNavbarItems = "hidden";
      }
    },
  },
};
</script>

<style>
nav ul {
  @apply w-full mt-1 sm:mt-0 sm:flex sm:h-full;
}
nav ul li {
  @apply sm:flex hover:bg-gray-500 hover:text-white cursor-pointer;
}
nav ul li a {
  @apply block font-semibold text-center sm:self-center sm:p-2;
}
</style>