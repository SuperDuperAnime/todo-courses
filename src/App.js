import React from 'react'
import styled from "styled-components";
import ninja from './ninja.svg'


function App() {
    return (
	   <AppWrapper>
		  <Header/>
		  <Body/>
	   </AppWrapper>
    );
}

export default App;


const AppWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  display: grid;
  grid-template-rows: 15fr 85fr`


const Header = () => {
    return <HeaderWrapper>
	   <Icon src={ninja}/>
	   <AppTitle> ANIME APP</AppTitle>
    </HeaderWrapper>
}

const HeaderWrapper = styled.div`
  height: 100%;
  width: 100%;
  background: lightcoral;
  display: flex;
  align-items: center;
  padding: 0 2rem`


const AppTitle = styled.div`
  font-size: 40px;
  font-family: Roboto, serif;
  font-weight: 600;
  margin-left: 2rem;
  flex-grow: 1;
`
const Icon = styled.img`
  width: ${props => props.width || '64px'};
  height: ${props => props.width || "64px"};
  border: 4px solid black;
  padding: 0.5rem;
  border-radius: 50%;`


const Body = () => {
    return <BodyWrapper>
	   <NavCategories/>
	   <Search/>
	   <Card/>
    </BodyWrapper>
}

const BodyWrapper = styled.div`
  height: 100%;
  width: 100%;
  background: lightblue;
  display: grid;
  grid-template-columns:15fr 25fr 60fr;`

const NavCategories = () => {
    return <NavCategoriesWrapper>
	   <Favorite/>
	   <Categories/>
    </NavCategoriesWrapper>
}
const NavCategoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background: rebeccapurple;`


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
  height: 64px;`

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