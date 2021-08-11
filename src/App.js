import React, {useEffect, useState} from 'react'
import './norm.css'
import styled from "styled-components";
import store from "./store/store";
import {observer} from "mobx-react-lite";
import {Box, Button, ButtonGroup, Container, CssBaseline, makeStyles, Grid, colors, Hidden} from "@material-ui/core";
import {Appbar} from "./newComponents/AppBar/AppBar";
import layoutStore from "./store/layoutStore";
import {Results} from "./newComponents/Results/Results";
import {Content} from "./newComponents/Content/Content";
import {blockStatement} from '@babel/types';
import {Category} from "./newComponents/Category/Category";
import {ContentContainer} from "./newComponents/Content/ContentContainer";
import {MobPanel} from "./newComponents/MobPanel";


const useStyles = makeStyles((theme) => ({
    root: {
	   display: "flex",
	   position: "relative",
	   width: "100vw",
	   height: "100vh",
	   maxHeight: '100vh',
	   background: "linear-gradient(315deg, #FFDEE9 0%, #B5FFFC 100%)",
	   flexDirection: "column",
    },
    container: {
        position: "relative",
	   display: "flex",
	   flexGrow: 1,
    },

    button: {
	   display: "flex",
	   direction: "column",
	   width: "100%"
    },
    contentWrapper:{
        flexGrow:1,
        background: "transparent",
   }

}))
const App = observer(() => {
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
<Hidden>
    <MobPanel smDown/>
</Hidden>
		  <Container maxWidth="lg" className={classes.container}>
			 <Hidden smDown>
				<Category/>
			 </Hidden>
			 <Hidden xsDown>
			 <Results/>
			 </Hidden>
			 <Box className={classes.contentWrapper}>
			 {layoutStore.activeView === 'content' ?
				<ContentContainer/> : <div>когда карточка не отображается ты можешь меня увидеть</div>}
			 </Box>
		  </Container>

	   </div>

    );
})

export default App;

export const Typography = styled.div`

  font-size: ${props => props.fontSize || "40px"};
  font-family: Roboto;
  cursor: pointer;
  font-weight: ${props => props.fontWeight || "100"};
  color: ${props => props.color || 'rgba(255,255,255,1)'}`

