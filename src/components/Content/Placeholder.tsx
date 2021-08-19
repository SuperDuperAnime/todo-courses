import React from "react";
import { Box, makeStyles } from "@material-ui/core";
import { colors } from "../../store/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    width: "100%",
    maxWidth: "100%",
    height: "calc(100% - 32px)",
    margin: 8,
    background: colors.tertiaryBG,
  },
}));

export const Placeholder = () => {
  const classes = useStyles();
  return <Box className={classes.root}></Box>;
};
