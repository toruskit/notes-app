import Card from "@mui/material/Card";
import { NoteHeader } from "./note-header";
import { NoteBody } from "./note-body";
import { NoteFooter } from "./note-footer";
import { Note } from "../types";
import { NoteBg } from "../note-bg/note-bg";
import { NoteChip } from "../note-chip/note-chip";
import type { Styles } from "../../../types/types";

export const NoteItem = ({
  id,
  title,
  description,
  createdAt,
  category,
  color,
}: Note) => {
  return (
    <Card sx={styles.card}>
      <NoteHeader title={title} />
      <NoteChip label={category as string[]} />
      <NoteBody description={description}></NoteBody>
      <NoteFooter id={id} createdAt={createdAt} />
      <NoteBg color={color} />
    </Card>
  );
};

const styles: Styles = {
  card: {
    height: "100%",
    boxSizing: "border-box",
    position: "relative",
    backgroundColor: "transparent",
  },
};
