import React from "react";
import { observer } from "mobx-react-lite";
import "./index.css";
import {
  Box,
  Container,
  CssBaseline,
  Hidden,
  makeStyles,
} from "@material-ui/core";
import { Appbar } from "./components/AppBar/AppBar";
import LayoutStore from "./store/LayoutStore";
import { Results } from "./components/Results/Results";
import { Category } from "./components/Category/Category";
import { ContentContainer } from "./components/Content/ContentContainer";
import { MobPanel } from "./components/AppBar/MobPanel";
import { ErrorAlert } from "./components/ErrorAlert";
import { colors } from "./store/colors";
import loaderStore from "./store/loaderStore";
import { LoaderContainer } from "./components/Loader/LoaderContainer";
import { ResultsContainer } from "./components/Results/ResultsContainer";
import store from "./store/store";

const useStyles = makeStyles({
  root: {
    maxHeight: "100vh",
    background: colors.bg,
    color: colors.orange,
    maxWidth: "100vw",
  },
  container: {
    display: "flex",
    justifyContent: "center",
  },

  button: {
    display: "flex",
    flexDirection: "column",
    width: "100%",
  },
  contentWrapper: {
    position: "relative",
    flexGrow: 1,
    height: "calc(100vh - 64px)",
    background: "transparent",
  },
  backdrop: {
    color: "rgba(0,0,0,0.3)",
  },
  loader: {
    position: "fixed",
    zIndex: 999,
    top: "50%",
    left: "50%",
  },
});
const App = observer(() => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {loaderStore.loading ? <LoaderContainer /> : null}
      <CssBaseline />
      <Appbar />
      <Hidden mdUp>
        <MobPanel />
      </Hidden>
      <Container className={classes.container}>
        <Hidden smDown>
          <Category />
        </Hidden>
        <Hidden xsDown>
          <ResultsContainer />
        </Hidden>
        <Hidden smUp>
          <Box className={classes.contentWrapper}>
            {LayoutStore.isContentOpen ? (
              <ContentContainer />
            ) : (
              <ResultsContainer />
            )}
          </Box>
        </Hidden>
        <Hidden xsDown>
          <ContentContainer />
        </Hidden>
      </Container>
      <ErrorAlert />
    </div>
  );
});

export default App;
