<template>
  <div class="bg-bgGray h-dvh md:flex items-center justify-center">
    <div class="md:flex gap-5 items-center lg:w-4/5">
      <div class="max-sm:hidden md:w-1/2">
        <img src="/src//assets/images/lecturer-icon.svg" alt="" srcset="" />
      </div>
      <div class="w-screen p-4 flex flex-col gap-3 md:w-1/2">
        <div class="flex items-center justify-center">
          <img
            src="/src/assets/images/LMS-LOGO.png"
            class="w-100 h-100"
            alt=""
            srcset=""
          />
        </div>
        <form @submit="createUser">
          <span class="form-col">
            <label for="email" class="label-col">Emaill</label>
            <input
              type="text"
              id="email"
              placeholder="Enter Email Address"
              class="form-input"
              v-model="email"
              :class="{ 'border-red-500': errors.email }"
            />
            <p class="text-sm text-red-500 mt-1" v-if="errors.email">
              {{ errors.email }}
            </p>
          </span>
          <div class="form2 lg:flex-row justify-between">
            <span class="form-col w-1/2">
              <label for="firstName" class="label-col">First Name</label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter First Name"
                class="form-input"
                v-model="firstName"
                :class="{ 'border-red-500': errors.firstName }"
              />
              <p class="text-sm text-red-500 mt-1" v-if="errors.firstName">
                {{ errors.firstName }}
              </p>
            </span>
            <span class="form-col w-1/2">
              <label for="lastName" class="label-col">Last Name</label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter Last Name"
                class="form-input"
                v-model="lastName"
                :class="{ 'border-red-500': errors.lastName }"
              />
              <p class="text-sm text-red-500 mt-1" v-if="errors.lastName">
                {{ errors.lastName }}
              </p>
            </span>
          </div>
          <span class="form-col">
            <label for="password" class="label-col">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              class="form-input"
              v-model="password"
              :class="{ 'border-red-500': errors.password }"
            />
            <p class="text-sm text-red-500 mt-1" v-if="errors.password">
              {{ errors.password }}
            </p>
          </span>
          <button type="submit">Create Account</button>
        </form>
        <p class="mt-4 text-center text-sm">
          Already have an account?
          <router-link
            to="/login"
            class="text-base font-medium underline hover:text-myGreen"
            >Login to LMS</router-link
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useUserStore } from "../../stores/userStore";
import { useRouter } from "vue-router";
import { useToast } from "@/composables/useToast";

const { showToast } = useToast();
const userStore = useUserStore();
const router = useRouter();

const email = ref("");
const firstName = ref("");
const lastName = ref("");
const password = ref("");

// Validation errors
const errors = ref({
  email: "",
  firstName: "",
  lastName: "",
  password: "",
});

const validateForm = () => {
  let valid = true;
  errors.value = {
    email: "",
    firstName: "",
    lastName: "",
    password: "",
  };

  // Email validation
  if (!email.value) {
    errors.value.email = "Email is required.";
    valid = false;
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.value)) {
    errors.value.email = "Invalid email format.";
    valid = false;
  }

  // First Name
  if (!firstName.value) {
    errors.value.firstName = "First name is required.";
    valid = false;
  }

  // Last Name
  if (!lastName.value) {
    errors.value.lastName = "Last name is required.";
    valid = false;
  }

  // Password
  if (!password.value) {
    errors.value.password = "Password is required.";
    valid = false;
  } else if (password.value.length < 6) {
    errors.value.password = "Password must be at least 6 characters.";
    valid = false;
  }

  return valid;
};

const createUser = async (e) => {
  e.preventDefault();

  if (!validateForm()) {
    showToast("Please fix the errors before submitting.", "error");
    return;
  }

  try {
    const response = await userStore.createUser(
      email.value,
      firstName.value,
      lastName.value,
      password.value
    );

    showToast(
      `Thank you for signing up for our distance learning program. 
      Signup successful! Check your mail for further instructions.`,
      "success"
    );

    // Optional: clear form
    email.value = "";
    firstName.value = "";
    lastName.value = "";
    password.value = "";
  } catch (error) {
    console.error("Error submitting email:", error);
    showToast("Signup failed. Please try again.", "error");
  }
};
</script>

<style lang="scss" scoped></style>
