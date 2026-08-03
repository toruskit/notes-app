import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import IconButton from "@mui/material/IconButton";
import type { Styles } from "../../../types/types";

interface NoteDialogTitleProps {
  onCancel?: () => void;
  activeNoteId: string | null;
}

export const NoteDialogTitle = ({
  onCancel,
  activeNoteId,
}: NoteDialogTitleProps) => {
  return (
    <Box sx={styles.container}>
      <Typography variant="h1">
        {activeNoteId ? "Edit Note" : "Add a new note"}
      </Typography>
      <IconButton onClick={onCancel}>
        <CloseIcon />
      </IconButton>
    </Box>
  );
};

const styles: Styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    mb: 3,
  },
};
