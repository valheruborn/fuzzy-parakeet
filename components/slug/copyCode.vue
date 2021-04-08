<template>
  <button class="absolute opacity-0 bottom-0 right-0 p-1 mr-1 mb-1 rounded-sm focus:outline-none focus:ring-2 focus:ring-gray-300 hover:opacity-100" @click="copyFunc" name="copyButton">
    <span class="tooltip invisible -mt-6 text-xs p-1 absolute -right-2 rounded-md font-semibold">Copied!</span>
    <svg
      class="w-5 h-5 text-gray-300"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
      />
    </svg>
  </button>
</template>

<script>
export default {
  name: "copyCode",
  data() {
    return {

    }
  },
  methods: {
    copyFunc(e) {
      var path = e.target;
      var parent = path.closest(".nuxt-content-highlight");
      var reqText = parent.children[1].innerText;
      navigator.clipboard.writeText(reqText);
    },
  },
};
</script>

<style>

button:active .tooltip {
  @apply visible z-10 bg-gray-300;
}
</style>