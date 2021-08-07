import styled from "styled-components";
import {Typography} from "../../App";
import {observer} from "mobx-react-lite";
import store from "../../store/store"
import {Favorite} from "./Favorite"

export const Categories = observer(() => {
		const arr = ['anime', 'characters']
	   return <CategoriesWrapper>
	   <Favorite/>
	   {arr.map(item => {
			return <CategoryItem key = {item}>
			 	<Typography onClick = {() => store.setCategory(item)}> {item[0].toUpperCase() + item.slice(1)}</Typography>
		  </CategoryItem>
	   })}
	   </CategoriesWrapper>
    }
)


const CategoriesWrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: fit-content;`


const CategoryItem = styled.div`
  margin: 0.5rem;
  height: 64px;
`