<template>
  <!-- <transition name="fade"> -->
  <v-main class="bg-black" v-show="!isOpen">
    <v-list lines="two" class="bg-black text-white mx-4 mt-10 font-bold">
      <v-list-item
        v-for="item in items"
        :key="item"
        variant="plain"
        @click="closeHam"
      >
        <NuxtLink :to="item.link" class="text-xl">{{ item.title }}</NuxtLink>
      </v-list-item>
    </v-list>
  </v-main>
  <!-- </transition> -->
</template>

<style>
/* .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
} */
</style>

<script setup lang="ts">
const props = defineProps(["isOpen", "items"]);
const emits = defineEmits(["closeHam"]);
const closeHam = () => {
  emits("closeHam");
};
</script>
