import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useModal } from "../../../hooks/use-modal";
import type { Styles } from "../../../types/types";
import { NoteDialog } from "../note-dialog-edit/note-dialog";
import { useDispatch } from "react-redux";
import { setActiveNoteId } from "src/store/notes-slice";

export const NoteAdd = () => {
  const { open, modalOpen, modalClose } = useModal();

  const dispatch = useDispatch();

  const handleOpenModal = () => {
    dispatch(setActiveNoteId(null));
    modalOpen();
  }

  return (
    <>
      <Card sx={styles.card}>
        <CardActionArea sx={styles.action} onClick={handleOpenModal}>
          <AddCircleIcon fontSize="large" />
          <CardContent sx={styles.content}>Add new note</CardContent>
        </CardActionArea>
      </Card>

      <NoteDialog open={open} close={modalClose} />
    </>
  );
};

const styles: Styles = {
  card: {
    p: 0,
    boxSizing: "border-box",
    height: "100%",
    minHeight: "12rem",
  },

  action: (theme) => ({
    display: "flex",
    flexDirection: "column",
    border: `1px solid ${theme.palette.grey[300]}`,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    fontSize: theme.typography.body1,
  }),

  content: {
    p: 1,
  },
};
