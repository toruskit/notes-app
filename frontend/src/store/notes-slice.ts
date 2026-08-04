import { createSlice } from "@reduxjs/toolkit";

export interface NotesState {
  activeCategories: string[];
  activeNoteId: string | null;
  sorting: "ascending" | "descending";
  isActionLoading: boolean;
}

const initialState: NotesState = {
  activeCategories: [],
  activeNoteId: null,
  sorting: "ascending",
  isActionLoading: false,
};

export const notesSlice = createSlice({
  name: "notesSlice",
  initialState,
  reducers: {
    setActiveCategories: (state, action) => {
      state.activeCategories = action.payload;
    },

    setActiveNoteId: (state, action) => {
      state.activeNoteId = action.payload;
    },

    setSorting: (state, action) => {
      state.sorting = action.payload;
    },

    isActionLoading: (state, action) => {
      state.isActionLoading = action.payload;
    },
  },
});

export const {
  setActiveCategories,
  setActiveNoteId,
  setSorting,
  isActionLoading,
} = notesSlice.actions;
