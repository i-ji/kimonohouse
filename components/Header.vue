<template>
  <v-app-bar :elevation="3" class="text-center bg-black px-5">
    <template v-slot:prepend>
      <v-app-bar-nav-icon
        class="d-sm-none"
        @click.stop="drawer = !drawer"
      ></v-app-bar-nav-icon>
    </template>

    <v-app-bar-title class="cursor-pointer tb:text-left" @click="topScroll"
      >天Q 着物ハウス</v-app-bar-title
    >
    <template v-slot:append>
      <v-container class="d-none d-sm-flex">
        <v-list lines="one" class="bg-black text-white mx-4 flex">
          <v-list-item
            v-for="item in items"
            :key="item"
            variant="plain"
            :title="item.title"
            :to="item.link"
          >
          </v-list-item>
        </v-list>
      </v-container>
    </template>
  </v-app-bar>

  <v-navigation-drawer
    v-model="drawer"
    location="left"
    temporary
    class="bg-black"
  >
    <v-list
      lines="two"
      class="bg-black text-white mx-4 mt-10 font-bold"
      variant="plain"
    >
      <v-list-item
        v-for="item in items"
        :key="item"
        variant="plain"
        :to="item.link"
        :title="item.title"
      >
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script setup lang="ts">
const menuToggle = ref<boolean>(false);
const props = defineProps(["items"]);
const emits = defineEmits(["topScroll"]);
const topScroll = () => {
  emits("topScroll");
};
const drawer = ref<boolean>(false);
</script>
