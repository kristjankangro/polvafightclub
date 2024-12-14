<script setup lang="ts">
</script>

<template>
  <div class="flex-container column">
    <div class="bjj-image">
      <h2 class="page-title-white">Võitluspordi entusiastid Põlvas</h2>
    </div>
    <div class="flex0"><img class="logo" src="/pvk-logo-bold.png" alt="polva fightclub"></div>
    <div class="flex0">
      <button type="button" class="">Registreeri trenni</button>
    </div>
  </div>
</template>

<style scoped>
.logo {
  margin: 0 auto;
  height: 40vmin;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}

.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}

.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}

.bjj-image {
  background-size: 630px;
  background-position: left;
  width: 700px;
  height: 200px;
  opacity: 0.8;
  background-image: url('./assets/bjj-image.jpg');
}

.page-title-white {
  color: white;
}
</style>