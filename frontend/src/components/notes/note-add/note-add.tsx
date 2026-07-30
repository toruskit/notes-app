import Card from "@mui/material/Card";
import CardActionArea from "@mui/material/CardActionArea";
import CardContent from "@mui/material/CardContent";
import { SxProps, Theme } from "@mui/material/styles";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import { useState } from "react";
import Dialog from "@mui/material/Dialog";
import Box from "@mui/material/Box";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

export const NoteAdd = () => {
  const [open, setOpen] = useState<boolean>(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card sx={styles.card}>
        <CardActionArea sx={styles.action} onClick={handleOpen}>
          <AddCircleIcon fontSize="large" />
          <CardContent sx={styles.content}>Add new note</CardContent>
        </CardActionArea>
      </Card>
      <Dialog open={open} onClose={handleClose} role="alertdialog">
        <DialogTitle>Add new note</DialogTitle>
        <DialogContent>
          <form>
            <TextField label="Title" size="small" />
          </form>
        </DialogContent>
        <DialogActions>
          <Button>Cancel</Button>
          <Button>Save</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

const styles: Record<string, SxProps<Theme>> = {
  card: {
    p: 0,
    boxSizing: "border-box",
    height: "100%",
    minHeight: "12rem",
  },

  action: (theme) => ({
    display: "flex",
    flexDirection: "column",
    border: `1px solid ${theme.palette.grey[300]}`,
    alignItems: "center",
    justifyContent: "center",
    height: "100%",
    fontSize: theme.typography.body1,
  }),

  content: {
    p: 1,
  },
};
