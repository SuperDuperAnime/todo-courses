import React from "react";
import { Content } from "./Content";
import store from "../../store/store";
import { observer } from "mobx-react-lite";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";

import LayoutStore from "../../store/LayoutStore";
import { Placeholder } from "./jsx/Placeholder";

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
  return (
    <>
      <Content
        toggleContent={toggleContent}
        img={img}
        title={title}
        toggleFavorite={toggleFavorite}
        favoriteIcon={favoriteIcon}
      >
        <div>
          {" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ex
          minus optio possimus qui reiciendis repellendus vitae. Commodi
          molestiae natus quibusdam, quod saepe tempora voluptatem? Animi culpa
          eligendi fugiat maxime. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Dicta, nobis, pariatur. Ab ad asperiores
          consequuntur, cumque dolor explicabo laboriosam quaerat vitae.
          Distinctio dolorum explicabo inventore ipsam maiores reiciendis sit{" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ex
          minus optio possimus qui reiciendis repellendus vitae. Commodi
          molestiae natus quibusdam, quod saepe tempora voluptatem? Animi culpa
          eligendi fugiat maxime. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Dicta, nobis, pariatur. Ab ad asperiores
          consequuntur, cumque dolor explicabo laboriosam quaerat vitae.
          Distinctio dolorum explicabo inventore ipsam maiores reiciendis sit{" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ex
          minus optio possimus qui reiciendis repellendus vitae. Commodi
          molestiae natus quibusdam, quod saepe tempora voluptatem? Animi culpa
          eligendi fugiat maxime. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Dicta, nobis, pariatur. Ab ad asperiores
          consequuntur, cumque dolor explicabo laboriosam quaerat vitae.
          Distinctio dolorum explicabo inventore ipsam maiores reiciendis sit{" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ex
          minus optio possimus qui reiciendis repellendus vitae. Commodi
          molestiae natus quibusdam, quod saepe tempora voluptatem? Animi culpa
          eligendi fugiat maxime. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Dicta, nobis, pariatur. Ab ad asperiores
          consequuntur, cumque dolor explicabo laboriosam quaerat vitae.
          Distinctio dolorum explicabo inventore ipsam maiores reiciendis sit{" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ex
          minus optio possimus qui reiciendis repellendus vitae. Commodi
          molestiae natus quibusdam, quod saepe tempora voluptatem? Animi culpa
          eligendi fugiat maxime. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Dicta, nobis, pariatur. Ab ad asperiores
          consequuntur, cumque dolor explicabo laboriosam quaerat vitae.
          Distinctio dolorum explicabo inventore ipsam maiores reiciendis sit{" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ex
          minus optio possimus qui reiciendis repellendus vitae. Commodi
          molestiae natus quibusdam, quod saepe tempora voluptatem? Animi culpa
          eligendi fugiat maxime. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Dicta, nobis, pariatur. Ab ad asperiores
          consequuntur, cumque dolor explicabo laboriosam quaerat vitae.
          Distinctio dolorum explicabo inventore ipsam maiores reiciendis sit{" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ex
          minus optio possimus qui reiciendis repellendus vitae. Commodi
          molestiae natus quibusdam, quod saepe tempora voluptatem? Animi culpa
          eligendi fugiat maxime. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Dicta, nobis, pariatur. Ab ad asperiores
          consequuntur, cumque dolor explicabo laboriosam quaerat vitae.
          Distinctio dolorum explicabo inventore ipsam maiores reiciendis sit{" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ex
          minus optio possimus qui reiciendis repellendus vitae. Commodi
          molestiae natus quibusdam, quod saepe tempora voluptatem? Animi culpa
          eligendi fugiat maxime. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Dicta, nobis, pariatur. Ab ad asperiores
          consequuntur, cumque dolor explicabo laboriosam quaerat vitae.
          Distinctio dolorum explicabo inventore ipsam maiores reiciendis sit{" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ex
          minus optio possimus qui reiciendis repellendus vitae. Commodi
          molestiae natus quibusdam, quod saepe tempora voluptatem? Animi culpa
          eligendi fugiat maxime. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Dicta, nobis, pariatur. Ab ad asperiores
          consequuntur, cumque dolor explicabo laboriosam quaerat vitae.
          Distinctio dolorum explicabo inventore ipsam maiores reiciendis sit{" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ex
          minus optio possimus qui reiciendis repellendus vitae. Commodi
          molestiae natus quibusdam, quod saepe tempora voluptatem? Animi culpa
          eligendi fugiat maxime. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Dicta, nobis, pariatur. Ab ad asperiores
          consequuntur, cumque dolor explicabo laboriosam quaerat vitae.
          Distinctio dolorum explicabo inventore ipsam maiores reiciendis sit{" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ex
          minus optio possimus qui reiciendis repellendus vitae. Commodi
          molestiae natus quibusdam, quod saepe tempora voluptatem? Animi culpa
          eligendi fugiat maxime. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Dicta, nobis, pariatur. Ab ad asperiores
          consequuntur, cumque dolor explicabo laboriosam quaerat vitae.
          Distinctio dolorum explicabo inventore ipsam maiores reiciendis sit{" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ex
          minus optio possimus qui reiciendis repellendus vitae. Commodi
          molestiae natus quibusdam, quod saepe tempora voluptatem? Animi culpa
          eligendi fugiat maxime. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Dicta, nobis, pariatur. Ab ad asperiores
          consequuntur, cumque dolor explicabo laboriosam quaerat vitae.
          Distinctio dolorum explicabo inventore ipsam maiores reiciendis sit{" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ex
          minus optio possimus qui reiciendis repellendus vitae. Commodi
          molestiae natus quibusdam, quod saepe tempora voluptatem? Animi culpa
          eligendi fugiat maxime. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Dicta, nobis, pariatur. Ab ad asperiores
          consequuntur, cumque dolor explicabo laboriosam quaerat vitae.
          Distinctio dolorum explicabo inventore ipsam maiores reiciendis sit{" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ex
          minus optio possimus qui reiciendis repellendus vitae. Commodi
          molestiae natus quibusdam, quod saepe tempora voluptatem? Animi culpa
          eligendi fugiat maxime. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Dicta, nobis, pariatur. Ab ad asperiores
          consequuntur, cumque dolor explicabo laboriosam quaerat vitae.
          Distinctio dolorum explicabo inventore ipsam maiores reiciendis sit{" "}
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dicta ex
          minus optio possimus qui reiciendis repellendus vitae. Commodi
          molestiae natus quibusdam, quod saepe tempora voluptatem? Animi culpa
          eligendi fugiat maxime. Lorem ipsum dolor sit amet, consectetur
          adipisicing elit. Dicta, nobis, pariatur. Ab ad asperiores
          consequuntur, cumque dolor explicabo laboriosam quaerat vitae.
          Distinctio dolorum explicabo inventore ipsam maiores reiciendis sit{" "}
        </div>
      </Content>
    </>
  );
});
