import React from "react";
import { Content } from "./Content";
import store from "../../store/store";
import { observer } from "mobx-react-lite";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { Placeholder } from "./Placeholder";
import {
  animeGuard,
  characterGuard,
  topAnimeGuard,
  topCharactersGuard,
} from "../../store/types";
import { BodyContent } from "./BodyContent";
import { AnimeListFromAnime } from "./Character/AnimeListFromAnime";

export const ContentContainer = observer(() => {
  const content = store.content;
  let contentJSX = () => {
    if (content) {
      const img = content.image_url;
      const favoriteIcon = content.isFavorite ? (
        <FavoriteIcon />
      ) : (
        <FavoriteBorderIcon />
      );

      if (animeGuard(content)) {
        return (
          <Content title={content.title} favoriteIcon={favoriteIcon}>
            <BodyContent
              img={img}
              preTitle={"Title: "}
              title={content.title}
              preSubtitle={"Synopsis: "}
              subtitle={content.synopsis}
            />
          </Content>
        );
      } else if (characterGuard(content)) {
        const animeList = <AnimeListFromAnime animeList={content.anime} />;
        return (
          <Content title={content.name} favoriteIcon={favoriteIcon}>
            <BodyContent
              img={img}
              preTitle={"Name: "}
              title={content.name}
              preSubtitle={"This character from: "}
              subtitle={animeList}
            />
          </Content>
        );
      } else if (topAnimeGuard(content)) {
        return (
          <Content title={content.title} favoriteIcon={favoriteIcon}>
            <BodyContent
              preTitle={"Title: "}
              title={content.title}
              preSubtitle={"RANK: "}
              subtitle={content.rank}
              img={img}
            />
          </Content>
        );
      } else if (topCharactersGuard(content)) {
        return (
          <Content title={content.title} favoriteIcon={favoriteIcon}>
            <BodyContent
              preTitle={"Title: "}
              title={content.title}
              preSubtitle={"RANK: "}
              subtitle={content.rank}
              img={img}
            />
          </Content>
        );
      } else {
        let unrealType: never = content;
      }
    } else {
      return <Placeholder />;
    }
  };

  return <>{contentJSX()}</>;
});
