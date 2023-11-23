import { loginFetch, registerFetch } from "@/api/auth";
import { create } from "zustand";

const useStore = create((set) => ({
  isAuthenticated: false,
  registered: false,
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

  register: async ({ firstName, lastName, username, password }) => {
    const res = await registerFetch({
      firstName,
      lastName,
      username,
      password,
    });

    if (res) {
      set({ registered: true });
    } else {
      set({ registered: false });
      set({ messageError: res.message });
    }
  },
}));

export default useStore;
