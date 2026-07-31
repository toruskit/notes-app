import Chip from "@mui/material/Chip";
import type { Styles } from "../../../types/types";

interface NoteChipProps {
  label?: string;
}

export const NoteChip = ({ label }: NoteChipProps) => {
  return (
    <Chip label={label} variant="outlined" size="small" sx={styles.container} />
  );
};

const styles: Styles = {
  container: {
    mt: "auto",
    maxWidth: "fit-content",
    px: 1,
    borderColor: `rgba(0 0 0 / 20%)`
  },
};
