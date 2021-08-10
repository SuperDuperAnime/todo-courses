import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { Grid, Fab} from "@material-ui/core";
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
		position: "relative",
	   maxWidth: 300,
	  // minWidth: 250,
	   height: 70,
	   cursor: "pointer"
    },
    card: {
		position: "relative",
	   height: '100%',
	   
    },
    media: {
	//	position: "absolute",
	   height: "50px",
	   borderRadius: "100%",
	   
    },
    textWrapper: {
	   height: 120,
	   maxHeight: 120,
	   width: '100%',
	   maxWidth: '100%',
    },
    title: {},
    subtitle: {
	   width: '100%',
	   maxWidth: '100%',
    },
});

export const CardSmall = observer(({img, title, subtitle, isFavorite, card}) => {
    const classes = useStyles();
	const favorite= isFavorite ? <FavoriteIcon/>: <FavoriteBorderIcon/>
    return (
	   <Card className={classes.root}>
		  <Grid container spacing={3} className={classes.card} onClick={() => {
			 store.setContent(card)
			 layoutStore.toggleActiveView('content')
		  }}>
		  	<Grid item xs={3}>
			 <CardMedia
				className={classes.media}
				image={img}
				title="Contemplative Reptile"
			 />
			 </Grid>
			 <Grid item xs={6}>
			 <CardContent className={classes.textWrapper}>
				<Typography gutterBottom variant="h5" component="h2">
				    {title}
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p" className={classes.subtitle}>
				    {subtitle}
				</Typography>
			 </CardContent>
			 </Grid>

			 <Grid item xs={3}>
			 <Fab >
			 	{favorite}
		  		</Fab>
				</Grid>
		  </Grid>
	   </Card>
    );
})