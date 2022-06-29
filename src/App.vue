<template>
  <AppNavigation />
  <BookList />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppNavigation from "@/components/AppNavigation.vue";
import BookList from "./components/BookList.vue";

export default defineComponent({
  name: "App",
  components: {
    AppNavigation,
    BookList,
  },
});
</script>
