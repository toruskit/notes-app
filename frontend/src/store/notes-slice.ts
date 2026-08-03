import { createSlice } from "@reduxjs/toolkit";

export interface NotesState {
  selectedCategories: string[];
  activeNoteId: string | null;
  sorting: "ascending" | "descending";
}

const initialState: NotesState = {
  selectedCategories: [],
  activeNoteId: null,
  sorting: "ascending",
};

export const notesSlice = createSlice({
  name: "notesSlice",
  initialState,
  reducers: {
    setSelectedCategories: (state, action) => {
      state.selectedCategories = action.payload;
    },

    setActiveNoteId: (state, action) => {
      state.activeNoteId = action.payload;
    },

    setSorting: (state, action) => {
      state.sorting = action.payload;
    },
  },
});

export const { setSelectedCategories, setActiveNoteId, setSorting } =
  notesSlice.actions;
