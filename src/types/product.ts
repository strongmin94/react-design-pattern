import { IPagination } from "./common";

export interface IProduct {
  id: number;
  title: string;
  description: string;
  price: number;
  discountPercentage: number;
  rating: number;
  stock: number;
  brand: string;
  category: string;
  thumbnail: string;
  images: Array<string>;
}

export interface IProductsResponse extends IPagination {
  products: Array<IProduct>;
}

export const defaultProductsResponse: IProductsResponse = {
  products: [],
  total: 0,
  skip: 0,
  limit: 0,
};
