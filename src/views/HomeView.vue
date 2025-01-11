<template>
  <main>
    <div class="dashboard">
      <User />
      <SideMenu />
      <div class="main-content">
        <div v-if="$route.path === '/dashboard'">
          <div>
            <h1 class="text-2xl font-bold">Dashboard</h1>
          </div>
        </div>
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
