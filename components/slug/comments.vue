<template>
  <div>
    <form method="post" class="flex flex-col" @submit="send">
      <label>Name:&nbsp;</label
      ><input
        type="text"
        class="p-2 focus:outline-none border rounded-full w-full"
        placeholder="What's Your Name?"
        name="name"
        v-model="commentForm.name"
      />
      <label>Comment:&nbsp;</label>
      <textarea
        class="p-2 focus:outline-none border rounded-full w-full"
        placeholder="Have Your Say!"
        name="body"
        v-model="commentForm.message"
      ></textarea>
      <button
        class="bg-gray-300 p-1 rounded-full shadow-md border"
        type="submit"
      >
        Post
      </button>
    </form>
    <br />
    <button
      @click="getComments"
      class="bg-gray-300 p-1 rounded-full shadow-md border"
    >
      sad
    </button>
  </div>
</template>

<script>
// action="https://sman-tfsn.herokuapp.com/v3/entry/github/valheruborn/myBlog/gh-pages/comments"
const axios = require("axios");
var qs = require("qs");

export default {
  name: "comments",

  data() {
    return {
      commentForm: {
        name: "",
        message: "",
      },
      comments: [],
    };
  },

  methods: {
    send() {
      // let formData = new URLSearchParams();
      let formData = {};

      formData["fields[name]"] = this.commentForm.name;
      formData["fields[message]"] = this.commentForm.message;
      formData["options[slug]"] =
        this.$nuxt.$route.name === "slug"
          ? this.$nuxt.$route.params.slug
          : this.$nuxt.$route.name;

      formData = qs.stringify(formData);
      console.log(formData);

      axios
        .post(
          "https://sman-tfsn.herokuapp.com/v3/entry/github/valheruborn/myBlog/master/comments",
          formData
        )
        .then((res) => {
          console.log(res.body);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    async getComments() {
      await this.$content('_data', {deep: true})
        .fetch()
        .then(res => {
          this.comments = res
        });
      console.log(this.comments)
    },
  },
};
</script>

<style>
</style>