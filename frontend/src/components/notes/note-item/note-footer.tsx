import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import type { Note } from "../types";
import type { Styles } from "src/types/types";
import { useDispatch } from "react-redux";
import { setActiveNoteId } from "src/store/notes-slice";
import { NoteDialog } from "../note-dialog-edit/note-dialog";
import { useModal } from "src/hooks/use-modal";
import { NoteDialogPopup } from "../note-dialog-popup/note-dialog-popup";
import { NoteDialogActions } from "../note-dialog-edit/note-dialog-actions";
import { useDeleteNoteMutation } from "src/api/notes-api";

interface NoteFooterProps {
  createdAt?: Note["createdAt"];
  id?: Note["id"];
}

export const NoteFooter = ({ createdAt, id }: NoteFooterProps) => {
  const {
    open: isModalFormOpen,
    modalOpen: modalFormOpen,
    modalClose: modalFormClose,
  } = useModal();

  const {
    open: isModalPopupOpen,
    modalOpen: modalPopupOpen,
    modalClose: modalPopupClose,
  } = useModal();

  const [deleteNote, { isLoading: isDeleting }] = useDeleteNoteMutation();

  const dispatch = useDispatch();

  // Set active note id and open modal for editing
  const handleOpenEditDialog = () => {
    dispatch(setActiveNoteId(id));
    modalFormOpen();
  };

  // Opens a Delete popup
  const handleOpenDeleteDialog = () => {
    modalPopupOpen();
  };

  const handleDeleteNote = async () => {
    try {
      if (id) {
        await deleteNote(id);
        modalPopupClose();
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Box sx={{ mt: "auto" }}>
      {/* Card Buttons */}
      <CardActions sx={styles.container}>
        <Typography variant="caption">
          {new Date(createdAt as string).toLocaleDateString("sk-SK")}
        </Typography>
        <Box sx={styles.buttons}>
          <IconButton size="small" onClick={handleOpenEditDialog}>
            <EditIcon />
          </IconButton>
          <IconButton size="small" onClick={handleOpenDeleteDialog}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </CardActions>

      {/* Modal Form (Edit/New) */}
      <NoteDialog open={isModalFormOpen} close={modalFormClose} />

      {/* Modal Popup (Delete) */}
      <NoteDialogPopup
        open={isModalPopupOpen}
        close={modalPopupClose}
        title="Delete Note"
        description="Are you sure you want to delete this note?"
        maxWidth="xs"
        actions={
          <NoteDialogActions
            onCancel={modalPopupClose}
            onAction={handleDeleteNote}
            cancelButtonText="Cancel"
            actionButtonText="Delete"
            isActionLoading={isDeleting}
          />
        }
      />
    </Box>
  );
};

const styles: Styles = {
  container: {
    padding: 0,
    display: "flex",
    justifyContent: "space-between",
  },
  buttons: {
    display: "flex",
    gap: 1,
    ".MuiSvgIcon-root": {
      fontSize: "1rem",
    },
  },
};
