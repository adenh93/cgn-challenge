import { ProductsResponse } from "../types";
import { getApi } from "./fetchApi";

export const fetchProducts = async (
  page?: number
): Promise<ProductsResponse> => {
  return await getApi<ProductsResponse>(`products?page=${page || 0}`);
};
