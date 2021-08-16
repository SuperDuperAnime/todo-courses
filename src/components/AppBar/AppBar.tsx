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


const useStyles = makeStyles((theme) => ({
  wrapper: {
    height: "64px",
    display: "flex",
    background: "rgba(130, 188, 255, 1)",
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
      elevation={0}
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
