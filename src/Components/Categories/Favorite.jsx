import styled from "styled-components";
import {Typography} from "../../App";
import store from "../../store/store";
import {observer} from "mobx-react-lite";

export const Favorite = observer(() => {
    return <FavoriteWrapper onClick = {() => store.setCategory('favorite')} isFocus = {store.category == 'favorite'}>
	   <Typography>Favorite</Typography>
    </FavoriteWrapper>
})

const FavoriteWrapper = styled.div`
  position: relative;
  height: 64px;
  margin: 0.5rem;
  background-color: ${props => props.isFocus ? 'red' : null};
`
