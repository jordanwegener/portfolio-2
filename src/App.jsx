import React from "react";
import "./App.css";

import Intro from './components/Intro'


import { createTheme, ThemeProvider, styled } from "@mui/material/styles";

const theme = createTheme({
  palette: {
    type: "dark",
    primary: {
      main: "#ffa51a"
    },
    secondary: {
      main: "#f1724f"
    },
    background: {
      default: "#27272b",
      paper: "#3a3a43"
    },
    warning: {
      main: "#ff3500"
    }
  }
});

export default function App() {
  return (
    <ThemeProvider theme={theme}>
      <Intro/>
    </ThemeProvider>
  );
}
