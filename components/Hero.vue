<template>
  <div>
    <v-carousel cycle :show-arrows="false">
      <v-carousel-item
        v-for="(img, index) in images"
        :key="index"
        :src="img"
        cover
      >
        <div class="mt-72 ml-10 pc:text-left pc:w-1/2" id="shadow">
          <span class="text-x tracking-[.2em]">Ten-Q the KIMONO HOUSE</span>
        </div>
      </v-carousel-item>
      <v-sheet></v-sheet>
    </v-carousel>
  </div>
</template>

<script setup lang="ts">
let index = ref<number>(0);
const images = ref<string[]>([
  "../images/demo_hero1.jpg",
  "../images/demo_hero2.jpg",
  "../images/demo_hero3.jpg",
  "../images/demo_hero4.jpg",
]);
</script>
