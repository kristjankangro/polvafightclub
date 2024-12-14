<script setup lang="ts">
import HelloWorld from './components/HelloWorld.vue'
import MainNav from "./components/MainNav/MainNav.vue";
</script>

<template>
  <MainNav></MainNav>
  <div class="flex-container">
    <div>1</div>
    <div><img src="/pvk-logo-bold.png" alt="polva fightclub"></div>
    <div></div>
    <div>
      <a href="https://vite.dev" target="_blank">
        <img src="/pvk-logo-bold.png" class="logo" alt="Vite logo"/>
      </a>
      <a href="https://vuejs.org/" target="_blank">
        <img src="./assets/vue.svg" class="logo vue" alt="Vue logo"/>
      </a>
    </div>
  </div>
  <HelloWorld msg="Vite + Vue"/>
</template>

<style scoped>
.logo {
  height: 6em;
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
