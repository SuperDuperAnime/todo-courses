import React from "react";
import { Fab, Hidden, makeStyles } from "@material-ui/core";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

export interface FooterProp {
  favoriteIcon: JSX.Element;
  toggleFavorite: () => void;
  toggleContent: () => void;
}

const useStyle = makeStyles({
  footer: {
    display: "flex",
    justifyContent: "space-around",
    background: "rgba(0,0,0,0.1)",
    borderBottomRightRadius: 10,
    borderBottomLeftRadius: 10,
    height: 60,
  },
  fab: {},
  fabButton: {},
});
export const Footer = ({
  favoriteIcon,
  toggleFavorite,
  toggleContent,
}: FooterProp) => {
  const classes = useStyle();
  return (
    <div className={classes.footer}>
      <Hidden smUp>
        <Fab
          className={classes.fab}
          style={{ minHeight: "40px", minWidth: "40px" }}
          color="primary"
          onClick={() => {
            toggleContent();
          }}
        >
          <ArrowBackIcon />
        </Fab>
        <Fab
          className={classes.fabButton}
          color="secondary"
          aria-label="edit"
          onClick={() => toggleFavorite()}
        >
          {favoriteIcon}
        </Fab>
      </Hidden>
    </div>
  );
};
