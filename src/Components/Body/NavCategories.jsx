import styled, {css} from "styled-components";
import React from "react";

export const NavCategories = () => {
    return <NavCategoriesWrapper open={false}>
	   <Favorite/>
	   <Categories/>
    </NavCategoriesWrapper>
}


const NavCategoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: rebeccapurple;
  width: calc(200px + 10vw);
  @media (max-width: 500px) {
    width: 0;
    ${props => props.open && css`
      width: 100vw;`}
  } `


const Favorite = styled.div`
  height: 64px;
  margin: 0.5rem;
  background: whitesmoke;
`
const Categories = () => {
    return <CategoriesWrapper>
	   <CategoriesItem/>
	   <CategoriesItem/>
    </CategoriesWrapper>
}
const CategoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: red;
  height: fit-content;`


const CategoriesItem = styled.div`
  margin: 0.5rem;
  background: blue;
  height: 64px;
`