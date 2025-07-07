<template>
  <div class="min-h-screen flex items-center justify-center bg-gray-100">
    <div class="bg-white p-8 rounded shadow-md max-w-md w-full text-center">
      <img
        src="@/assets/images/correct-success-tick.svg"
        alt="Account Verified"
        class="mx-auto mb-4 w-24 h-24"
      />

      <h2 class="text-2xl font-bold mb-2 text-green-700">Account Verified!</h2>
      <p class="text-gray-700 mb-4">
        Your account has been successfully verified.<br />
        Please proceed to your email to complete your registration process.
      </p>
      <router-link
        to="/login"
        class="inline-block mt-4 px-6 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
      >
        Go to Login
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useUserStore } from "@/stores/userStore";
import { useRoute } from "vue-router";

onMounted(async () => {
  const userStore = useUserStore();
  const route = useRoute();
  const token = route.params.token;

  if (token) {
    try {
      await userStore.verifyUser(token);
      console.log("User verified successfully");
    } catch (error) {
      // Handle any errors that occur during verification
      console.error("Error verifying user:", error);
    }
    // Handle the case where token is not provided
    console.error("Verification token is missing");
    return;
  }
});
</script>
