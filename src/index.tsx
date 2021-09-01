import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { createTheme, MuiThemeProvider } from "@material-ui/core";
const theme = createTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 800,
      md: 960,
      lg: 1280,
      xl: 1920,
    },
  },
});

ReactDOM.render(
  <MuiThemeProvider theme={theme}>
    <App />{" "}
  </MuiThemeProvider>,
  document.getElementById("root")
);
