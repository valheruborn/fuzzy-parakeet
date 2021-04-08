<template>
  <div class="flex flex-col w-full">
    <div class="border p-2 m-2 shadow-md">
      <p class="font-bold text-2xl">{{ article.title }}</p>
      <p class="italic">{{ article.description }}</p>
      <br />
      <p class="italic text-sm text-right">
        <strong>Author:</strong> {{ article.author }}
      </p>
      <p class="italic text-sm text-right">
        <strong>Last Updated On:</strong> {{ formatDate(article.updatedAt) }}
      </p>
    </div>
    <div class="flex flex-col-reverse sm:flex-row">
      <nuxt-content
        class="p-2 m-2 border shadow-md prose prose-sm sm:w-5/6 sm:max-w-none sm:p-4"
        :document="article"
      />
      <div class="flex flex-col mx-2">
        <div class="flex justify-center bg-gray-300">
          <p class="font-bold h-full">Go To&nbsp;</p>
          <svg
            class="w-5"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M11.933 12.8a1 1 0 000-1.6L6.6 7.2A1 1 0 005 8v8a1 1 0 001.6.8l5.333-4zM19.933 12.8a1 1 0 000-1.6l-5.333-4A1 1 0 0013 8v8a1 1 0 001.6.8l5.333-4z"
            />
          </svg>
        </div>
        <ul class="flex flex-col border text-center">
          <li
            class="hover:bg-gray-500 hover:text-white cursor-pointer text-sm border-b p-2"
            v-for="link of article.toc"
            :key="link.id"
          >
            <span @click="scrollToElem(link.id)">
              {{ link.text }}
            </span>
          </li>
        </ul>
      </div>
    </div>
    <div class="border m-2 p-2 shadow-md sm:w-5/6">
      <h3 class="font-bold mb-2">Post a Comment? <br /></h3>
      <comments />
    </div>
  </div>
</template>

<script>
import Vue from "vue";
import copyCode from "@/components/slug/copyCode.vue";
import comments from "@/components/slug/comments.vue";

export default {
  components: {
    copyCode,
    comments,
  },
  async asyncData({ $content, params }) {
    let article = await $content("articles", { deep: true })
      .where({ slug: params.slug })
      .fetch();
    article = article[0];
    // console.log(article)
    return { article };
  },
  mounted() {
    this.createC2Cbutton();
  },
  methods: {
    scrollToElem(elem) {
      let pos =
        document.getElementById(elem).getBoundingClientRect().top +
        window.scrollY -
        document.getElementById("navbar").getBoundingClientRect().height;
      window.scroll(0, pos);
    },
    formatDate(date) {
      const options = { year: "numeric", month: "long", day: "numeric" };
      return new Date(date).toLocaleDateString("en", options);
    },
    createC2Cbutton() {
      document
        .querySelectorAll(".nuxt-content-highlight")
        .forEach(function (cbdiv) {
          var div = document.createElement("div");
          div.id = "test";
          cbdiv.appendChild(div);
          let comp = Vue.extend(copyCode);
          new comp().$mount("#test");
        });
    },
  },
};
</script>

<style>
.nuxt-content-highlight {
  @apply relative;
}

.nuxt-content-highlight .filename {
  @apply absolute right-0 text-gray-300 z-10 mr-1 mt-1 text-xs sm:text-sm;
}

#breeze {
  @apply animate-breeze;
}
</style>