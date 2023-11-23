import { loginFetch } from "@/api/auth";
import { create } from "zustand";

const useStore = create((set) => ({
  isAuthenticated: false,
  messageError: "",
  login: async ({ username, password }) => {
    const res = await loginFetch({ username, password });

    if (res.token) {
      set({ isAuthenticated: true });
    } else {
      set({ isAuthenticated: false });
      set({ messageError: res.message });
    }
  },

  logout: () => set({ isAuthenticated: false }),
}));

export default useStore;
