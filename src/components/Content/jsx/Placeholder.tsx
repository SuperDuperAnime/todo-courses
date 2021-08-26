import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import { colors } from "../../../store/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: 8,
    width: "calc(100% - 16px)",
    minWidth: 320,
    background: colors.primaryBG,
    height: "calc(100vh - 64px)",
    overflow: "hidden",
    position: "relative",
  },
}));

export const Placeholder = () => {
  const classes = useStyles();
  return <Box className={classes.root} />;
};
