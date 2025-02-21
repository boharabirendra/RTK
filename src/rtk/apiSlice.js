import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:3000/api",
    credentials: "include",
  }),
  endpoints: (builder) => ({
    getAllArticles: builder.query({
      query: () => `/article`,
    }),

    getAllArticlesOfUser: builder.query({
      query: () => `/article/all`,
    }),

    getArticleById: builder.query({
      query: (id) => `/article/${id}`,
    }),

    createArticle: builder.mutation({
      query: (newArticle) => ({
        url: "/article",
        method: "POST",
        body: newArticle,
      }),
    }),

    updateArticle: builder.mutation({
      query: ({ id, ...updatedData }) => ({
        url: `/article/${id}`,
        method: "PUT",
        body: updatedData,
      }),
    }),

    deleteArticle: builder.mutation({
      query: (id) => ({
        url: `/article/${id}`,
        method: "DELETE",
      }),
    }),

    login: builder.mutation({
      query: (credentials) => ({
        url: "/user/login",
        method: "POST",
        body: credentials,
      }),
    }),
  }),
});

export const {
  useGetAllArticlesQuery,
  useGetAllArticlesOfUserQuery,
  useGetArticleByIdQuery,
  useCreateArticleMutation,
  useUpdateArticleMutation,
  useDeleteArticleMutation,
  useLoginMutation,
} = api;
