<script setup lang="ts">
import "./MainNav.css";
</script>

<template>
  <div class="main-nav">
    <RouterLink to="/">Home</RouterLink>
    <RouterLink to="/bjj">Maasvõitlus</RouterLink>
    
    <div class="flex1 nav-tab">Ajakava</div>
    <div class="flex1 nav-tab">Info</div>
    <div class="flex1 nav-tab">Maasvõitlus</div>
    <div class="flex1 nav-tab">Püstivõitlus</div>
  </div>
</template>