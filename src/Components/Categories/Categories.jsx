import styled from "styled-components";
import {Typography} from "../../App";
import {observer} from "mobx-react-lite";

export const Categories = observer(() => {

	   return <CategoriesWrapper>
		  <CategoryItem>
			 <Typography> Hentai</Typography>
		  </CategoryItem>
		  <CategoryItem>
			 <Typography> Characters</Typography>
		  </CategoryItem>
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