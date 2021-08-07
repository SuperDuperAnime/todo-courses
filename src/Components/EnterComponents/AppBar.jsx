import React from 'react';
import {Box} from "rebass/styled-components"
import ninja from "../../ninja.svg";
import styled from "styled-components";
import store from "../../store/store";
import {observer} from "mobx-react-lite";
import layoutStore from "../../store/layoutStore";
import {Input} from "../Input";


export const AppBar = observer( ({setIsMenuOpen}) => {
    return (
	   <Box width={"100%"} style={{zIndex: "9999"}} height={"100%"} bg={'red'}>
		  <AppBarWrapper>
			 <Icon src={ninja} width={"64px"} />
			 <Toolbar>
				<Input  hideLG hideMD/>
			 </Toolbar>
		  </AppBarWrapper>
	   </Box>

    );
});
const AppBarWrapper = styled.div`
  height: 100%;
  background: lightcoral;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 2rem`

const Toolbar = styled.div`
  flex-grow: 1;
    display: flex;
  justify-content: flex-end;

`
const Icon = styled.div`
  height: ${props => props.width|| "auto"};
  width: ${props => props.width || 'auto'};
  background: url(${props => props.src});
  background-size: cover;
  border: 2px solid black;
  border-radius: 50%;`
