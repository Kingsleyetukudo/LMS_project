<template>
  <div class="bg-bgGray h-dvh md:flex items-center justify-center">
    <div class="md:flex gap-5 items-center lg:w-4/5">
      <div class="max-sm:hidden md:w-1/2">
        <img src="/src/assets/images/forget-password.svg" alt="" srcset="" />
      </div>
      <div class="w-screen p-4 flex flex-col gap-3 md:w-1/2">
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

        <p class="mt-4 text-center text-sm">
          Didn't receive code?
          <a href="#" class="text-base font-medium underline hover:text-myGreen"
            >Resend Email</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
