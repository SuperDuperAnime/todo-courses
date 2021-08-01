import styled, {css} from "styled-components";
import React, {useState} from "react";
import {Categories} from "./Categories/Categories";
import {Search} from "./Search";
import {Card} from "./Card/Cards";

export const Body = ({isMenuOpen}) => {

    return <BodyWrapper>
	   <Panel open={isMenuOpen}>
		  <Categories/>
		  <Search/>
	   </Panel>
	   <Card/>
    </BodyWrapper>
}

const BodyWrapper = styled.div`
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns:minmax(0, auto) 1fr;
`


const Panel = styled.div`
  max-width: 800px;
  width: 60vw;
  height: 100%;
  display: grid;
  background: lightblue;
  grid-template-columns:1fr 1fr;
  transition: all 0.3s;
  @media (max-width: 1365px) {
    transition: all 0.4s;
    width: ${props=>props.open? "100vw": "0vw"};

  }
`
