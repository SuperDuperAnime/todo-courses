import React from "react";
import {Content} from "./Content";
import store from "../../store/store";
import {observer} from "mobx-react-lite";
import FavoriteIcon from "@material-ui/icons/Favorite";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import {SmsFailedOutlined} from "@material-ui/icons";
import {Box} from "@material-ui/core";
import {Placeholder} from "./Placeholder";
import {CharacterType, CardType, AnimeType, IIsFavorite, animeGuard, characterGuard, topGuard} from "../../store/types";

export const ContentContainer = observer(() => {
        const content = store.content

        let contentJSX = () => {
            if (content !== null) {
                if (animeGuard(content)) {
                    return <Content
                        title={content.title}
                        isFavorite={content.isFavorite}

                    />
                } else if (characterGuard(content)) {
                    return <Content
                        title={content.name}
                              isFavorite={content.isFavorite}
                    />
                } else if (topGuard(content)) {
                    return <Content
                        title={content.title}
                              isFavorite={content.isFavorite}
                    />
                } else {
                    let unrealType: never = content
                }
            } else {
                return <Placeholder/>
            }
        }

        return <>
            {contentJSX()}
        </>
        // if (store.content === null) {
        // }
        // const title = () => {
        //     if (store.content === null) return;
        //     return store.content.title || store.content.name;
        // };
        // const prefixTitle = store.category === "anime" ? "Title" : "Name";
        // const subtitle = () => {
        //     if (store.content === null) return;
        //     return store.content.synopsis || store.content.alternative_names;
        // };
        // const prefixSubtitle = store.category === "anime" ? "Description" : "AltName";
        // const img = () => {
        //     if (store.content === null) return;
        //     return store.content.image_url;
        // };
        // const favorite = () => {
        //     if (store.content === null) return <SmsFailedOutlined/>;
        //     return store.content.isFavorite ? <FavoriteIcon/> : <FavoriteBorderIcon/>;
        // };
        // return (
        //     <>
        //         {store.content === null ? (
        //             <Placeholder/>
        //         ) : (
        //             <Content
        //                 title={title()}
        //                 prefixTitle={prefixTitle}
        //                 subtitle={subtitle()}
        //                 prefixSubtitle={prefixSubtitle}
        //                 img={img()}
        //                 favoriteIcon={favorite()}
        //             />
        //         )}
        //     </>
        // );
    }
);
