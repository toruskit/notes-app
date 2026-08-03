import type { Note } from "src/components/notes/types";
import type { NotesState } from "src/store/notes-slice";

export const getSortedByDate = (
  array: Note[],
  sortingType: NotesState["sorting"] = "ascending",
) => {
  return [...array].sort((a, b) => {
    const dateA = a.createdAt ? new Date(a.createdAt).getTime() : 0;
    const dateB = b.createdAt ? new Date(b.createdAt).getTime() : 0;

    return sortingType === "ascending" ? dateB - dateA : dateA - dateB;
  });
};
