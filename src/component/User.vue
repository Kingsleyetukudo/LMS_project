<template>
  <div
    class="header bg-myWhite flex items-center justify-between p-6 shadow-md sticky top-4"
  >
    <div class="reg-number-col">
      <h3 class="text-sm md:text-lg max-sm:hidden">
        Welcome Back: <span class="font-bold">23165004 </span>
      </h3>
      <span @click="openSideBar"
        ><img
          src="../assets/images/menu-icon.svg"
          alt=""
          class="w-6 md:w-6 md:hidden"
      /></span>
    </div>
    <div class="user-details-col flex gap-5 items-center">
      <span
        ><img
          src="../assets/images/menu-icon.svg"
          alt=""
          class="w-5 md:w-6 max-sm:hidden"
      /></span>
      <span class="relative"
        ><img
          src="../assets/images/notification-bell.svg"
          alt=""
          class="w-5 md:w-6"
        />
        <span
          class="bg-red-500 text-white rounded-full p-1 w-1.5 h-1.5 md:w-2.5 md:h-2.5 absolute right-0 top-0 text-xs"
        ></span>
      </span>
      <div class="flex gap-1 items-center">
        <span
          ><img
            src="../assets/images/user-icon.svg"
            alt=""
            class="w-8 md:w-7 border-2 border-gray-300 rounded-full p-0.5"
        /></span>
        <span
          ><img src="../assets/images/arrow-down.svg" alt="" class="w-2 md:w-3"
        /></span>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const isOpen = ref(false);
const emit = defineEmits(["openSideBar"]);

const openSideBar = () => {
  isOpen.value = !isOpen.value;
  emit("openSideBar", isOpen.value);

  console.log(isOpen.value);
};
</script>

<style lang="scss" scoped></style>
