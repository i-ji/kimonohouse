<template>
  <v-app>
    <Header
      @hamberger="hamberger"
      :isOpen="isOpen"
      @topScroll="topScroll"
      :items="items"
    ></Header>
    <HumMenu :isOpen="isOpen" :items="items" @closeHam="closeHam"></HumMenu>
    <Main :isOpen="isOpen"></Main>
    <Footer></Footer>
  </v-app>
</template>

<style>
/*  */
</style>

<script setup lang="ts">
const isOpen = ref<boolean>(true);
const hamberger = () => {
  isOpen.value = !isOpen.value;
};
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
    title: "Access",
    link: "#access",
  },
]);

const closeHam = () => {
  isOpen.value = true;
};
</script>
