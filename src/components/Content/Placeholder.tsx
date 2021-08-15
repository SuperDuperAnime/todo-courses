import React from "react";
import { Box, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    width: "100%",
    maxWidth: "100%",
    height: "calc(100% - 32px)",
    margin: 8,
    background: "linear-gradient(113.18deg, #FFD3E2 0%, #6FFFF9 100%)",
  },
}));

export const Placeholder = () => {
  const classes = useStyles();
  return <Box className={classes.root}></Box>;
};
