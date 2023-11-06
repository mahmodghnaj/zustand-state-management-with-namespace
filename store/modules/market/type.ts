export interface IProduct {
  name: string;
  price: number;
}

export interface IMarket {
  products: IProduct[];
  addProducts: (product: IProduct) => void;
}
