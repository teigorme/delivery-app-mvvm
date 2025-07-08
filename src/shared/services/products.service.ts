import { deliveryApi } from "@/shared/api/delivery-api";

interface GetProductsParams {
  page: number;
  perPage: number;
}

export const getProducts = async (params: GetProductsParams) => {
  const { data } = await deliveryApi.post("products/paginated", params);
  return data;
};
