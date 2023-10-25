<template>
  <!-- <transition name="fade"> -->
  <v-main class="bg-black" v-show="isOpen">
    <Hero></Hero>
    <div class="max-w-4xl mx-auto">
      <Concept></Concept>
      <Price></Price>
      <Access></Access>
    </div>
  </v-main>
  <!-- </transition> -->
</template>

<style>
/* .fade-enter-active {
  transition: opacity 0.5s;
}

.fade-enter-from {
  opacity: 0;
} */
</style>

<script setup lang="ts">
const props = defineProps(["isOpen"]);
</script>
