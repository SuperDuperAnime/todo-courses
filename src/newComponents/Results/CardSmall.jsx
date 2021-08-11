import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {Grid, Fab, Box} from "@material-ui/core";
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {observer} from "mobx-react-lite";
import store from "../../store/store";
import layoutStore from "../../store/layoutStore";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';

const useStyles = makeStyles({
    root: {
	   display: "flex",
	   position: "relative",
	   width: 244,
	   background: 'rgba(255,255,255,0.5)',
	   // minWidth: 250,
	   height: 64,
	   cursor: "pointer",
	   margin: "8px auto"
    },
    media: {
        border: "1px solid rgba(255,255,255,0.8)",
	   width: 56,
	   height: 56,
	   borderRadius: "100%",
	   margin: 4

    },
    textWrapper: {
	   width: 144,
	   height: 64,
	   display: "flex",
	   flexDirection: "column",
	   justifyContent: "space-evenly",
	   overflow: "hidden",
	   padding: 0
    },
    title: {
	   width: 144,
	   height: 28,
	   overflow: "hidden",
	   textOverflow: "ellipsis",
	   padding: '0 4px'
    },
    subtitle: {
	   width: 144,
	   height: 36,
	   overflow: "hidden",
	   textOverflow: "ellipsis",
	   padding: '0 4px'
    },
    fav: {
	   width: 56,
	   height: 56,
    },
    onlyTitle: {
	   width: 164,
	   height: 64,
	   overflow: "hidden",
	   textOverflow: "ellipsis",
	   padding: '0 4px'
    }
});

export const CardSmall = observer(({img, title, subtitle, isFavorite, card, category}) => {
    const classes = useStyles();
    const favorite = isFavorite ? <FavoriteIcon style={{fontSize: 54}}/> : <FavoriteBorderIcon style={{fontSize: 54}}/>

    const text = category === 'anime' ? <>
	   <Typography gutterBottom variant="button" component="h2" className={classes.title}>
		  {title}
	   </Typography>
	   <Typography variant="body2" color="textSecondary" component="p" className={classes.subtitle}>
		  {subtitle}
	   </Typography>
    </> : <Typography gutterBottom variant="h5" component="h2" className={classes.onlyTitle}>
	   {title}
    </Typography>
    return (
	   <Card className={classes.root} onClick={() => {
		  store.setContent(card)
		  layoutStore.toggleActiveView('content')
	   }}>
		  <CardMedia
			 className={classes.media}
			 image={img}
			 title="Contemplative Reptile"
		  />
		  <CardContent className={classes.textWrapper}>
			 {text}
		  </CardContent>
		  <Box className={classes.fav}>
			 {favorite}
		  </Box>

	   </Card>
    );
})