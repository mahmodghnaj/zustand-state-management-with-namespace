import { StateCreator } from "zustand";

import storeApp from "@/store";
import { IUser } from "./type";

export const userStore: StateCreator<IUser> = (set) => ({
  name: null,
  email: null,
  setEmail: (email) => set(() => ({ email: email })),
  setName: (name) => set(() => ({ name: name })),
});

export const userSelectors = {
  name: () => storeApp((state) => state.user.name),
  email: () => storeApp((state) => state.user.email),
  setEmail: () => storeApp((state) => state.user.setEmail),
  setName: () => storeApp((state) => state.user.setName),
};
