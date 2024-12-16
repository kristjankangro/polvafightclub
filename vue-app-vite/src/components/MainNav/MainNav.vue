<script setup lang="ts">
import "./MainNav.css";
</script>

<template>
  <div class="main-nav">
    <div><img class="logo-xl" src="/pvk-logo-bold.png" alt=""></div>
    <div class="nav-tab"><RouterLink to="/">Treeningplaan</RouterLink></div>
    <div class="nav-tab"><RouterLink to="/info">Kontakt</RouterLink></div>
    <div class="nav-tab"><RouterLink to="/bjj">Maasvõitlus</RouterLink></div>
    <div class="nav-tab"><RouterLink to="/mma">Püstivõitlus</RouterLink></div>
  </div>

</template>
<style scoped>
.logo-xl {
  height: 260px;
}
</style>
