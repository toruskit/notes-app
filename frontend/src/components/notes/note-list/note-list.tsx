import { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { NoteItem } from "../note-item/note-item";
import { NoteAdd } from "../note-add/note-add";
import { Note } from "../types";
import { textTruncate } from "../../../utils/text-truncate";

const API_URL = "https://6a69e89ab2789286ad712914.mockapi.io/api/v1/notes";

export const NoteList = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [noteList, setNoteList] = useState<Note[]>([]);

  useEffect(() => {
    const fetchNotes = async () => {
      try {
        setLoading(true);

        const response = await fetch(API_URL);
        const data = await response.json();

        setNoteList(data);
      } catch (error) {
        if (error instanceof Error) {
          setError(error.message);
        } else {
          setError("Unknown error");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchNotes();
  }, []);

  if (loading) {
    return <Box>Loading notes</Box>;
  }

  if (error) {
    return <Box>{error}</Box>;
  }

  return (
    <Box>
      <Grid container spacing={2}>
        <Grid size={3}>
          <NoteAdd />
        </Grid>

        {noteList.map((item, index) => (
          <Grid size={3} key={index}>
            <NoteItem
              id={item.id}
              title={item.title}
              description={textTruncate(item.description)}
              color={item.color}
              category={item.category}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};
