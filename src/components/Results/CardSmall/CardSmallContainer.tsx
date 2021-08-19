import React from 'react';
import {CardSmall} from "./CardSmall";
import {animeGuard, CardType, characterGuard, topAnimeGuard, topCharactersGuard} from "../../../store/types";
import {TextBlock} from "./TextBlock";
import layoutStore from "../../../store/LayoutStore";
import store from "../../../store/store";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LayoutStore from "../../../store/LayoutStore";
import {observer} from "mobx-react-lite";


interface CardSmallContainerProp {
    data: CardType

}

function TextDescription() {
    return null;
}

// export const CardSmallContainer = ({data}: CardSmallContainerProp) => {
//     const title = data.title || data.name
//     const img = data.image_url
//     const favorite = store.category !== "favorite" && data.isFavorite ? <FavoriteIcon style={{fontSize: 54}}/> : null
//     const textDescription = <TextBlock description={data.synopsis} category={layoutStore.categoryView} title={title}/>
//     const onClick = () => {
//         store.setContent(data);
//         LayoutStore.toggleActiveView("content");
//     }
//     return (
//         <CardSmall key={data.mal_id} textDescription={textDescription} img={img} favorite={favorite} onClick={onClick}/>
//     );
// };
export const CardSmallContainer = observer(({data}: CardSmallContainerProp) => {

        const img = data.image_url
        const favorite = store.category !== "favorite" && data.isFavorite ? <FavoriteIcon style={{fontSize: 25, color: 'indigo'}}/> : null
        const onClick = () => {
            store.setContent(data);
            LayoutStore.toggleActiveView("content");
        }

        const cardSmall = () => {
            if (animeGuard(data)) {
                const title = data.title
                const textDescription = <TextBlock description={data.synopsis} category={layoutStore.categoryView} title={title}/>
                return <CardSmall key={data.mal_id} textDescription={textDescription} img={img} favorite={favorite}
                                  onClick={onClick}/>
            } else if (characterGuard(data)) {
                const title = data.name
                const textDescription = <TextBlock description={undefined} category={layoutStore.categoryView} title={title}/>
                return <CardSmall key={data.mal_id} textDescription={textDescription} img={img} favorite={favorite}
                                  onClick={onClick}/>
            } else if (topAnimeGuard(data)) {
                const title = data.title
                const textDescription = <TextBlock description={undefined} category={layoutStore.categoryView} title={title}/>
                return <CardSmall key={data.mal_id} textDescription={textDescription} img={img} favorite={favorite}
                                  onClick={onClick}/>
            } else if (topCharactersGuard(data)){
                const title = data.title
                const textDescription = <TextBlock description={undefined} category={layoutStore.categoryView} title={title}/>
                return <CardSmall key={data.mal_id} textDescription={textDescription} img={img} favorite={favorite}
                                  onClick={onClick}/>
            } else {
                let unrealType: never = data
            }
        }

return <>
    {cardSmall()}
</>
    }
)

