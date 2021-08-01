import styled, {css} from "styled-components";
import React from "react";
import {Categories} from "./Categories/Categories";
import {Search} from "./Search";
import {Card} from "./Card/Cards";

export const Body = () => {
    return <BodyWrapper>
	   <Panel open={false}>
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
  @media (max-width: 1365px) {
    width: 0;
    ${props => props.open && css`
      width: 100vw;`}
  }
`
