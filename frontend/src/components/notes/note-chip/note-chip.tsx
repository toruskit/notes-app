import Chip from "@mui/material/Chip";
import { SxProps, Theme } from "@mui/material/styles";
import { display } from "@mui/system";

interface NoteChipProps {
  label?: string;
}

export const NoteChip = ({ label }: NoteChipProps) => {
  return (
    <Chip label={label} variant="outlined" size="small" sx={styles.container} />
  );
};

const styles: Record<string, SxProps<Theme>> = {
  container: {
    mt: "auto",
    maxWidth: "fit-content",
    px: 1,
    borderColor: `rgba(0 0 0 / 20%)`
  },
};
