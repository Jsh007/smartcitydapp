/*
 * @Author: Joshua Eigbe jeigbe@gmail.com
 * @Github: https:
 * @Date: 2024-03-26 16:38:48
 * @LastEditors: Joshua Eigbe jeigbe@gmail.com
 * @LastEditTime: 2024-03-26 22:07:17
 * @FilePath: /gns_dapp/src/app/api/apiSlice.ts
 * @copyrightText: Copyright (c) Joshua Eigbe. All Rights Reserved.
 * @Description: See Github repo
 */
import { createApi, fetchBaseQuery, type FetchArgs, type FetchBaseQueryError } from '@reduxjs/toolkit/query/react';
// import { type RootState } from '../store';
import { RootState } from '@app/store';
// import { setCredentials } from '@/features/auth/authSlice';
import { setCredentials } from '@features/auth/authSlice';
import { type BaseQueryFn } from '@reduxjs/toolkit/dist/query/baseQueryTypes';

export type AccessTokenType = {
  accessToken: string;
};

const baseQuery = fetchBaseQuery({
  baseUrl: 'http://localhost:5002/api/',
  //   baseUrl: 'https://gnsserv1.onrender.com/api/',
  credentials: 'include',
  prepareHeaders(headers, { getState }) {
    const { token } = (getState() as RootState).auth;

    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }

    return headers;
  },
});

const baseQueryWithReauth: BaseQueryFn<string | FetchArgs, unknown, FetchBaseQueryError> = async (
  args,
  api,
  extraOptions,
) => {
  let result = await baseQuery(args, api, extraOptions);

  if (result?.error?.status === 403) {
    const refreshResult = await baseQuery('auth/refresh', api, extraOptions);

    if (refreshResult?.data) {
      api.dispatch(setCredentials({ ...refreshResult.data }));

      result = await baseQuery(args, api, extraOptions);
    } else {
      if (refreshResult?.error?.status === 403) {
        (refreshResult.error.data as Record<string, string>).message = 'Your login has expired ';
      }

      return refreshResult;
    }
  }

  return result;
};

export const apiSlice = createApi({
  reducerPath: 'gnsApi',
  baseQuery: baseQueryWithReauth,

  tagTypes: ['User', 'Domain'],
  refetchOnMountOrArgChange: true,

  refetchOnReconnect: true,
  endpoints: (builder) => ({}),
});
