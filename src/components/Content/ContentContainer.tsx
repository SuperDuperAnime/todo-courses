import React from "react";
import { Content } from "./Content";
import store from "../../store/store";
import { observer } from "mobx-react-lite";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import LayoutStore from "../../store/LayoutStore";
import { Placeholder } from "./jsx/Placeholder";
import { Specific } from "./jsx/Specific/Specific";
import { TopAnime } from "./jsx/Specific/TopAnime";
import { TopCharacter } from "./jsx/Specific/TopCharacter";
import { ShortCharacter } from "./jsx/Specific/ShortCharacter";
import { ShortAnime } from "./jsx/Specific/ShortAnime";

export const ContentContainer = observer(() => {
  const content = store.content;
  if (content === null) return <Placeholder />;
  const title = content.title;
  const favoriteIcon = content.isFavorite ? (
    <FavoriteIcon />
  ) : (
    <FavoriteBorderIcon />
  );
  const subtitle = "dddd";
  const img = content.image_url;
  const toggleFavorite = () => {
    store.setFavorite();
  };
  const toggleContent = () => {
    LayoutStore.toggleContent(false);
  };

  const specificBody = () => {
    switch (content.type) {
      case "full":
        return content.entity === "anime" ? (
          <TopAnime data={content} />
        ) : (
          <TopAnime data={content} />
        );
      case "short":
        return content.entity === "anime" ? (
          <ShortAnime data={content} />
        ) : (
          <ShortCharacter data={content} />
        );
      case "top":
        return content.entity === "anime" ? (
          <TopAnime data={content} />
        ) : (
          <TopCharacter data={content} />
        );
    }
  };
  return (
    <>
      <Content
        toggleContent={toggleContent}
        img={img}
        title={title}
        toggleFavorite={toggleFavorite}
        favoriteIcon={favoriteIcon}
      >
        <Specific>{specificBody()}</Specific>
      </Content>
    </>
  );
});
