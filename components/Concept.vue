<template>
  <v-container class="bg-black">
    <v-container>
      <h2
        class="text-center font-bold pt-20 pb-10 text-4xl text-red-500"
        id="concept"
      >
        CONCEPT
      </h2>
      <h3 class="text-white text-center font-bold text-xl pb-10">
        雑貨屋感覚で入れる着物屋さん
      </h3>
      <p class="px-10 w-5/6 mx-auto leading-8 indent-4">
        着物屋さんって入りづらくないですか？うちの店も例に漏れず入りにくいかと思います。しかし、少しでも気になったら軽い気持ちで
        一歩店内に足を踏み入れてください。
      </p>
      <p class="px-10 pb-20 w-5/6 mx-auto leading-8 indent-4">
        ここにしかない一点物の着物や羽織が数多く取り揃えております。もちろん、気に入ったもの
        がなければ何買わずに退店していただいてもOKです。
      </p>

      <h3 class="text-white text-center font-bold text-xl pb-10" ref="demo">
        普段着として着れる着物
      </h3>
      <p class="px-10 w-5/6 mx-auto leading-8 indent-4">
        着物といえば、冠婚葬祭やなど人生において大切な部分でしか着ない高貴なイメージがありませんか？
      </p>
      <p class="px-10 pb-20 w-5/6 mx-auto leading-8 indent-4">
        当店では、普段着としても着れるラフなものもたくさん用意してあります。試着もできますのでご安心ください。
      </p>
    </v-container>
  </v-container>
</template>

<script setup lang="ts">
const props = defineProps(["demo"]);
</script>
