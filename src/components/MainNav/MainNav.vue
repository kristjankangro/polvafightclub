

<script setup lang="ts">
import "./MainNav.css";
</script>

<template>
  <div class="main-nav flex-container column">
    <div><img class="logo-sm" src="/pvk-logo-bold.png" alt=""></div>
    <div class="nav-tab"><RouterLink to="/">Tule trenni</RouterLink></div>
    <div class="nav-tab"><RouterLink to="/info">Kontakt</RouterLink></div>
    <div class="nav-tab"><RouterLink to="/bjj">Maasvõitlus</RouterLink></div>
    <div class="nav-tab"><RouterLink to="/mma">Püstivõitlus</RouterLink></div>
  </div>
  
</template>
<style scoped>
.logo-sm {
  height: 60px;
}
</style>