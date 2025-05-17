import { reactive } from "vue";

export const toastState = reactive({
  message: "",
  type: "success",
  show: false,
});

export const useToast = () => {
  const showToast = (message, type = "success", duration = 10000) => {
    toastState.message = message;
    toastState.type = type;
    toastState.show = true;
    setTimeout(() => {
      toastState.show = false;
    }, duration);
  };

  return { showToast };
};
