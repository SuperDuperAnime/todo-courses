import React from "react";
import { CardSmall } from "./CardSmall";
import {} from "../../../store/types/types";
import { TextBlock } from "./TextBlock";
import layoutStore from "../../../store/LayoutStore";
import LayoutStore from "../../../store/LayoutStore";
import store from "../../../store/store";
import FavoriteIcon from "@material-ui/icons/Favorite";
import { observer } from "mobx-react-lite";
import { CardGeneral } from "../../../store/factory";

interface CardSmallContainerProp {
  data: CardGeneral;
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
export const CardSmallContainer = observer(
  ({ data }: CardSmallContainerProp) => {
    const img = data.image_url;
    const favorite =
      store.category !== "favorite" && data.isFavorite ? (
        <FavoriteIcon style={{ fontSize: 25, color: "indigo" }} />
      ) : null;
    const onClick = () => {
      store.setContent(data);
      LayoutStore.toggleActiveView("content");
    };
    const ent = data.entity;
    const type = data.type;
    return (
      <CardSmall
        ent={ent}
        type={type}
        key={data.mal_id}
        img={img}
        title={data.title}
        favorite={favorite}
        onClick={onClick}
      />
    );
  }
);
