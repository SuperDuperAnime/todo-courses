import React from "react";
import { Box, Hidden, makeStyles, SwipeableDrawer } from "@material-ui/core";
import LayoutStore from "../store/LayoutStore";
import { observer } from "mobx-react-lite";
import { Category } from "./Category/Category";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "fit-content",
  },
  container: {
    background: "rgba(65, 94, 127, 1)",
    padding: "60px 8px",
    height: "100vh",
    display: "flex",
    alignItems: "stretch",
  },
}));

export const MobPanel = observer(() => {
  const classes = useStyles();
  return (
    <SwipeableDrawer
      anchor={"left"}
      open={LayoutStore.mobPanel}
      onClose={() => {
        LayoutStore.toggleMobPanel(false);
      }}
      onOpen={() => {
        LayoutStore.toggleMobPanel(true);
      }}
      className={classes.root}
    >
      <Box className={classes.container}>
        <Hidden mdUp>
          <Category />
        </Hidden>
      </Box>
    </SwipeableDrawer>
  );
});
