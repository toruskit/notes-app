import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import { useGetNotesQuery } from "src/api/notes-api";
import type { Styles } from "src/types/types";

export const Header = () => {
  const { data: notes } = useGetNotesQuery();

  return (
    <Stack direction="row" component="header" sx={styles.container}>
      <Typography variant="h1">Notes</Typography>
      <Typography variant="caption">
        <strong>Total notes:</strong> {notes?.length}
      </Typography>
    </Stack>
  );
};

const styles: Styles = {
  container: {
    justifyContent: "space-between",
    alignItems: "center",
    mt: 3,
    py: 3,
  },
};
