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

    // const cardSmall = () => {
    //   if (animeGuard(data)) {
    //     const title = data.title;
    //     const textDescription = (
    //       <TextBlock
    //         description={data.title}
    //         category={layoutStore.categoryView}
    //         title={title}
    //       />
    //     );
    //     return (
    //       <CardSmall
    //         key={data.mal_id}
    //         textDescription={textDescription}
    //         img={img}
    //         favorite={favorite}
    //         onClick={onClick}
    //       />
    //     );
    //   } else if (characterGuard(data)) {
    //     const title = data.title;
    //     const textDescription = (
    //       <TextBlock
    //         description={undefined}
    //         category={layoutStore.categoryView}
    //         title={title}
    //       />
    //     );
    //     return (
    //       <CardSmall
    //         key={data.mal_id}
    //         textDescription={textDescription}
    //         img={img}
    //         favorite={favorite}
    //         onClick={onClick}
    //       />
    //     );
    //   } else if (topAnimeGuard(data)) {
    //     const title = data.title;
    //     const textDescription = (
    //       <TextBlock
    //         description={undefined}
    //         category={layoutStore.categoryView}
    //         title={title}
    //       />
    //     );
    //     return (
    //       <CardSmall
    //         key={data.mal_id}
    //         textDescription={textDescription}
    //         img={img}
    //         favorite={favorite}
    //         onClick={onClick}
    //       />
    //     );
    //   } else if (topCharactersGuard(data)) {
    //     const title = data.title;
    //     const textDescription = (
    //       <TextBlock
    //         description={undefined}
    //         category={layoutStore.categoryView}
    //         title={title}
    //       />
    //     );
    //     return (
    //       <CardSmall
    //         key={data.mal_id}
    //         textDescription={textDescription}
    //         img={img}
    //         favorite={favorite}
    //         onClick={onClick}
    //       />
    //     );
    //   }
    // };

    return <div>{data.title}</div>;
  }
);
