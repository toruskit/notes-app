import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import CloseIcon from '@mui/icons-material/Close';
import IconButton from "@mui/material/IconButton";
import type { Styles } from "../../../types/types";

interface NoteAddTitleProps {
  onCancel?: () => void;
}

export const NoteAddTitle = ({ onCancel }: NoteAddTitleProps) => {
  return (
    <Box sx={styles.container}>
      <Typography variant="h1">Add a new note</Typography>
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
    mb: 3
  },
};
