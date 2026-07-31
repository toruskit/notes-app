import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import type { Note } from "../types";
import type { Styles } from "src/types/types";

interface NoteFooterProps {
  createdAt?: Note["createdAt"];
}

export const NoteFooter = ({ createdAt }: NoteFooterProps) => {
  return (
    <CardActions sx={styles.container}>
      <Typography variant="caption">
        {new Date(createdAt as string).toLocaleDateString("sk-SK")}
      </Typography>
      <Box sx={styles.buttons}>
        <IconButton size="small">
          <EditIcon />
        </IconButton>
        <IconButton size="small">
          <DeleteIcon />
        </IconButton>
      </Box>
    </CardActions>
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
