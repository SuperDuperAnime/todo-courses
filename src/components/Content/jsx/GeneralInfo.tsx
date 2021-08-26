import React from "react";
import { CardMedia, Fab, Hidden, makeStyles } from "@material-ui/core";
import Typography from "@material-ui/core/Typography";

export interface GeneralInfoProp {
  img: string;
  title: string;
  favoriteIcon: JSX.Element;
  toggleFavorite: () => void;
}
const useStyle = makeStyles({
  generalInfo: {
    display: "flex",
    height: "25vh",
  },
  img: {
    height: "25vh",
    width: "16vh",
    minHeight: "25vh",
    minWidth: "16vh",
    borderRadius: 20,
  },
  block: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
    alignItems: "stretch",
    position: "relative",
    overflow: "hidden",
  },
  title: {
    flexGrow: 1,
    overflow: "hidden",
    margin: 4,
  },
  fabButton: {
    position: "absolute",
    right: 16,
    bottom: 16,
  },
});
export const GeneralInfo = ({
  img,
  title,
  favoriteIcon,
  toggleFavorite,
}: GeneralInfoProp) => {
  const classes = useStyle();
  return (
    <div className={classes.generalInfo}>
      <CardMedia image={img} className={classes.img} />
      <div className={classes.block}>
        <Hidden smUp>
          <Typography
            className={classes.title}
            variant={"body1"}
            component={"h3"}
          >
            {title}
          </Typography>
        </Hidden>
        <Hidden xsDown>
          <Typography className={classes.title} variant={"h4"} component={"h3"}>
            {title}
          </Typography>
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
    </div>
  );
};
