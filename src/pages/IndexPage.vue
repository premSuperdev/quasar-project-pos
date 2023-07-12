<template>
  <q-page class="flex flex-center">
    <span
      v-for="(char, index) in word"
      :key="index"
      v-bind:color="rainbowColor[index]"
      :style="{
        color: rainbowColor[index],
        'font-size': '100px',
        'font-weight': 'bold',
      }"
    >
      {{ char }}
    </span>
  </q-page>
</template>

<script setup>
const word = "Welcome_To_POS";
const rainbowColor = [
  "#FF0000",
  "#FF7F00",
  "#FFFF00",
  "#00FF00",
  "#0000FF",
  "#4B0082",
  "#9400D3",
  "#FF0000",
  "#FF7F00",
  "#FFFF00",
  "#00FF00",
  "#0000FF",
  "#4B0082",
];
</script>
