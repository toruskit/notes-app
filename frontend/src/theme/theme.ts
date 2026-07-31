import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  palette: {
    text: {
      primary: "rgba(0, 0, 0, 0.7)",
    },
    primary: {
      main: "#0c0c0c",
    },
  },

  typography: {
    h1: {
      fontSize: "2rem",
      fontWeight: 500,
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: ({ theme }) => ({
          borderRadius: "0.5rem",
          display: "flex",
          flexDirection: "column",
          gap: theme.spacing(3),
          boxShadow: "none",
          border: "none",
          padding: theme.spacing(3),
        }),
      },
    },

    MuiButtonBase: {
      defaultProps: {
        disableRipple: true,
      },
    },

    MuiFormControl: {
      styleOverrides: {
        root: {
          "& .MuiInputBase-root": {
            borderRadius: "0.5rem",
          },
        },
      },
    },

    MuiDialog: {
      styleOverrides: {
        backdrop: {
          backdropFilter: "blur(4px)",
        },
        paper: {
          borderRadius: "1rem",
        },
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "3rem",
        },
      },
    },
  },
});
