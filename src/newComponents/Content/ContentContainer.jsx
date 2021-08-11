import React from 'react';
import {Content} from "./Content";
import store from "../../store/store";
import {observer} from "mobx-react-lite";

export const ContentContainer = observer( () => {
    const title = store.content.title || store.content.name
    const prefixTitle = store.category==='anime'? "Title": 'Name'
    const subtitle= store.content.synopsis || store.content.alternative_names
    const prefixSubtitle  = store.category==='anime'? 'Description': 'AltName'
    const img =store.content.image_url
    return (
	   <Content
		  title={title}
			  prefixTitle={prefixTitle}
			  subtitle={subtitle}
			  prefixSubtitle={prefixSubtitle}
			  img={img}
	   />
    );
})

