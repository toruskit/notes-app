import Box from "@mui/material/Box";
import CardActions from "@mui/material/CardActions";
import { SxProps, Theme } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";

export const NoteActions = () => {
  return (
    <CardActions sx={styles.container}>
      <Typography variant="caption">10.5.2026</Typography>
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

const styles: Record<string, SxProps<Theme>> = {
  container: {
    padding: 0,
    display: "flex",
    justifyContent: "space-between",
    // marginTop: "auto",
  },
  buttons: {
    display: "flex",
    gap: 1,
    ".MuiSvgIcon-root": {
      fontSize: "1rem",
    }
  }
};
