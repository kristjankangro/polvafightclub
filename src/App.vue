<script setup lang="ts">
import MainNav from "./components/MainNav/MainNav.vue";
import "./App.css";
</script>

<template>
  <div class="flex-container main-layout">
    <div class="flex0">
      <MainNav></MainNav>
    </div>
    <div class="flex1">
      <div class="content-main">
        <RouterView></RouterView>
      </div>
    </div>
  </div>
  

  
</template>