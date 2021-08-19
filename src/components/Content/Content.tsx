import React, {ReactElement} from "react";
import {
    Card,
    Fab,
    makeStyles,
    Grid,
    Box,
    colors,
    Paper, SvgIconTypeMap,
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
import classes from "./Content.module.css";
import {OverridableComponent} from "@material-ui/core/OverridableComponent";

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
    favoriteIcon:  JSX.Element;
    children: JSX.Element
}

export const Content = observer(
    ({
         title,
        favoriteIcon,
         children
     }: IContent) => {

        return (
            <Paper className={classes.root}>
                <Box className={classes.contentWrapper}>
                    <Paper className={classes.header}>
                        <Hidden  smUp>
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
                            className={classes.headerTitle}
                            variant={"h5"}
                            component={'h3'}
                        >
                            {title}
                        </Typography>
                    </Paper>
                    {children}
                </Box>
            </Paper>
        );
    }
);