import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#121212",
      paper: "#1a1a1a",
    },
    primary: {
      main: "#1EBEC6", // Teal-like blue
    },
    text: {
      primary: "#ffffff",
      secondary: "#b0b0b0",
    },
  },
  components: {
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: "#1e1e1e",
          borderRadius: "6px",
          input: {
            color: "#fff",
          },
        },
      },
    },
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: "#444",
        },
        root: {
          "&:hover .MuiOutlinedInput-notchedOutline": {
            borderColor: "#1EBEC6",
          },
          "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
            borderColor: "#1EBEC6",
          },
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: "4px",
          border: "1px solid #1EBEC6",
          backgroundColor: "transparent",
          color: "#fff",
          transition: "all 0.3s ease",
          "&:hover": {
            backgroundColor: "#1EBEC6",
            color: "#000",
          },
        },
      },
    },
  },
  typography: {
    fontFamily: `'Roboto', sans-serif`,
  },
});

export default theme;
