import { useDeleteNoteMutation } from "src/api/notes-api";
import { ModalDialog } from "src/components/ui/modal-dialog/modal-dialog";
import { NoteEditActions } from "../note-edit/note-edit-actions";
import type { Note } from "../types";

export interface NoteDeleteProps {
  id?: Note["id"];
  open: boolean;
  close: () => void;
}

export const NoteDelete = ({ id, open, close }: NoteDeleteProps) => {
  const [deleteNote, { isLoading: isDeleting }] = useDeleteNoteMutation();

  const handleDeleteNote = async () => {
    try {
      if (id) {
        await deleteNote(id);
        close();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <ModalDialog
      open={open}
      close={close}
      title="Delete Note"
      body="Are you sure you want to delete this note?"
      maxWidth="xs"
      actions={
        <NoteEditActions
          onCancel={close}
          onAction={handleDeleteNote}
          cancelButtonText="Cancel"
          actionButtonText="Delete"
          isActionLoading={isDeleting}
        />
      }
    />
  );
};
