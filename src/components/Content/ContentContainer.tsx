import React from "react";
import { Content } from "./Content";
import store from "../../store/store";
import { observer } from "mobx-react-lite";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import { SmsFailedOutlined } from "@material-ui/icons";
import { Box } from "@material-ui/core";
import { Placeholder } from "./Placeholder";

export const ContentContainer = observer(() => {
  if (store.content === null) {
  }
  const title = () => {
    if (store.content === null) return;
    return store.content.title || store.content.name;
  };
  const prefixTitle = store.category === "anime" ? "Title" : "Name";
  const subtitle = () => {
    if (store.content === null) return;
    return store.content.synopsis || store.content.alternative_names;
  };
  const prefixSubtitle = store.category === "anime" ? "Description" : "AltName";
  const img = () => {
    if (store.content === null) return;
    return store.content.image_url;
  };
  const favorite = () => {
    if (store.content === null) return <SmsFailedOutlined />;
    return store.content.isFavorite ? <FavoriteIcon /> : <FavoriteBorderIcon />;
  };
  return (
    <>
      {store.content === null ? (
        <Placeholder />
      ) : (
        <Content
          title={title()}
          prefixTitle={prefixTitle}
          subtitle={subtitle()}
          prefixSubtitle={prefixSubtitle}
          img={img()}
          favoriteIcon={favorite()}
        />
      )}
    </>
  );
});
