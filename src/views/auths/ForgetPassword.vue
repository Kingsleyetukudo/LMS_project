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
          <h1 class="text-2xl lg:text-4xl font-semibold">Forget Password</h1>
          <p class="text-lg lg:text-2xl text-center">
            Enter the email address associated with your account.
          </p>
        </div>
        <form>
          <span class="form-col">
            <label for="email" class="label-col">Emaill Address</label>
            <input
              type="text"
              id="email"
              placeholder="Enter Email Address"
              class="form-input"
            />
          </span>

          <button>Send</button>
        </form>
        <p class="mt-4 text-center text-sm">
          Remember Password?
          <a href="#" class="text-base font-medium underline hover:text-myGreen"
            >Login to LMS</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
