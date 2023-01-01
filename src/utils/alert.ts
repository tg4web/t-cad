import { toast } from "react-toastify";

const useAlert = (message: string) => {
  return toast(message, {
    toastId: message,
  });
};

export default useAlert;
