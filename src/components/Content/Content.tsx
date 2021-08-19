import React from "react";
import { Box, Fab, Hidden } from "@material-ui/core";
import { observer } from "mobx-react-lite";
import Typography from "@material-ui/core/Typography";
import store from "../../store/store";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import LayoutStore from "../../store/LayoutStore";
import classes from "./Content.module.css";

// interface IContent {
//   title?: string;
//   prefixTitle: string;
//   subtitle?: string | string[];
//   prefixSubtitle: string;
//   favoriteIcon: JSX.Element;
//   img?: string;
// }

// export const Content = observer(
//     ({
//          title,
//          prefixTitle,
//          subtitle,
//          prefixSubtitle,
//          favoriteIcon,
//          img,
//      }: IContent) => {
//
//         return (
//             <Paper className={classes.root}>
//                 <Box className={classes.contentWrapper}>
//                     <Paper className={classes.header}>
//                         <Hidden mdUp smUp>
//                             <Fab
//                                 className={classes.fab}
//                                 color="primary"
//                                 onClick={() => {
//                                     LayoutStore.toggleActiveView("results");
//                                 }}
//                             >
//                                 <ArrowBackIcon />
//                             </Fab>
//                         </Hidden>
//                         <Fab className={classes.fab} onClick={() => store.setFavorite()}>
//                             {favoriteIcon}
//                         </Fab>
//
//                         <Typography
//                             className={classes.title}
//                             variant={"h4"}
//                             component={"h2"}
//                         >
//                             {title}
//                         </Typography>
//                     </Paper>
//                     <Typography
//                         className={classes.subtitle}
//                         variant={"body1"}
//                         component={"p"}
//                     >
//                         <img className={classes.img} alt={"#"} src={img} />
//                         {prefixTitle}: {title} <br />
//                         {prefixSubtitle}: {subtitle}
//                     </Typography>
//                 </Box>
//             </Paper>
//         );
//     }
// );
interface IContent {
  title: string;
  favoriteIcon: JSX.Element;
  children: JSX.Element;
}

export const Content = observer(
  ({ title, favoriteIcon, children }: IContent) => {
    return (
      <Box className={classes.root}>
        <Box className={classes.contentWrapper}>
          <Box className={classes.header}>
            <Hidden smUp>
              <Fab
                className={classes.fab}
                style={{ minHeight: "40px", minWidth: "40px" }}
                color="primary"
                onClick={() => {
                  LayoutStore.toggleActiveView("results");
                }}
              >
                <ArrowBackIcon />
              </Fab>
            </Hidden>
            <Fab
              className={classes.fab}
              style={{ minHeight: "40px", minWidth: "40px" }}
              onClick={() => store.setFavorite()}
            >
              {favoriteIcon}
            </Fab>

            <Typography
              className={classes.headerTitle}
              variant={"h5"}
              component={"h3"}
            >
              {title}
            </Typography>
          </Box>
          {children}
        </Box>
      </Box>
    );
  }
);
