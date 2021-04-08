<template>
  <div class="box-border w-full h-full">
    <!-- Navbar -->
    <Navbar />
    <div class="flex w-full">
      <Sidebar />

      <Nuxt />
    </div>
    <div
      class="w-full sticky bottom-0 bg-gray-300 text-right p-2 shadow-md border"
    >
      By&nbsp;Jude D'Mello
    </div>
  </div>
</template>

<script>
import Navbar from "@/components/Navbar.vue";
import Sidebar from "~/components/Sidebar.vue";

export default {
  components: {
    Navbar,
    Sidebar,
  },
};
</script>

<style>
html {
  @apply bg-gray-50 w-full h-full;
}
body {
  @apply h-full w-full subpixel-antialiased;
}
</style>
