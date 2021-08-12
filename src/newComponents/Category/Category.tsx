import React from 'react';
import store from "../../store/store";
import {observer} from "mobx-react-lite";
import {Box, Button, ButtonGroup, Container, CssBaseline, makeStyles, Paper, } from "@material-ui/core";
import {CategoriesType} from "../../store/types";


const useStyles = makeStyles((theme) => ({
    root: {
	width:"150px",
	   margin: 8,
	   background: 'linear-gradient(246.82deg, #FFCADC 0%, #C8FFFD 58.33%)',
	   height: "calc(100vh - 96px)"
    },
    rootRow: {
        width: 280
    },
    container: {
	   display: "flex"
    },
    categories: {
	   display: "flex",
	   height: "100%",
	   width: "100%",
	   border: "none",
	   flexDirection: "column"

    },
    categoriesRow:{
      flexDirection: "row",
    },

    button: {
	   width: "100%",
	   "&:hover": {
		  backgroundColor: "rgba(0, 0, 0, .35)"
	   }
    },
    buttonActive: {
	   backgroundColor: "rgba(0, 0, 0, .35)",

    }


}))
export const categories:{value: CategoriesType, text: string}[] = [
    {value: 'favorite', text: "Favorite"},
    {value: 'anime', text: "Anime"},
    {value: 'character', text: "Characters"},
]
export const Category = observer(() => {
    const classes = useStyles()

    const categoriesButton = categories.map(el => {
	  return <Button
		 key={el.value} variant="outlined"
			 className={`${classes.button} ${store.category === el.value ? classes.buttonActive : null}`}
			 onClick={(e) => {
				store.setCategory(el.value)
			 }}>{el.text}</Button>
    })
    return (
	   <Paper className={classes.root}>
		  <ButtonGroup className={classes.categories}>
			 {categoriesButton}
		  </ButtonGroup>


	   </Paper>

    );
})

