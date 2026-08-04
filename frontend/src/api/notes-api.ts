import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { API_URL } from "./api-url";
import type { Note } from "src/components/notes/types";

export const notesApi = createApi({
  reducerPath: "notesApi",
  baseQuery: fetchBaseQuery({
    baseUrl: API_URL,
  }),
  tagTypes: ["Notes"],
  endpoints: (builder) => ({
    getNotes: builder.query<Note[], void>({
      query: () => "/",
      providesTags: ["Notes"],
    }),

    addNote: builder.mutation<Note, Omit<Note, "id">>({
      query: (note) => ({
        url: "/",
        method: "POST",
        body: note,
      }),
      invalidatesTags: ["Notes"],
    }),

    updateNote: builder.mutation<Note, Note>({
      query: ({ id, ...rest }) => ({
        url: `/${id}`,
        method: "PUT",
        body: rest,
      }),
      invalidatesTags: ["Notes"],
    }),

    deleteNote: builder.mutation<void, string>({
      query: (id) => ({
        url: `/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Notes"],
    }),
  }),
});

export const {
  useGetNotesQuery,
  useAddNoteMutation,
  useUpdateNoteMutation,
  useDeleteNoteMutation,
} = notesApi;
