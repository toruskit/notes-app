import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import { useModal } from "../../../hooks/use-modal";
import { NoteAddForm } from "./note-add-form";
import { NoteAddActions } from "./note-add-actions";
import { NoteAddTitle } from "./note-add-title";
import type { Styles } from "../../../types/types";

export const NoteAdd = () => {
  const { open, modalOpen, modalClose } = useModal();

  return (
    <>
      <Card sx={styles.card}>
        <CardActionArea sx={styles.action} onClick={modalOpen}>
          <AddCircleIcon fontSize="large" />
          <CardContent sx={styles.content}>Add new note</CardContent>
        </CardActionArea>
      </Card>
      <Dialog
        open={open}
        onClose={modalClose}
        role="alertdialog"
        maxWidth="sm"
        fullWidth={true}
        sx={styles.dialog}
      >
        {/* Title */}
        <DialogTitle>
          <NoteAddTitle onCancel={modalClose} />
        </DialogTitle>

        {/* Form */}
        <DialogContent>
          <NoteAddForm formId="note-add-form" />
        </DialogContent>

        {/* Buttons */}
        <DialogActions>
          <NoteAddActions formId="note-add-form" onCancel={modalClose} />
        </DialogActions>
      </Dialog>
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

  dialog: {
    ".MuiDialog-paper": {
      p: 2,
    },
  },
};
