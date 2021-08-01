import styled from "styled-components";
import ninja from "../../ninja.svg";
import React from "react";


export const Header = () => {
    return <HeaderWrapper>
	   <Icon src={ninja}/>
	   <AppTitle> ANIME APP</AppTitle>
    </HeaderWrapper>
}

const HeaderWrapper = styled.div`
  height: 100%;

  background: lightcoral;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  padding: 0 2rem`


const AppTitle = styled.div`
  font-size: calc(20px + 3vw);
  font-family: Roboto, serif;
  font-weight: 600;
  margin-left: 2rem;
`
const Icon = styled.img`
  width: ${props => props.width || 'calc(44px + 3vw)'};
  height: ${props => props.width || "calc(44px + 3vw)"};
  border: 4px solid black;
  padding: 0.5rem;
  border-radius: 50%;`
