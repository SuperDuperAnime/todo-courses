import styled from "styled-components";
import {Typography} from "../../App";
import store from "../../store/store";
import {observer} from "mobx-react-lite";
import layoutStore from "../../store/layoutStore";

export const Favorite = observer(() => {

    return <FavoriteWrapper onClick={() => {
	   store.setCategory('favorite')
	   layoutStore.setResultsOpen(true)
	   layoutStore.setModalOpen(false)
	   layoutStore.setContentOpen(false)
    }
    }>

	   <Typography>Favorite</Typography>
    </FavoriteWrapper>
})

const FavoriteWrapper = styled.div`
  position: relative;
  height: 64px;
  margin: 0.5rem;
  background-color: ${props => props.isFocus ? 'red' : null};
`
