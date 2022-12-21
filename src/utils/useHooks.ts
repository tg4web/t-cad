import { trpc } from "./trpc";
import { toast } from "react-toastify";
import { useEffect } from "react";

// Alert hook
export const useAlert = () => {
  return toast("Hello World");
};

// Set the page title dynamically
export const useHead = (title: string) => {
  useEffect(() => {
    document.title = title;
    const vp = "initial-scale=1, width=device-width";
    const desc = "T-CAD. Currently in development.";
    document.head
      .querySelector('meta[name="description"]')
      ?.setAttribute("content", desc);
    document.head
      .querySelector('meta[property="og:title"]')
      ?.setAttribute("content", title);
    document.head
      .querySelector('meta[property="og:description"]')
      ?.setAttribute("content", desc);
    document.head
      .querySelector('meta[name="viewport"]')
      ?.setAttribute("content", vp);
  }, [title]);
};

// Get the current user session data from the database (Only use the useUserSession hook on client side)

export const useGetDbSession = () => {
  const { data: sessionData } = trpc.auth.getSession.useQuery();

  if (sessionData !== undefined) {
    return sessionData;
  }
  return null;
};

export const useUserSession = () => {
  const sessionUser = useGetDbSession();
  if (sessionUser !== null) {
    return sessionUser;
  }
  return null;
};

export const useLogin = () => {
  useEffect(() => {
    const loginBtn = document.querySelector("#login-btn");
    const loginPopup = document.querySelector("#loginPopup");

    loginBtn?.addEventListener("click", () => {
      loginPopup?.classList.remove("hidden");
    });
  });
};
