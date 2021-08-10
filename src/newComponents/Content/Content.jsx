import React from 'react';
import {Card, Fab, makeStyles} from "@material-ui/core";
import {observer} from "mobx-react-lite";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardMedia from "@material-ui/core/CardMedia";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import store from "../../store/store";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import layoutStore from "../../store/layoutStore";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';
const useStyles = makeStyles((theme) => ({
    root: {
	   maxWidth: "40%",
    },
    media: {
	   minHeight: 600
    },}))

export const Content = observer((props) => {
    const classes = useStyles()

    const favorite=store.content.isFavorite? <FavoriteIcon/>: <FavoriteBorderIcon/>
    console.log(favorite)
	   return (
	   <Card className={classes.root}>
		  <Fab color="primary" onClick={()=>{
			 layoutStore.toggleActiveView("results")
		  }}>
			 <ArrowBackIcon/>
		  </Fab>
		  <Fab onClick={() => store.setFavorite()}>
			 {favorite}
		  </Fab>
		  <CardActionArea>

			 <CardMedia
				className={classes.media}
				image={store.content.image_url}
				title="Contemplative Reptile"
			 />
			 <CardContent>
				<Typography gutterBottom variant="h5" component="h2">
				    {store.content.title || store.content.name}
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p">
				    {store.content.synopsis || store.content.alternative_names}
				</Typography>
			 </CardContent>
		  </CardActionArea>
	   </Card>
    );
})