<template>
  <div class="bg-bgGray h-dvh md:flex items-center justify-center">
    <div class="md:flex gap-5 items-center lg:w-4/5">
      <div class="max-sm:hidden md:w-1/2">
        <img
          src="/src/assets/images/undraw_learning_re_32qv.svg"
          alt=""
          srcset=""
        />
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
            />
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
              />
            </span>
            <span class="form-col w-1/2">
              <label for="lastName" class="label-col">Last Name</label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter Last Name"
                class="form-input"
                v-model="lastName"
              />
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
            />
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

const createUser = async (e) => {
  e.preventDefault();

  console.log("firstName:", firstName.value, typeof firstName.value);
  console.log("lastName:", lastName.value, typeof lastName.value);

  try {
    const response = await userStore.createUser(
      email.value,
      firstName.value,
      lastName.value,
      password.value
    );

    showToast(
      `Thank you for signing-up to our long disstand program. 
    Signup successful!
    Check your mail for further instrustions.`,
      "success"
    );
  } catch (error) {
    console.error("Error submitting email:", error);
  }
};
</script>

<style lang="scss" scoped></style>
