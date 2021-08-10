import React, {useEffect, useState} from 'react'
import './norm.css'
import styled from "styled-components";
import store from "./store/store";
import {observer} from "mobx-react-lite";
import {Box, Button, ButtonGroup, Container, CssBaseline, makeStyles} from "@material-ui/core";
import {Appbar} from "./newComponents/AppBar";
import layoutStore from "./store/layoutStore";
import {Results} from "./newComponents/Results/Results";
import {Content} from "./newComponents/Content/Content";
import {Viewer} from "./newComponents/Viewer";


const useStyles = makeStyles((theme) => ({
    root: {
	   position: "relative",
	   width: "100vw",
	   height: "100vh",
	   maxHeight: '100vh',
	   backgroundColor: "#FFDEE9",
	   backgroundImage: " linear-gradient(315deg, #FFDEE9 0%, #B5FFFC 100%)",
	   display: "flex",
	   flexDirection: "column",
    },
    container: {
	   display: "flex",
	   flexDirection: "column",
	   height: "100%"
    },
    categories: {
	   background: "green"
    },

    button: {},


}))
function App (){
    const classes = useStyles()

    useEffect(() => {
	   setTimeout(() => {
		  store.apiDelay4second()
	   }, 4000)
    }, [store.canIStartSearch]);
    useEffect(() => {
	   store.startProgram();
    }, []);


    return (
	   <div className={classes.root}>
		  <CssBaseline/>
		  <Appbar/>
		  <Container maxWidth="lg" className={classes.container}>
			 <ButtonGroup className={classes.categories}>
				<Button color={store.category === "favorite" ? 'primary' : null} className={classes.button}
					   onClick={(e) => {
						  store.setCategory("favorite")
					   }}>Favorite</Button>
				<Button color={store.category === 'anime' ? 'primary' : null} className={classes.button}
					   onClick={(e) => {
						  store.setCategory('anime')
					   }}>Anime</Button>
				<Button color={store.category === 'character' ? 'primary' : null} className={classes.button}
					   onClick={(e) => {
						  store.setCategory('character')
					   }}>Characters</Button>
			 </ButtonGroup>
			 <Viewer/>
		  </Container>


	   </div>

    );
}

export default App;

export const Typography = styled.div`

  font-size: ${props => props.fontSize || "40px"};
  font-family: Roboto;
  cursor: pointer;
  font-weight: ${props => props.fontWeight || "100"};
  color: ${props => props.color || 'rgba(255,255,255,1)'}`

