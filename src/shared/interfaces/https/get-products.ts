import { Product } from "@/shared/interfaces/product";

export interface GetProductsResponse {
  page: number;
  perPage: number;
  totalItems: number;
  totalPages: number;
  items: Product[];
}
