import { ref, computed } from "vue";
import { defineStore } from "pinia";
import router from "@/router";

export const useUserStore = defineStore("userStore", () => {
  const baseURI = import.meta.env.VITE_API_Base_URI;
  const user = ref([1, 2, 3, 4, 5, 6, 6]);

  // actions section of user store

  const createUser = async (email, firstName, lastName, password) => {
    try {
      const response = await fetch(`${baseURI}user/createUser`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          firstName,
          lastName,
          password,
        }),
      });
      const data = await response.json();
      console.log("Server Response:", data);
      if (data.token) {
        // localStorage.setItem("authToken", `${data.token}`);
      }
      router.push("/login");
      return data;
    } catch (error) {
      console.error("Error submitting email:", error);
    }
  };

  const loginUser = async (email, password) => {
    try {
      const response = await fetch(`${baseURI}user/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      const data = await response.json();
      console.log("Server Response:", data);
      if (data.token) {
        localStorage.setItem("authToken", `${data.token}`);
        router.push("/dashboard");
      }
    } catch (error) {
      console.error("Error submitting email:", error);
    }
  };

  const logoutUser = () => {
    try {
      localStorage.removeItem("authToken");
      router.push("/login");
    } catch (error) {
      console.error("Error logging out:", error);
    }
  };

  return { user, createUser, loginUser, logoutUser };
});
