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
  <RouterView></RouterView>
</template>

<style scoped>
.main-nav {
  position: sticky;
  top: 0;
  overflow: hidden;
  transition-property: background-color;
  transition-duration: 1s;
  transition-delay: 2s;
  display: flex;
  flex-direction: row;
  height: 60px;
  font-size: 22px;
  font-weight: bold;
  background-color: rgba(247, 247, 247, 1);
  cursor: pointer;

  :hover {
    background-color: #fff;
    color: #333;
    transition: all ease 1s;
  }
}
</style>