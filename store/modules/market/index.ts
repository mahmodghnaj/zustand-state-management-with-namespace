import { StateCreator } from "zustand";

import storeApp from "@/store";
import { IMarket } from "./type";

export const marketStore: StateCreator<IMarket> = (set) => ({
  products: [],
  addProducts: (product) =>
    set((state) => ({ products: [...state.products, product] })),
});

export const marketSelectors = {
  products: () => storeApp((state) => state.market.products),
  addProducts: () => storeApp((state) => state.market.addProducts),
};
