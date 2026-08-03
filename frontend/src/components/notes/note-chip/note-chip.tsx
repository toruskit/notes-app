import Chip from "@mui/material/Chip";
import type { Styles } from "../../../types/types";
import Stack from "@mui/material/Stack";

interface NoteChipProps {
  label?: string[];
}

export const NoteChip = ({ label }: NoteChipProps) => {
  return (
    <Stack direction="row" spacing={1}>
      {label?.map((item: string, index: number) => (
        <Chip
          label={item}
          variant="outlined"
          size="small"
          sx={styles.container}
          key={index}
        />
      ))}
    </Stack>
  );
};

const styles: Styles = {
  container: {
    mt: "auto",
    maxWidth: "fit-content",
    px: 1,
    borderColor: `rgba(0 0 0 / 20%)`,
  },
};
