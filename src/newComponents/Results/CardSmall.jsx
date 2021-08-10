import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
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

const useStyles = makeStyles({
    root: {
	   maxWidth: 250,
	   minWidth: 250,
	   height: 450,
	   margin: '0 auto',
    },
    card: {
	   display: "flex",
	   flexDirection: "column",
	   height: '100%',
    },
    media: {
	   width: "100%",
	   flexGrow: 1,
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

    return (
	   <Card className={classes.root}>
		  <CardActionArea className={classes.card} onClick={() => {
			 store.setContent(card)
			 layoutStore.toggleActiveView('content')
		  }}>
			 <CardMedia
				className={classes.media}
				image={img}
				title="Contemplative Reptile"
			 />
			 <CardContent className={classes.textWrapper}>
				<Typography gutterBottom variant="h5" component="h2">
				    {title}
				</Typography>
				<Typography variant="body2" color="textSecondary" component="p" className={classes.subtitle}>
				    {subtitle}
				</Typography>
			 </CardContent>
		  </CardActionArea>
	   </Card>
    );
})