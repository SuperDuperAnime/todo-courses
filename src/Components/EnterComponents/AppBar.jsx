import React from 'react';
import {Box} from "rebass/styled-components"
import ninja from "../../ninja.svg";
import styled from "styled-components";

export const AppBar = ({setIsMenuOpen}) => {
    return (
	   <Box width={"100%"} height={"100%"} bg={'red'}>
		  <AppBarWrapper>
			 <Icon src={ninja} width={"64px"} onClick={() => {
				setIsMenuOpen(prev => !prev)
			 }}/>
			 <AppTitle> ANdwadawME APP</AppTitle>
		  </AppBarWrapper>
	   </Box>

    );
};
const AppBarWrapper = styled.div`
  height: 100%;
  background: lightcoral;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 2rem`

const AppTitle = styled.div`
  font-size: calc(20px + 2vw);
  font-family: Roboto, serif;
  font-weight: 600;
  margin-left: 2rem;
`
const Icon = styled.div`
  height: ${props => props.width|| "auto"};
  width: ${props => props.width || 'auto'};
  background: url(${props => props.src});
  background-size: cover;
  border: 2px solid black;
  border-radius: 50%;`
