<template>
  <div class="flex p-2 justify-center sm:ml-auto">
    <svg
      class="w-8 bg-white stroke-current text-gray-400 m-0 border-none"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path class="animate-pulse" d="M9 9a2 2 0 114 0 2 2 0 01-4 0z" />
      <path
        class="animate-pulse"
        fill-rule="evenodd"
        d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a4 4 0 00-3.446 6.032l-2.261 2.26a1 1 0 101.414 1.415l2.261-2.261A4 4 0 1011 5z"
        clip-rule="evenodd"
      />
    </svg>
    <input
      class="flex-none w-48 m-0 p-2 focus:outline-none"
      v-model="searchQuery"
      type="search"
      autocomplete="off"
      placeholder="Search Articles"
    />
    <div class="fixed mt-8 w-56" v-if="articles.length" v-on-clickaway="away">
      <span
        class="w-3 h-3 block bg-white origin-bottom-left transform rotate-45 border-t border-l ml-auto mr-4 relative z-auto"
        >&nbsp;</span
      >
      <div class="bg-white border shadow">
        <ul id="searchList" class="mt-2">
          <li
            class="p-2 w-full border-b font-semibold text-center text-sm truncate overflow-ellipsis border-gray-300 hover:bg-gray-500 hover:text-white cursor-pointer"
            v-for="article of articles"
            :key="article.slug"
          >
            <NuxtLink :to="'/' + article.slug + '/'" @click.native="away">
              {{ article.title }}
            </NuxtLink>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import { mixin as clickaway } from "vue-clickaway";

export default {
  name: "searchInput",
  mixins: [clickaway],
  data() {
    return {
      searchQuery: "",
      articles: [],
    };
  },
  watch: {
    async searchQuery(searchQuery) {
      if (!searchQuery) {
        this.articles = [];
      } else {
        this.articles = await this.$content("articles", { deep: true })
          .limit(5)
          .search(searchQuery)
          .fetch();
      }
    },
  },
  methods: {
    away() {
      this.articles = [];
      this.searchQuery = "";
    },
  },
};
</script>

<style>
</style>