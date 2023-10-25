<template>
  <div>
    <v-carousel>
      <v-carousel-item
        v-for="(img, index) in images"
        :key="index"
        :src="img"
        cover
      >
        <!-- <div
          class="first-letter:w-screen flex flex-col justify-center items-center h-full"
        >
          <p class="text-5xl mb-5">天Q</p>
          <p class="text-5xl">着物ハウス</p>
        </div> -->
      </v-carousel-item>
      <v-sheet></v-sheet>
    </v-carousel>
  </div>
  <!-- <v-img :src="image" class="object-cover w-screen"></v-img> -->
</template>

<script setup lang="ts">
let index = ref<number>(0);
const images = ref<string[]>([
  "../images/hero1.jpg",
  "../images/hero2.jpg",
  "../images/hero3.jpg",
  "../images/hero4.jpg",
]);

// let image = ref<string>(images.value[index.value]);

// function moveImg() {
//   setTimeout(() => {
//     index.value++;
//     if (index.value >= images.value.length) {
//       index.value = 0;
//     }
//     image.value = images.value[index.value];
//     moveImg();
//   }, 5000);
// }

// moveImg();
</script>
