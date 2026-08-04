import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { NoteItem } from "../note-item/note-item";
import { NoteAdd } from "../note-add/note-add";
import { Note } from "../types";
import { textTruncate } from "../../../utils/text-truncate";
import { useGetNotesQuery } from "src/api/notes-api";
import { useSelector } from "react-redux";
import type { RootState } from "src/store/store";
import { useMemo } from "react";
import { getSortedByDate } from "src/utils/get-date-sorted";
import type { NotesState } from "src/store/notes-slice";

export const NoteList = () => {
  const { data: notes, isLoading, isError } = useGetNotesQuery();

  const sortingType = useSelector<RootState>(
    (state) => state.notes.sorting,
  ) as NotesState["sorting"];

  const activeCategories = useSelector<RootState>(
    (state) => state.notes.activeCategories,
  ) as string[];

  const sortedNotes = useMemo(() => {
    if (!notes) return [];

    const sorted = getSortedByDate(notes, sortingType);
    const filtered = sorted.filter((item) => {
      if (!activeCategories.length) {
        return sorted;
      }

      return activeCategories.every((cat) => item.category?.includes(cat));
    });

    return filtered;
  }, [sortingType, activeCategories, notes]);

  if (isLoading) {
    return <Box>Loading notes</Box>;
  }

  if (isError) {
    return <Box>Error</Box>;
  }

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid size={3}>
          <NoteAdd />
        </Grid>

        {sortedNotes?.map((note: Note) => {
          const category = note.category;
          const categoriesList = Array.isArray(category)
            ? category
            : category
              ? [category]
              : [];

          return (
            <Grid size={3} key={note.id}>
              <NoteItem
                id={note.id}
                title={note.title}
                description={textTruncate(note.description)}
                color={note.color}
                category={categoriesList}
                createdAt={note.createdAt}
              />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};
