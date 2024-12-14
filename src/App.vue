<script setup lang="ts">
import HelloWorld from './components/HelloWorld/HelloWorld.vue'
// import MainNav from "./components/MainNav/MainNav.vue";
</script>

<template>
<!--  <MainNav></MainNav>-->
  <nav>
    <RouterLink to="/">Go to Home</RouterLink>
    <RouterLink to="/bjj">Go to About</RouterLink>
  </nav>
  <main>
    <RouterView />
  </main>
  <div class="flex-container">
    <div>1</div>
    <div><img src="/pvk-logo-bold.png" alt="polva fightclub"></div>
    <div></div>
    
  </div>
  <HelloWorld msg="Vite + Vue"/>
  <Footer></Footer>
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
