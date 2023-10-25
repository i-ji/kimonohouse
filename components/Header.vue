<template>
  <v-app-bar :elevation="3" class="text-center bg-black px-5">
    <template v-slot:prepend>
      <v-app-bar-nav-icon
        @click="hamberger"
        v-show="isOpen"
        class="d-md-none"
      ></v-app-bar-nav-icon>
      <v-btn v-show="!isOpen" icon="mdi-close" @click="hamberger"> </v-btn>
    </template>

    <v-app-bar-title class="cursor-pointer pc:text-left" @click="topScroll"
      >Ten-Q the KIMONO HOUSE</v-app-bar-title
    >
    <template v-slot:append>
      <v-container class="d-none d-md-flex">
        <v-list lines="one" class="bg-black text-white mx-4 flex">
          <v-list-item
            v-for="item in items"
            :key="item"
            variant="plain"
            class="cursor-pointer"
          >
            <NuxtLink :to="item.link">{{ item.title }}</NuxtLink></v-list-item
          >
        </v-list>
      </v-container>
    </template>
  </v-app-bar>
</template>

<script setup lang="ts">
const menuToggle = ref<boolean>(false);
const props = defineProps(["isOpen", "items"]);
const emits = defineEmits(["hamberger", "topScroll"]);
const hamberger = () => {
  emits("hamberger");
};
const topScroll = () => {
  emits("topScroll");
};
</script>
