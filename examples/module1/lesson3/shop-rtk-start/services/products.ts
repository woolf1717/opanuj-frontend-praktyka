import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import type { Product } from '../types/Product';

export const productsApi = createApi({
  reducerPath: 'productsApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://fakestoreapi.com/' }),
  endpoints: (builder) => ({
    getProducts: builder.query<Product[], []>({
      query: () => `products`,
    }),
  }),
});

export const { useGetProductsQuery } = productsApi;
