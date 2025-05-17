<template>
  <transition name="fade">
    <div v-if="visible" class="toast w-80" :class="type">
      {{ message }}
    </div>
  </transition>
</template>

<script setup>
import { ref, watch, onMounted } from "vue";

const props = defineProps({
  message: String,
  type: {
    type: String,
    default: "success",
  },
  duration: {
    type: Number,
    default: 10000,
  },
});

const visible = ref(true);

onMounted(() => {
  setTimeout(() => {
    visible.value = false;
  }, props.duration);
});
</script>

<style scoped>
.toast {
  position: fixed;
  top: 50%;
  left: 50%;

  transform: translate(-50%, -50%);
  padding: 12px 20px;
  border-radius: 8px;
  color: #fff;
  z-index: 9999;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.2);
  font-weight: 500;
  animation: slideIn 0.3s ease-out;
}
.toast.success {
  background-color: #28a745;
}
.toast.error {
  background-color: #dc3545;
}
.toast.info {
  background-color: #007bff;
}
.toast.warning {
  background-color: #ffc107;
  color: #000;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
@keyframes slideIn {
  from {
    opacity: 0;
    transform: translate(-50%, -50%) scale(0.95);
  }
  to {
    opacity: 1;
    transform: translate(-50%, -50%) scale(1);
  }
}
</style>
