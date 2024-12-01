<template>
  <div class="bg-bgGray h-dvh md:flex items-center justify-center">
    <div class="md:flex gap-5 items-center lg:w-4/5">
      <div class="max-sm:hidden md:w-1/2">
        <img src="/src/assets/images/login.svg" alt="" srcset="" />
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
        <form>
          <span class="form-col">
            <label for="email" class="label-col">Emaill</label>
            <input
              type="text"
              id="email"
              placeholder="Enter Email Address"
              class="form-input"
            />
          </span>

          <span class="form-col">
            <label for="password" class="label-col">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter Password"
              class="form-input"
            />
          </span>
          <p class="mb-5 text-right text-sm">
            <a
              href="#"
              class="text-base font-medium underline hover:text-myGreen"
              >Forget Password?</a
            >
          </p>

          <button>Login</button>
        </form>
        <p class="mt-4 text-center text-sm">
          Don't have account?
          <a href="#" class="text-base font-medium underline hover:text-myGreen"
            >Sign-up to LMS</a
          >
        </p>
      </div>
    </div>
  </div>
</template>

<script setup></script>

<style lang="scss" scoped></style>
