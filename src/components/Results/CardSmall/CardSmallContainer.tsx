import React from 'react';
import {CardSmall} from "./CardSmall";
import {CardType} from "../../../store/types";
import {TextBlock} from "./TextBlock";
import layoutStore from "../../../store/LayoutStore";
import store from "../../../store/store";
import FavoriteIcon from "@material-ui/icons/Favorite";
import LayoutStore from "../../../store/LayoutStore";


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
export const CardSmallContainer = ({data}: CardSmallContainerProp) => {
    const title = 'test'
    const img = data.image_url
    const favorite = store.category !== "favorite" && data.isFavorite ? <FavoriteIcon style={{fontSize: 54}}/> : null
    const textDescription = <TextBlock description={'test'} category={layoutStore.categoryView} title={title}/>
    const onClick = () => {
        store.setContent(data);
        LayoutStore.toggleActiveView("content");
    }
    return (
        <CardSmall key={data.mal_id} textDescription={textDescription} img={img} favorite={favorite} onClick={onClick}/>
    );
};