import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import type { Styles } from "src/types/types";

interface NoteEditActionsProps {
  onCancel?: () => void;
  onAction?: () => void;
  isActionLoading?: boolean;
  cancelButtonText?: string;
  actionButtonText?: string;
}

export const NoteEditActions = ({
  onCancel,
  onAction,
  isActionLoading = false,
  cancelButtonText = "Cancel",
  actionButtonText = "Save",
}: NoteEditActionsProps) => {
  return (
    <Box sx={styles.container}>
      <Button onClick={onCancel} size="large">
        {cancelButtonText}
      </Button>
      <Button
        form="note-add-form"
        type="submit"
        variant="contained"
        size="large"
        onClick={onAction}
        disabled={isActionLoading}
      >
        {actionButtonText}
      </Button>
    </Box>
  );
};

const styles: Styles = {
  container: {
    display: "flex",
    gap: 2,
    p: 2,
  },
};
