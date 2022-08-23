import { defaultProductsResponse, IProductsResponse } from "../types/product";

export const apiGetProducts = async (): Promise<IProductsResponse> => {
  try {
    const response = await fetch("https://dummyjson.com/products");
    return (await response.json()) as IProductsResponse;
  } catch (ex) {
    console.log(ex);
    return defaultProductsResponse;
  }
};
