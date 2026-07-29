import { FC } from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import { NoteItem } from "../note-item/note-item";

export const NoteList: FC = () => {
  return (
    <Box>
      <Grid container spacing={2}>
        <Grid size={3}>
          <NoteItem />
        </Grid>
        <Grid size={3}>
          <NoteItem />
        </Grid>
      </Grid>
    </Box>
  );
};
