import React, { useEffect, useState } from "react";
import store from "./store/store";
import { observer } from "mobx-react-lite";
import {
  Box,
  Button,
  ButtonGroup,
  Container,
  CssBaseline,
  makeStyles,
  Grid,
  colors,
  Hidden,
  CircularProgress,
  Backdrop, Snackbar
} from "@material-ui/core";
import { Appbar } from "./components/AppBar/AppBar";
import LayoutStore from "./store/LayoutStore";
import { Results } from "./components/Results/Results";
import { Content } from "./components/Content/Content";
import { Category } from "./components/Category/Category";
import { ContentContainer } from "./components/Content/ContentContainer";
import { MobPanel } from "./components/MobPanel";
import {Alert} from "@material-ui/lab";
import {ErrorAlert} from "./components/ErrorAlert";

const useStyles = makeStyles({
  root: {
    display: "flex",
    position: "relative",
    width: "100vw",
    height: "100vh",
    background: "linear-gradient(315deg, #FFDEE9 0%, #B5FFFC 100%)",
    flexDirection: "column"
  },
  container: {
    position: "relative",
    display: "flex",
    justifyContent: "center"
  },

  button: {
    display: "flex",
    flexDirection: "column",
    width: "100%"
  },
  contentWrapper: {
    position: "relative",
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    background: "transparent"
  },
  backdrop: {
    color: "rgba(0,0,0,0.3)"
  },
  loader: {
    position: "fixed",
    zIndex: 999,
    top: "50%",
    left: "50%"
  }
});
const App = observer(() => {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <Appbar />
      {store.loading ? (
        <Box className={classes.loader}>
          <Backdrop className={classes.backdrop} open={true}>
            <CircularProgress />
          </Backdrop>{" "}
        </Box>
      ) : null}
      <Hidden mdUp>
        <MobPanel />
      </Hidden>
      <Container maxWidth="lg" className={classes.container}>
        <Hidden smDown>
          <Category />
        </Hidden>
        <Hidden xsDown>
          <Results />
        </Hidden>
        <Hidden smUp>
          <Box className={classes.contentWrapper}>
            {LayoutStore.activeView === "content" ? (
              <ContentContainer />
            ) : (
              <Results />
            )}
          </Box>
        </Hidden>
        <Hidden xsDown>
          <Box className={classes.contentWrapper}>
            <ContentContainer />
          </Box>
        </Hidden>
      </Container>
     <ErrorAlert/>
    </div>
  );
});

export default App;

