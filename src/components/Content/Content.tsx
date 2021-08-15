import React from "react";
import {
  Card,
  Fab,
  makeStyles,
  Grid,
  Box,
  colors,
  Paper,
} from "@material-ui/core";
import { observer } from "mobx-react-lite";
import Typography from "@material-ui/core/Typography";
import { Hidden} from "@material-ui/core";
import store from "../../store/store";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import LayoutStore from "../../store/LayoutStore";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { CategoriesType } from "../../store/types";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    width: "100%",
    maxWidth: "100%",
    height: "calc(100% - 32px)",
    margin: 8,
    background: "linear-gradient(113.18deg, #FFD3E2 0%, #6FFFF9 100%)",
  },
  contentWrapper: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "start",
    alignItems: "center",
    maxHeight: "calc(100% - 32px)",
    overflowY: "auto",
  },
  header: {
    display: "flex",
    background: "linear-gradient(113.18deg, #FFD3E2 0%, #6FFFF9 100%)",
    width: "100%",
    padding: 4,
    alignItems: "center",
  },
  img: {
    height: "300px",
    float: "left",
    margin: 8,
  },
  title: {
    flexGrow: 1,
    textAlign: "left",
    textOverflow: "ellipsis",
  },
  subtitle: {
    width: "100%",
  },
  fab: {
    minWidth: 40,
    minHeight: 40,
    maxWidth: 40,
    maxHeight: 40,
    margin: 4,
  },
}));

interface IContent {
  title?: string;
  prefixTitle: string;
  subtitle?: string | string[];
  prefixSubtitle: string;
  favoriteIcon: JSX.Element;
  img?: string;
}

export const Content = observer(
  ({
    title,
    prefixTitle,
    subtitle,
    prefixSubtitle,
    favoriteIcon,
    img,
  }: IContent) => {
    const classes = useStyles();
    return (
      <Paper className={classes.root}>
        <Box className={classes.contentWrapper}>
          <Paper className={classes.header}>
            <Hidden mdUp smUp> 
                <Fab
                  className={classes.fab}
                  color="primary"
                  onClick={() => { 
                    LayoutStore.toggleActiveView("results");
                  }}
                >
                  <ArrowBackIcon />
                </Fab>
            </Hidden>
                <Fab className={classes.fab} onClick={() => store.setFavorite()}>
                  {favoriteIcon}
                </Fab>

            <Typography
              className={classes.title}
              variant={"h4"}
              component={"h2"}
            >
              {title}
            </Typography>
          </Paper>
          <Typography
            className={classes.subtitle}
            variant={"body1"}
            component={"p"}
          >
            <img className={classes.img} alt={"#"} src={img} />
            {prefixTitle}: {title} <br />
            {prefixSubtitle}: {subtitle}
          </Typography>
        </Box>
      </Paper>
    );
  }
);
