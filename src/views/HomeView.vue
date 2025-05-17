<template>
  <main class="h-screen flex">
    <!-- Sidebar -->
    <SideMenu
      class="transition-all duration-300 overflow-y-auto bg-white shadow-lg"
      :class="toggleSidebar ? 'w-28 sm:w-64' : 'w-0 sm:w-0'"
      :openNavBar="toggleSidebar"
    />

    <!-- Main Layout -->
    <div class="flex flex-col flex-1 h-full">
      <!-- Header -->
      <User @openSideBar="handleSideBar" class="w-full px-4 py-2" />

      <!-- Content -->
      <div class="flex-1 overflow-y-auto p-4 my-5">
        <RouterView />
      </div>

      <!-- Footer -->
      <Footer class="mt-auto" />
    </div>
  </main>
</template>

<script setup>
import User from "@/components/User.vue";
import SideMenu from "@/components/SideMenu.vue";
import Footer from "@/components/Footer.vue";
import { ref } from "vue";

const toggleSidebar = ref(true);

const handleSideBar = (value) => {
  toggleSidebar.value = value;
};
</script>
