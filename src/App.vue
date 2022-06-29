<template>
  <AppNavigation />
  <MouseCursor />
  <InfoBox />
</template>

<script lang="ts">
import { defineComponent } from "vue";
import AppNavigation from "@/components/AppNavigation.vue";
import MouseCursor from "@/components/MouseCursor.vue";
import InfoBox from "./components/InfoBox.vue";

export default defineComponent({
  name: "App",
  components: {
    AppNavigation,
    MouseCursor,
    InfoBox,
  },
});
</script>
