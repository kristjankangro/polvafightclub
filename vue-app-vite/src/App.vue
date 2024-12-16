<script setup lang="ts">
import MainNav from "./components/MainNav/MainNav.vue";
import "./App.css";
</script>

<template>
  <div class="flex-container main-layout">
    <div class="flex0">
      <MainNav></MainNav>
    </div>
    <div class="flex flex-col">
      <div class="bjj-image">
        <h2 class="page-title-white">Võitluspordi entusiastid Põlvas</h2>
        <button type="button" class="lg">Registreeri trenni</button>
      </div>
      <div class="content-main">
        <RouterView></RouterView>
      </div>
    </div>
  </div>



</template>
