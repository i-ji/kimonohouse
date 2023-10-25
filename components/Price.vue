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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </v-card-text>
      </v-card>
      <v-card class="w-3/5 mx-auto mt-10 pc:w-[47%]">
        <v-img src="../images/item2.jpg"></v-img>
        <div class="flex justify-between items-center m-3">
          <div class="font-bold text-xl">アンティーク着物</div>
          <div>¥1,000~</div>
        </div>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </v-card-text>
      </v-card>
      <v-card class="w-3/5 mx-auto mt-10 pc:w-[47%]">
        <v-img src="../images/item4.jpg"></v-img>
        <div class="flex justify-between items-center m-3">
          <div class="font-bold text-xl">リメイク用着物</div>
          <div>¥1,000~</div>
        </div>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </v-card-text>
      </v-card>
      <v-card class="w-3/5 mx-auto mt-10 pc:w-[47%]">
        <v-img src="../images/item3.jpg"></v-img>
        <div class="flex justify-between items-center m-3">
          <div class="font-bold text-xl">グッズ・小物</div>
          <div>¥1,000~</div>
        </div>
        <v-card-text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </v-card-text>
      </v-card>
    </v-container>
  </v-container>
</template>
