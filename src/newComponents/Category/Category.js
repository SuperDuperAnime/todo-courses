import React from 'react';
import store from "../../store/store";
import {observer} from "mobx-react-lite";
import {Box, Button, ButtonGroup, Container, CssBaseline, makeStyles} from "@material-ui/core";


const useStyles = makeStyles((theme) => ({
    root: {
	   //    position: "relative",
	   //    width: "100vw",
	   //    height: "100vh",
	   //    maxHeight: '100vh',
	   //    backgroundColor: "#FFDEE9",
	   //    backgroundImage: " linear-gradient(315deg, #FFDEE9 0%, #B5FFFC 100%)",
	   //    display: "flex",
	   //    flexDirection: "column",
    },
    container: {
	   display: "flex"
    },
    categories: {
	   display: "block",
	   background: "green",
	   height: "100vh",
	   width: "100%",
	   border: "none"

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
export const Category = observer(() => {
    const classes = useStyles()
    const categories = [
	   {value: 'favorite', text: "Favorite"},
	   {value: 'anime', text: "Anime"},
	   {value: 'character', text: "Characters"},
    ]
    const categoriesButton = categories.map(el => {
	  return <Button
		 key={el.value} variant="outlined"
			 className={`${classes.button} ${store.category === el.value ? classes.buttonActive : null}`}
			 onClick={(e) => {
				store.setCategory(el.value)
			 }}>{el.text}</Button>
    })
    return (
	   <div className={classes.root}>
		  <ButtonGroup className={classes.categories}>
			 {categoriesButton}
		  </ButtonGroup>


	   </div>

    );
})

