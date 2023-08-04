import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { BASE_URL } from '../constants';

const baseQuery = fetchBaseQuery({ baseUrl: BASE_URL });

export const apiSlice = createApi({
  baseQuery,
  //Types of data fetched from api
  tagTypes: ['Product', 'Order', 'User'],
  //we don't have to use try-catch and error handling unlike fetchAPI.
  //Here builder takes care of everything in redux
  endpoints: (builder) => ({}),
});
