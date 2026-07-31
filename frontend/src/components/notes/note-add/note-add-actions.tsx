import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import type { Styles } from "src/types/types";

interface NoteAddActionsProps {
  formId: string;
  onCancel?: () => void;
}

export const NoteAddActions = ({ formId, onCancel }: NoteAddActionsProps) => {
  return (
    <Box sx={styles.container}>
      <Button onClick={onCancel} size="large">
        Cancel
      </Button>
      <Button form={formId} type="submit" variant="contained" size="large">
        Save
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
