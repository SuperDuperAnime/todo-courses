import styled from "styled-components";
import React from "react";
import {NavCategories} from "./NavCategories";

export const Body = () => {
    return <BodyWrapper>
	   <NavCategories/>
	   <Content>
		  <Search/>
		  <Card/>
	   </Content>

    </BodyWrapper>
}

const BodyWrapper = styled.div`
  height: 100%;
  width: 100%;
  background: lightblue;
  display: grid;
  grid-template-columns:minmax(0, auto) 1fr;`


const Content = styled.div`
  width: 100%;
  height: 100%;
  background: aqua;
  display: grid;
  grid-template-columns:3fr 7fr;
`

const Search = () => {
    return <SearchWrapper>

    </SearchWrapper>
}
const SearchWrapper = styled.div`

  background: coral`


const Card = () => {
    return <CardWrapper>

    </CardWrapper>
}
const CardWrapper = styled.div`
  background: green`