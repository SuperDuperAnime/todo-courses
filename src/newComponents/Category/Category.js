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
    active: {
        width: "100%",
        backgroundColor: "rgba(0, 0, 0, .35)",
        "&:hover": {
            backgroundColor: "rgba(0, 0, 0, .35)",
        }
    }


}))
export const Category = observer(() => {
    const classes = useStyles()

    return (
	   <div className={classes.root}>
			 <ButtonGroup className={classes.categories}>
				<Button variant="outlined"
                        className={store.category === "favorite" ?  classes.active : classes.button}
					   onClick={(e) => {
						  store.setCategory("favorite")
					   }}>Favorite</Button>
				<Button variant="outlined"
                className={store.category === "anime" ?  classes.active : classes.button}
					   onClick={(e) => {
						  store.setCategory('anime')
					   }}>Anime</Button>
				<Button variant="outlined"
                className={store.category === "character" ?  classes.active : classes.button}
					   onClick={(e) => {
						  store.setCategory('character')
					   }}>Characters</Button>
			 </ButtonGroup>


	   </div>

    );
})

