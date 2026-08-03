import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { NoteDialogTitle } from "./note-dialog-title";
import { NoteDialogForm } from "./note-dialog-form";
import DialogActions from "@mui/material/DialogActions";
import { NoteDialogActions } from "./note-dialog-actions";
import { useSelector } from "react-redux";
import type { RootState } from "src/store/store";
import type { Breakpoint } from "@mui/material/styles";
import { modalZoom } from "src/constants/constants";

export interface NoteDialogProps {
  open: boolean;
  close: () => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  maxWidth?: Breakpoint | false | undefined;
}

export const NoteDialog = ({
  open,
  close,
  maxWidth = "sm",
}: NoteDialogProps) => {
  // Get active note id (or null if creating the new one)
  const activeNoteId = useSelector(
    (state: RootState) => state.notes.activeNoteId,
  );

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
      {/* Title */}
      <DialogTitle>
        <NoteDialogTitle activeNoteId={activeNoteId} onCancel={close} />
      </DialogTitle>

      {/* Form */}
      <DialogContent>
        <NoteDialogForm activeNoteId={activeNoteId} onSuccess={close} />
      </DialogContent>

      {/* Buttons */}
      <DialogActions>
        <NoteDialogActions onCancel={close} />
      </DialogActions>
    </Dialog>
  );
};
