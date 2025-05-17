<script setup>
import { RouterLink, RouterView } from "vue-router";
import Toast from "./components/Toast.vue";
import { toastState } from "./composables/useToast";
</script>

<template>
  <Toast
    v-if="toastState.show"
    :message="toastState.message"
    :type="toastState.type"
  />

  <RouterView />
</template>

<style scoped></style>
