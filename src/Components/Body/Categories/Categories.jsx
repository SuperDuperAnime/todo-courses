import styled, {css} from "styled-components";
import React from "react";
import {Genre} from "./Genre";
import {Favorite} from "./Favorite";

export const Categories = () => {
    return <CategoriesWrapper>
	   <Favorite/>
	   <Genre/>
    </CategoriesWrapper>
}


const CategoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
`

