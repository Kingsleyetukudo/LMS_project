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
          <div class="form2 lg:flex-row justify-between">
            <span class="form-col w-1/2">
              <label for="firstName" class="label-col">First Name</label>
              <input
                type="text"
                id="firstName"
                placeholder="Enter First Name"
                class="form-input"
              />
            </span>
            <span class="form-col w-1/2">
              <label for="lastName" class="label-col">Last Name</label>
              <input
                type="text"
                id="lastName"
                placeholder="Enter Last Name"
                class="form-input"
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
            />
          </span>
          <button>Create Account</button>
        </form>
        <p class="mt-4 text-center text-sm">
          Already have an account?
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
