import { deliveryApi } from '@/shared/api/delivery-api';
import { GetProductsResponse } from '@/shared/interfaces/https/get-products';

interface GetProductsParams {
  page: number;
  perPage: number;
}

export const getProducts = async (
  params: GetProductsParams
): Promise<GetProductsResponse> => {
  const { data } = await deliveryApi.post<GetProductsResponse>(
    'products/paginated',
    params
  );
  return data;
};
