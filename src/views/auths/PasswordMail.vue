<template>
  <div class="bg-bgGray h-dvh md:flex items-center justify-center">
    <div class="md:flex gap-5 items-center lg:w-4/5">
      <div class="max-sm:hidden md:w-1/2">
        <img src="/src/assets/images/forget-password.svg" alt="" srcset="" />
      </div>
      <div class="w-screen p-3 flex flex-col gap-3 md:w-1/2">
        <div
          class="flex flex-col max-sm:mt-16 gap-2 items-center justify-center"
        >
          <span class="bg-myGreen p-5 lg:p-7 rounded-full">
            <img
              src="/src/assets/images/mail.svg"
              class="w-20 max-sm:w-12"
              alt=""
              srcset=""
            />
          </span>
          <h1 class="text-2xl lg:text-4xl font-semibold">Email Sent</h1>
          <p class="text-lg lg:text-2xl text-center">
            We sent an email to the address provided.
          </p>
          <p class="text-lg lg:text-2xl text-center">
            Please check your inbox for further instructions.
          </p>
        </div>

        <!-- <p class="mt-4 text-center text-sm">
          Didn't receive code?
          <a href="#" class="text-base font-medium underline hover:text-myGreen"
            >Resend Email</a
          >
        </p> -->
        <div class="otp-container">
          <div class="otp-inputs">
            <input
              v-for="(digit, index) in otp"
              :key="index"
              type="text"
              maxlength="1"
              v-model="otp[index]"
              @input="moveToNext(index)"
              @keydown.backspace="moveToPrevious(index, $event)"
              class="otp-box"
              ref="otpRefs"
            />
          </div>
          <button>Reset Password</button>
          <p class="mt-4 text-center text-sm">
            Resend code in
            <span v-if="timer > 0"
              >00:{{ timer < 10 ? "0" + timer : timer }}</span
            >
            <span
              v-else
              class="text-base font-medium underline hover:text-myGreen"
              @click="resendCode"
              >Resend</span
            >
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, onBeforeUnmount } from "vue";

const otp = ref(["", "", "", ""]); // OTP input fields
const timer = ref(60); // Countdown timer in seconds
let interval = null; // Interval reference

// Function to move focus to the next input
const moveToNext = (index) => {
  if (otp.value[index].length === 1 && index < otp.value.length - 1) {
    const nextInput = otpRefs.value[index + 1];
    nextInput?.focus();
  }
};

// Function to move focus to the previous input
const moveToPrevious = (index, event) => {
  if (event.key === "Backspace" && otp.value[index] === "" && index > 0) {
    const prevInput = otpRefs.value[index - 1];
    prevInput?.focus();
  }
};

// Function to resend the OTP code
const resendCode = () => {
  if (timer.value === 0) {
    timer.value = 60; // Reset timer
    startTimer();
    otp.value = ["", "", "", ""]; // Clear OTP inputs
    alert("A new code has been sent!"); // Replace with actual resend logic
  }
};

// Timer function
const startTimer = () => {
  if (interval) clearInterval(interval);
  interval = setInterval(() => {
    if (timer.value > 0) {
      timer.value -= 1;
    } else {
      clearInterval(interval);
    }
  }, 1000);
};

// Reference for OTP input elements
const otpRefs = ref([]);

onMounted(() => {
  startTimer();
});

onBeforeUnmount(() => {
  if (interval) clearInterval(interval);
});
</script>

<style lang="scss" scoped></style>
