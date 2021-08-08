import styled from "styled-components";
import {Typography} from "../../App";
import {observer} from "mobx-react-lite";
import store from "../../store/store"
import {Favorite} from "./Favorite"

export const Categories = observer((props) => {
		const arr = ['anime', 'character']
	   return <CategoriesWrapper {...props}>
	   <Favorite/>
	   {arr.map(item => {
			return <CategoryItem onClick = {() => store.setCategory(item)} isFocus = {store.category == item} key = {item}>
			 	<Typography> {item[0].toUpperCase() + item.slice(1)}</Typography>
		  </CategoryItem>
	   })}

	   </CategoriesWrapper>
    }
)


const CategoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;
`


const CategoryItem = styled.div`
	position: relative;
  margin: 0.5rem;
  height: 64px;
  background-color: ${props => props.isFocus ? 'red' : null};
`