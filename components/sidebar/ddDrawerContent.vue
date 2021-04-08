<template>
  <transition
    enter-class="scale-0"
    enter-active-class="transform-gpu duration-150 ease-in"
    enter-to-class="scale-100"
    leave-class="scale-100"
    leave-active-class="transform-gpu duration-150 ease-linear"
    leave-to-class="scale-0"
  >
    <div v-show="active">
      <slot />
    </div>
  </transition>
</template>

<script>
export default {
  name: "ddDrawerContent",
  inject: ["sharedState"],
  computed: {
    active() {
      return this.sharedState.active;
    },
  },
};
</script>

<style>
</style>