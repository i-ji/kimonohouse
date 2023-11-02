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
        年代物の着物や羽織が数多く取り揃えております。もちろん、気に入ったもの
        がなければ何買わずに退店していただいてもOKです。
      </p>

      <h3 class="text-white text-center font-bold text-xl pb-10" ref="demo">
        ドレスとして着れる着物
      </h3>
      <p class="px-10 w-5/6 mx-auto leading-8 indent-4">
        私たちは着物をドレスとして考えて、現代に合う色々な着方を模索しています。
      </p>
      <p class="px-10 pb-20 w-5/6 mx-auto leading-8 indent-4">
        店主も着物をちゃんと着れないので、着物が苦手な方や帯結びができない方も気軽にお入りください。
      </p>
    </v-container>
  </v-container>
</template>

<script setup lang="ts">
const props = defineProps(["demo"]);
</script>
