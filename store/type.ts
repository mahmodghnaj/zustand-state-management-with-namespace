import { IMarket } from "./modules/market/type";
import { IUser } from "./modules/user/type";

export type AppState = {
  market: IMarket;
  user: IUser;
};
