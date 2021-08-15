import React, {ReactNode} from "react";
import {makeStyles} from "@material-ui/core/styles";
import {Grid, Fab, Box} from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import {observer} from "mobx-react-lite";
import store from "../../../store/store";
import LayoutStore from "../../../store/LayoutStore";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import FavoriteIcon from "@material-ui/icons/Favorite";
import {CardType} from "../../../store/types";

const useStyles = makeStyles({
    root: {
        display: "flex",
        position: "relative",
        width: 244,
        background: "rgba(255,255,255,0.5)",
        // minWidth: 250,
        height: 64,
        cursor: "pointer",
        margin: "8px auto",
    },
    media: {
        border: "1px solid rgba(255,255,255,0.8)",
        width: 56,
        height: 56,
        borderRadius: "100%",
        margin: 4,
    },


    fav: {
        width: 56,
        height: 56,
    },

});

interface ICardSmall {
    textDescription: ReactNode
    img: string
    favorite: JSX.Element | null

    onClick: ()=>void
}

export const CardSmall = observer(
    ({
         img,  favorite, textDescription, onClick
     }: ICardSmall) => {
        const classes = useStyles();


        return (
            <Card
                className={classes.root}
                onClick={onClick}
            >
                <CardMedia
                    className={classes.media}
                    image={img}
                    title="Contemplative Reptile"
                />
                {textDescription}
                <Box className={classes.fav}>{favorite}</Box>
            </Card>
        );
    }
);
