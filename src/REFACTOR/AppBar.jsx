import React, {useState} from 'react';
import {AppBar, Box, Divider, IconButton, Input, makeStyles, Paper, Toolbar} from "@material-ui/core";
import MenuIcon from "@material-ui/icons/Menu";
import styled from "styled-components";
import SearchIcon from '@material-ui/icons/Search';
import {Modal} from "./Modal";

const useStyles = makeStyles((theme) => ({
    wrapper: {
	   backgroundImage: "linear-gradient(45deg, rgba(255,162,227,0.77) 0%, rgba(166,193,238,0.5) 100%)",
	   backdropFilter: "blur(10px)"
    },


}))

export const Appbar = () => {
    const classes = useStyles()
    return (
	   <AppBar position={"static"} className={classes.wrapper} color={'transparent'} elevation={0}>
		  <Toolbar >
			 <h1 >Anime</h1>
			 <Modal/>
		  </Toolbar>
		  <Divider/>
	   </AppBar>
    )
}
