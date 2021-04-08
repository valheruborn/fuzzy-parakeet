<template>
  <div @click="toggle" v-on-clickaway="away" :class="this.sharedState.active ? 'bg-gray-200' : ''">
    <div class="flex justify-between">
      <slot name="toggler"> </slot>
      <svg
        class="w-9 p-2"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
        :class="this.sharedState.active ? 'transform rotate-180' : ''"
      >
        <path
          fill-rule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clip-rule="evenodd"
        />
      </svg>
    </div>
    <slot />
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";

export default {
  name: "ddDrawer",
  mixins: [clickaway],
  data() {
    return {
      sharedState: {
        active: false,
      },
    };
  },
  provide() {
    return {
      sharedState: this.sharedState,
    };
  },
  methods: {
    toggle() {
      this.sharedState.active = !this.sharedState.active;
    },
    away() {
      this.sharedState.active = false;
    },
  },
};
</script>

<style>
</style>