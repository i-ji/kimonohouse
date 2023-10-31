<template>
  <v-app>
    <Header @topScroll="topScroll" :items="items"></Header>
    <Main></Main>
    <Footer></Footer>
  </v-app>
</template>

<style>
/*  */
</style>

<script setup lang="ts">
const topScroll = () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
};
const items = ref<{ title: string; link: string }[]>([
  {
    title: "Concept",
    link: "#concept",
  },
  {
    title: "Items",
    link: "#items",
  },
  {
    title: "Attention",
    link: "#attention",
  },
  {
    title: "Access",
    link: "#access",
  },
]);
</script>
