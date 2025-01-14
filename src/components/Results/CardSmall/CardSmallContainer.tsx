import React from "react";
import { CardSmall } from "./CardSmall";
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

export const CardSmallContainer = observer(
  ({ data }: CardSmallContainerProp) => {
    const img = data.image_url;
    const favorite =
      store.category !== "favorite" && data.isFavorite ? (
        <FavoriteIcon style={{ fontSize: 25, color: "indigo" }} />
      ) : null;
    const onClick = () => {
      store.setContent(data);
      LayoutStore.toggleContent(true);
    };
    const title = data.title;

    return (
      <CardSmall
        key={data.mal_id}
        title={title}
        img={img}
        favorite={favorite}
        onClick={onClick}
      />
    );
  }
);
