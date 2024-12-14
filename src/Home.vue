<script setup lang="ts">
</script>

<template>
  <div class="nav-placeholder"></div>
  <div class="flex-container column">
    <div>1</div>
    <div><img class="logo" src="/pvk-logo-bold.png" alt="polva fightclub"></div>
    <div></div>
  </div>
  <hr class="red lg">
  <button type="button" class="lg">Registreeri trenni</button>
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
</style>