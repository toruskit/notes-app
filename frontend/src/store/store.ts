import { configureStore } from "@reduxjs/toolkit";
import { notesSlice } from "./notes-slice";
import { notesApi } from "src/api/notes-api";

export const store = configureStore({
  reducer: {
    notes: notesSlice.reducer,
    [notesApi.reducerPath]: notesApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(notesApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;