import { NoteEditForm } from "./note-edit-form";
import { NoteEditActions } from "./note-edit-actions";
import { useSelector } from "react-redux";
import type { RootState } from "src/store/store";
import type { Breakpoint } from "@mui/material/styles";
import { ModalDialog } from "src/components/ui/modal-dialog/modal-dialog";

export interface NoteEditProps {
  open: boolean;
  close: () => void;
  title?: React.ReactNode;
  description?: React.ReactNode;
  actions?: React.ReactNode;
  maxWidth?: Breakpoint | false | undefined;
}

export const NoteEdit = ({ open, close, maxWidth = "sm" }: NoteEditProps) => {
  // Get active note id (or null if creating the new one)
  const activeNoteId = useSelector(
    (state: RootState) => state.notes.activeNoteId,
  );

  const isActionLoading = useSelector(
    (state: RootState) => state.notes.isActionLoading,
  );

  return (
    <ModalDialog
      open={open}
      close={close}
      maxWidth={maxWidth}
      title={activeNoteId ? "Edit Note" : "Add a new note"}
      body={<NoteEditForm activeNoteId={activeNoteId} onSuccess={close} />}
      actions={
        <NoteEditActions onCancel={close} isActionLoading={isActionLoading} />
      }
    />
  );
};
