import React from "react";
import { Backdrop, Box, CircularProgress, makeStyles } from "@material-ui/core";
import { observer } from "mobx-react-lite";

interface LoaderProp {
  children?: React.ReactNode;
}

const useStyle = makeStyles({
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
export const Loader = observer(({ children }: LoaderProp) => {
  const classes = useStyle();
  return (
    <Box className={classes.loader}>
      <Backdrop className={classes.backdrop} open={true}>
        <CircularProgress />
      </Backdrop>
    </Box>
  );
});
