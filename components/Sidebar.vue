<template>
  <div class="hidden p-2 mx-1 mt-1.5 border shadow-md h-full sm:flex w-44">
    <div
      v-for="category in Object.keys(items)"
      :key="category"
      class="w-full sm:sticky sm:top-16 bg-white rounded-sm"
    >
      <div class="italic text-sm border-b mb-1 ">
        {{ category }}
      </div>
      <ddDrawer
        class="text-sm font-semibold tracking-tighter cursor-pointer mb-2"
        v-for="series in Object.keys(items[category])"
        :key="series"
      >
        <template #toggler>
          <div class="p-2">{{ series }}</div>
        </template>

        <ddDrawerContent>
          <div>
            <NuxtLink
              v-for="article in items[category][series]"
              :key="article.path"
              :to="'/' + article.slug + '/'"
              class="block p-2 tracking-tighter text-sm truncate overflow-ellipsis hover:bg-gray-500 hover:text-white"
            >
              {{ article.title }}
            </NuxtLink>
          </div>
        </ddDrawerContent>
      </ddDrawer>
    </div>
  </div>
</template>

<script>
import ddDrawer from "@/components/sidebar/ddDrawer.vue";
import ddDrawerContent from "@/components/sidebar/ddDrawerContent.vue";

export default {
  name: "Sidebar",

  components: {
    ddDrawer,
    ddDrawerContent,
  },

  data() {
    return {
      items: [],
    };
  },

  mounted: async function () {
    await this.$content("articles", { deep: true })
      .without(["body", "toc"])
      .sortBy("artno", "asc")
      .fetch()
      .then((res) => {
        this.items = res.reduce(this.groupYamlReducer, {});
      });
  },

  methods: {
    show() {
      if (this.hidden === "hidden") {
        this.hidden = "";
      } else {
        this.hidden = "hidden";
      }
    },

    groupYamlReducer: function (acc, cv) {
      let acckey = cv.category;
      let tempkey = cv.series;
      if (!acc[acckey]) {
        acc[acckey] = {};
      }
      if (!acc[acckey][tempkey]) {
        acc[acckey][tempkey] = [];
      }
      acc[acckey][tempkey].push(cv);
      return acc;
    },
  },
};
</script>

<style>
::-webkit-scrollbar {
  @apply w-3;
}

::-webkit-scrollbar-track {
  @apply shadow-inner rounded-md bg-gray-100;
}

/* Handle */
::-webkit-scrollbar-thumb {
  @apply rounded-md bg-gradient-to-r from-gray-400 via-white to-gray-400;
}
</style>