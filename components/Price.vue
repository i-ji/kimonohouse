<template>
  <v-container>
    <h2
      class="text-center font-bold before:pb-10 text-4xl text-red-500 mb-10"
      id="items"
    >
      Items
    </h2>
    <v-container class="flex flex-wrap gap-0">
      <v-card class="w-3/5 mx-auto pc:w-[47%] pc:mt-10">
        <v-img src="../images/item1.jpg"></v-img>
        <div class="flex justify-between items-center m-3">
          <div class="font-bold text-xl">アンティーク羽織</div>
          <div>¥500~</div>
        </div>
        <v-card-text>
          シルク製にこだわったアンティークな羽織です。男女向けの多彩なデザインがあり、中には動物柄や浮世絵柄など珍しい柄のものもあります。
        </v-card-text>
      </v-card>
      <v-card class="w-3/5 mx-auto mt-10 pc:w-[47%]">
        <v-img src="../images/item2.jpg"></v-img>
        <div class="flex justify-between items-center m-3">
          <div class="font-bold text-xl">アンティーク着物</div>
          <div>¥1,000~</div>
        </div>
        <v-card-text>
          リメイク用の着物から実際に着れるものまで幅広く取り扱っています。リメイク用は500円、着用は1000円となっております。
        </v-card-text>
      </v-card>
      <v-card class="w-3/5 mx-auto mt-10 pc:w-[47%]">
        <v-img src="../images/item4.jpg"></v-img>
        <div class="flex justify-between items-center m-3">
          <div class="font-bold text-xl">リメイク</div>
          <div>¥1,000~</div>
        </div>
        <v-card-text>
          検品の際にほつれや汚れがあったものを、スカートやワンピースにリメイクして再利用してあります。
        </v-card-text>
      </v-card>
      <v-card class="w-3/5 mx-auto mt-10 pc:w-[47%]">
        <v-img src="../images/item3.jpg"></v-img>
        <div class="flex justify-between items-center m-3">
          <div class="font-bold text-xl">グッズ・小物</div>
          <div>¥100~</div>
        </div>
        <v-card-text>
          着物をリメイクする際に余った切れ端等で、シュシュや猫の首輪等の雑貨も作っています。
        </v-card-text>
      </v-card>
    </v-container>
  </v-container>
</template>
