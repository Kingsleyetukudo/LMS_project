<template>
  <main>
    <div class="dashboard">
      <User />
      <SideMenu />
      <div class="main-content">
        <h1>This is the Home Page :)</h1>
        <RouterView />
      </div>
      <Footer />
    </div>
  </main>
</template>

<script setup>
import User from "@/component/User.vue";
import SideMenu from "@/component/SideMenu.vue";
import Footer from "@/component/Footer.vue";
</script>
