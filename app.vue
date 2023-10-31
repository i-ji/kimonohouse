<template>
  <div>
    <NuxtPage></NuxtPage>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>

<script setup lang="ts">
useHead({
  title: "着物ハウス",
  link: [
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Permanent+Marker&display=swap",
    },
  ],
});
</script>
