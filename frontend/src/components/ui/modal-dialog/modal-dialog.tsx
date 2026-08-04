import Box from "@mui/material/Box";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import IconButton from "@mui/material/IconButton";
import type { Breakpoint } from "@mui/material/styles";
import Typography from "@mui/material/Typography";
import CloseIcon from "@mui/icons-material/Close";
import type { Styles } from "src/types/types";

export interface ModalDialogProps {
  open: boolean;
  close: () => void;
  title?: React.ReactNode;
  body?: React.ReactNode;
  actions?: React.ReactNode;
  maxWidth?: Breakpoint | false | undefined;
}

export const ModalDialog = ({
  open,
  close,
  title,
  body,
  actions,
  maxWidth = "sm",
}: ModalDialogProps) => {
  return (
    <Dialog
      open={open}
      onClose={close}
      role="alertdialog"
      maxWidth={maxWidth}
      fullWidth={true}
      slotProps={{
        paper: {
          sx: {
            // ...modalZoom(open),
          },
        },
      }}
    >
      <DialogTitle>
        <Box sx={styles.container}>
          <Typography variant="h2">{title}</Typography>
          <IconButton onClick={close}>
            <CloseIcon />
          </IconButton>
        </Box>
      </DialogTitle>
      <DialogContent>{body}</DialogContent>
      <DialogActions>{actions}</DialogActions>
    </Dialog>
  );
};

const styles: Styles = {
  container: {
    display: "flex",
    justifyContent: "space-between",
    mb: 3,
  },
};
