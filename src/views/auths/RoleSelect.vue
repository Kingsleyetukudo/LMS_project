<template>
  <div class="flex min-h-screen">
    <!-- Left Side: Image -->
    <div class="hidden lg:flex w-1/2 items-center justify-center bg-gray-100">
      <img
        src="/src/assets/images/user-role.svg"
        alt="Signup illustration"
        class="w-3/4 h-auto object-contain"
      />
    </div>

    <!-- Right Side: Role Selection -->
    <div class="w-full lg:w-1/2 flex items-center justify-center bg-white px-6">
      <div class="max-w-md w-full text-center">
        <h1 class="text-3xl font-bold text-gray-800 mb-6">
          Create Your Account
        </h1>
        <p class="text-gray-500 mb-8">
          Please select your role to proceed with registration.
        </p>

        <div class="flex flex-col gap-4">
          <button
            @click="goTo('student')"
            class="bg-blue-600 hover:bg-blue-700 text-white py-3 px-6 rounded-md text-lg transition"
          >
            I'm a Student
          </button>

          <button
            @click="goTo('lecturer')"
            class="bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-md text-lg transition"
          >
            I'm a Lecturer
          </button>
        </div>

        <p class="mt-6 text-sm text-gray-600">
          Already have an account?
          <RouterLink to="/login" class="text-blue-600 hover:underline"
            >Login</RouterLink
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
const router = useRouter();

const goTo = (role) => {
  router.push(`/signup/${role}`);
};
</script>
