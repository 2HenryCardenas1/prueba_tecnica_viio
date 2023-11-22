import { loginFetch } from "@/api/auth";
import { create } from "zustand";

const useStore = create((set) => ({
  isAuthenticated: false,
  login: async ({ email, password }) => {
    const res = await loginFetch(email, password);
    if (res.token) {
      set({ isAuthenticated: true });
    } else {
      set({ isAuthenticated: false });
    }
  },

  logout: () => set({ isAuthenticated: false }),
}));

export default useStore;
