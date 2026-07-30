import Card from "@mui/material/Card";
import { NoteHeader } from "./note-header";
import { NoteBody } from "./note-body";
import { NoteActions } from "./note-actions";
import { SxProps, Theme } from "@mui/material/styles";
import { Note } from "../types";
import { NoteBg } from "../note-bg/note-bg";
import { NoteChip } from "../note-chip/note-chip";

export interface NoteItemProps extends Note {}

export const NoteItem = ({
  id,
  title,
  description,
  createdAt,
  category,
  color,
}: NoteItemProps) => {
  return (
    <Card sx={styles.card}>
      <NoteHeader title={title} />
      <NoteBody description={description}></NoteBody>
      <NoteChip label={category} />
      <NoteActions />
      <NoteBg color={color} />
    </Card>
  );
};

const styles: Record<string, SxProps<Theme>> = {
  card: {
    height: "100%",
    boxSizing: "border-box",
    position: "relative",
    backgroundColor: "transparent",
  },
};
