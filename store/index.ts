import { create } from "zustand";
import namespace from "./utils/namespace";
import { marketStore, marketSelectors } from "./modules/market";
import { userStore, userSelectors } from "./modules/user";
import { AppState } from "./type";

// @ts-ignore
const createStore: typeof create = (fn: any) => {
  return create(fn);
};

const storeApp = createStore<AppState>((...a) => {
  const market = namespace("market", marketStore)(...a);
  const user = namespace("user", userStore)(...a);
  return {
    market,
    user,
  };
});

export const selectors = {
  user: { ...userSelectors },
  market: { ...marketSelectors },
};
export default storeApp;
