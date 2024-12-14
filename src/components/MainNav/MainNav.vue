<script setup lang="ts">
import "./MainNav.css";
</script>

<template>
  <div class="main-nav">
    <div class="flex1 nav-tab"><RouterLink to="/">Ajakava</RouterLink></div>
    <div class="flex1 nav-tab">Info</div>
    <div class="flex1 nav-tab"><RouterLink to="/bjj">Maasvõitlus</RouterLink></div>
    <div class="flex1 nav-tab">Püstivõitlus</div>
  </div>
  <RouterView></RouterView>
</template>