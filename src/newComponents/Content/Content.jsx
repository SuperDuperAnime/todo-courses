import React from 'react';
import {Card, Fab, makeStyles, Grid, Box, colors, Paper} from "@material-ui/core";
import {observer} from "mobx-react-lite";
import Typography from "@material-ui/core/Typography";
import store from "../../store/store";
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import layoutStore from "../../store/layoutStore";
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import FavoriteIcon from '@material-ui/icons/Favorite';


const useStyles = makeStyles((theme) => ({
    root: {
	   maxWidth: "100%",
	   height: "calc(100% - 16px)",
	   margin: 8,
	   background: "linear-gradient(113.18deg, #FFD3E2 0%, #6FFFF9 100%)",

    },
    contentWrapper: {
	   display: "flex",
	   flexDirection: "column",
	   justifyContent: "center",
	   alignItems: "center",

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
	   textAlign: "center"
    },
    subtitle: {
	   width: "100%",
    },
    fab:{
        width:48,
	   height:48,
	   margin: 6
    }

}))

export const Content = observer(({title, prefixTitle, subtitle, prefixSubtitle, img}) => {
    const classes = useStyles()

    const favorite = store.content.isFavorite ? <FavoriteIcon/> : <FavoriteBorderIcon/>
    console.log(favorite)
    return (
	   <Paper className={classes.root}>
		  <Box className={classes.contentWrapper}>
			 <Paper className={classes.header}>


				<Fab className={classes.fab} color="primary" onClick={() => {
				    layoutStore.toggleActiveView("results")
				}}><ArrowBackIcon/>
				</Fab>
				<Fab className={classes.fab} onClick={() => store.setFavorite()}>
				    {favorite}
				</Fab>


				<Typography className={classes.title} variant={'h4'}
						  component={'h2'}>
				    {title}
				</Typography>


			 </Paper>
			 <Typography className={classes.subtitle} variant={'body1'} component={'p'}>
				<img className={classes.img}
					alt={'#'}
					src={store.content.image_url}/>
				{prefixTitle}: {title} <br/>
				{prefixSubtitle}: {subtitle}
			 </Typography>
		  </Box>
	   </Paper>
    );
})
