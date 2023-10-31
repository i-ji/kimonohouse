<template>
  <div>
    <v-carousel cycle :show-arrows="false">
      <v-carousel-item
        v-for="(img, index) in images"
        :key="index"
        :src="img"
        cover
      >
      </v-carousel-item>
      <v-sheet></v-sheet>
    </v-carousel>
  </div>
</template>

<script setup lang="ts">
let index = ref<number>(0);
const images = ref<string[]>([
  "../images/hero1.jpg",
  "../images/hero2.jpg",
  "../images/hero3.jpg",
  "../images/hero4.jpg",
]);
</script>
