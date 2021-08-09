import React, {useEffect, useState} from 'react'
import './norm.css'
import styled from "styled-components";
import store from "./store/store";
import {observer} from "mobx-react-lite";
import {CssBaseline, makeStyles} from "@material-ui/core";
import {Appbar} from "./REFACTOR/AppBar";
import {Body} from "./REFACTOR/Body";


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
    flexWrapper: {
	   position: "relative",
	   display: "flex",
	   width: "100vw",
	   maxHeight: '100%',
	   flexGrow: 1,
    },
    navSpace: {},

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
		  <Appbar />
		  <div className={classes.flexWrapper}>
			 <Body />
		  </div>


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