import React from 'react';
import {Card, Fab, makeStyles, Grid, Box, colors} from "@material-ui/core";
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
import styled from "styled-components";

const useStyles = makeStyles((theme) => ({
    root: {
	   maxWidth: "100%",
	   height: "100%",
    },
    contentWrapper: {
	   display: "flex",
	   flexDirection: "column",
	   justifyContent: "center",
	   alignItems: "center",

    },
    header: {
	   display: "flex",
	   background: colors.teal.A100,
	   width: "100%",
	   padding: 4,
	   alignItems:"center",
    },
    img: {
	   height: "300px",
	   float: "left",
	   margin: 8,
    },
    title: {
	   flexGrow: 1,
	   textAlign: "center"
    },
    subtitle: {
	   width: "100%",
    },

}))

export const Content = observer((props) => {
    const classes = useStyles()

    const favorite = store.content.isFavorite ? <FavoriteIcon/> : <FavoriteBorderIcon/>
    console.log(favorite)
    return (
	   <Box className={classes.root}>
		  <Box className={classes.contentWrapper}>
			 <Box className={classes.header}>


				<Fab color="primary" onClick={() => {
				    layoutStore.toggleActiveView("results")
				}}><ArrowBackIcon/>
				</Fab>
				<Fab onClick={() => store.setFavorite()}>
				    {favorite}
				</Fab>


				<Typography className={classes.title} variant={'h4'}
						  component={'h2'}>
				    {store.content.title || store.content.name}
				</Typography>


			 </Box>
			 <Typography className={classes.subtitle} variant={'body1'} component={'p'}>
				<img className={classes.img}
					alt={'#'}
					src={store.content.image_url}/>
				Name: {store.content.title || store.content.name} <br/>
				Description: {store.content.synopsis || store.content.alternative_names}
			 </Typography>
		  </Box>
	   </Box>
    );
})
