<template>
  <AppNavigation />
  <MouseCursor />
  <InfoBox />
  <BookList />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppNavigation from "@/components/AppNavigation.vue";
import MouseCursor from "@/components/MouseCursor.vue";
import InfoBox from "./components/InfoBox.vue";
import BookList from "./components/BookList.vue";

export default defineComponent({
  name: "App",
  components: {
    AppNavigation,
    MouseCursor,
    InfoBox,
    BookList,
  },
});
</script>
