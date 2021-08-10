import React from 'react';
import {Box, makeStyles} from "@material-ui/core";
import layoutStore from "../store/layoutStore";
import {Results} from "./Results/Results";
import {Content} from "./Content/Content";
import {observer} from "mobx-react-lite";


const useStyles = makeStyles((theme) => ({
    viewer: {
	   flexGrow: 1,
	   padding: 20
    },
}))

export const Viewer = observer(() => {
    const classes = useStyles()
    const viewer = layoutStore.activeView === 'results' ? <Results/> : layoutStore.activeView === 'content' ?
	   <Content/> : null
    return (
	   <Box className={classes.viewer}>
		  {viewer}
	   </Box>
    );
})