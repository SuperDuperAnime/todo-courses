import React, { useState } from "react";
import {
  AppBar,
  Container,
  Hidden,
  IconButton,
  makeStyles,
  Toolbar,
  Typography,
} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import LayoutStore from "../../store/LayoutStore";
import {colors} from "../../store/colors";


const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: "64px",
    display: "flex",
    background: colors.secondFill,
  },
  toolbar: {},
}));

export const Appbar = () => {
  const classes = useStyles();
  return (
    <AppBar
      position={"static"}
      className={classes.wrapper}
      color={"transparent"}
      elevation={8}
    >
      <Container>
        <Toolbar className={classes.toolbar}>
          <Hidden mdUp>
            <IconButton
              onClick={() => {
                LayoutStore.toggleMobPanel(true);
              }}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Typography variant="h5" component="h2" >
            SuperDuperAnime
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
