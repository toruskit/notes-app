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
    h2: {
      fontSize: "1.6rem",
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
        paper: ({ theme }) => ({
          borderRadius: "1rem",
          padding: theme.spacing(2),
        }),
      },
    },

    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "3rem",
        },
      },
    },

    MuiIconButton: {
      styleOverrides: {
        root: {
          padding: "8px",
        },
      },
    },

    MuiAutocomplete: {
      styleOverrides: {
        inputRoot: {
          ".MuiChip-root": {
            margin: 0,
            marginLeft: "2px",
            marginRight: "2px",
            height: "28px",
          },
        },
      },
    },

    MuiChip: {
      styleOverrides: {
        root: {
          margin: 0,
          mx: 200,
          height: "28px",
        },
      },
    },
  },
});
