import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import type { NoteDialogProps } from "../note-dialog-edit/note-dialog";
import { modalZoom } from "src/constants/constants";
export const NoteDialogPopup = ({
  open,
  close,
  title,
  description,
  actions,
  maxWidth = "sm",
}: NoteDialogProps) => {
  return (
    <Dialog
      open={open}
      onClose={close}
      role="alertdialog"
      maxWidth={maxWidth}
      fullWidth={true}
      slotProps={{
        paper: {
          sx: {
            ...modalZoom(open),
          },
        },
      }}
    >
      <DialogTitle>{title}</DialogTitle>
      <DialogContent>{description}</DialogContent>
      <DialogActions>{actions}</DialogActions>
    </Dialog>
  );
};
