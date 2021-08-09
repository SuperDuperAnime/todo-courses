import styled from "styled-components";
import {Typography} from "../../App";
import {observer} from "mobx-react-lite";
import store from "../../store/store"
import {Favorite} from "./Favorite"
import layoutStore from "../../store/layoutStore";

export const Categories = observer((props) => {
	   const arr = ['anime', 'character']
	   return <CategoriesWrapper {...props}  >
		  <Favorite/>
		  {arr.map(item => {
			 return <CategoryItem onClick={(e) => {
				store.setCategory(item)
			 }}
							  key={item}>
				<Typography> {item[0].toUpperCase() + item.slice(1)}</Typography>
			 </CategoryItem>
		  })}

	   </CategoriesWrapper>
    }
)


const CategoriesWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  height: fit-content;

`


const CategoryItem = styled.div`
  margin: 0.5rem;
  height: 64px;
`