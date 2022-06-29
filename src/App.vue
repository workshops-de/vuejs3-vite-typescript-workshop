<template>
  <AppNavigation />
  <MouseCursor />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppNavigation from "@/components/AppNavigation.vue";
import MouseCursor from "@/components/MouseCursor.vue";

export default defineComponent({
  name: "App",
  components: {
    AppNavigation,
    MouseCursor,
  },
});
</script>
