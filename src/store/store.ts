import React, {useRef} from 'react'
import {makeAutoObservable} from "mobx";
import axios from "axios";
import {toJS} from "mobx";
import {animeData} from "./Category/anime";
import {naruto} from "./Category/q=Naruto";
import {CardType, CategoriesType, IResponse, IResponseTop} from "./types";
import LayoutStore from "./LayoutStore";
import ErrorStore from "./ErrorStore";
import {string} from "zod";


class store {


    action = "search";
    category: CategoriesType = "anime";
    content: CardType | null = null;
    data: CardType[] = [];
    topAnime: CardType[] = [];
    topCharacter: CardType[] = [];
    favorite: CardType[] = [];
    loading = false;
    isThrottle = false;
    isWaiting = false;
    fetching = false;
    currentPage = {
        anime: 1,
        characters: 1,
        favorite: 1
    };

    constructor() {
        makeAutoObservable(this);
        this.startProgram();
        this.getTopAnime().then(() => {
            //----------------->
            //this.data = this.topAnime
            LayoutStore.setCategoriesView("top")
        })

        this.getTopCharacters()

    }

    


    startProgram() {
        let locStorage = localStorage.getItem("favoriteArr");
        if (locStorage !== null) {
            this.favorite = JSON.parse(locStorage);
        }
        console.log(toJS(this.favorite));
    }

    setFetching(fetchingBoolean: boolean) {
        this.fetching = fetchingBoolean
    }


    setCategory(select: CategoriesType) {
        this.content = null;
        this.data = [];
        
        switch (select) {
            case "character":
                this.data = this.topCharacter
                //todo сменить top
                LayoutStore.categoryView = "top";
                break
            case "anime":
                this.data = this.topAnime
                LayoutStore.categoryView = "top";
                break
            case "favorite":
                this.data = this.favorite;
                LayoutStore.categoryView = "favorite";
                break
            default:
                console.error(select)
        }
        this.category = select;
        console.log(this.category);

    }

    setContent(content: CardType) {
        this.content = content;
        console.log(toJS(this.content));
    }

    setFavorite() {
        if (this.content === null) return;
        let pos = this.favorite.findIndex(item => item.mal_id == this.content?.mal_id)

        if (pos !== -1) {
            this.content.isFavorite = false;
            this.favorite.splice(pos, 1);
        } else {
            this.content.isFavorite = true;
            this.favorite.unshift(this.content);
        }
        localStorage.setItem(`favoriteArr`, JSON.stringify(this.favorite));
      
    }

    async getTopAnime() {
        this.loading = true;
        await axios.get<IResponseTop>(`https://api.jikan.moe/v3/top/anime/${this.currentPage.anime}`)
            .then((res) => {

                this.topAnime = this.topAnime.concat(res.data.top)
              
                this.data = this.topAnime
                this.currentPage.anime +=1;

                this.favoriteCheck(this.topAnime)

            })
            .catch((error) => console.log(error.response))
            .then(() => {
                this.loading = false;
            })

            .finally(
                () => this.setFetching(false)
            )
       
    }

    async getTopCharacters() {
            this.loading = true;
            axios.get<IResponseTop>(`https://api.jikan.moe/v3/top/characters/${this.currentPage.characters}`)
                .then(res => {
             
                    this.topCharacter = this.topCharacter.concat(res.data.top)
                    if (this.category === "character") {
                        this.data = this.topCharacter
                        this.currentPage.characters +=1;
                    }
 this.favoriteCheck(this.topCharacter)
                })
                .catch((error) => console.log(error.response))
                .then(() => {
                    this.loading = false;
                })
                .finally(
                    () => this.setFetching(false)
                )
        

    }

    favoriteCheck(data: CardType[]) {
        data.forEach((e) => {
            this.favorite
                .map((event) => {
                    return event.mal_id;
                })
                .includes(e.mal_id)
                ? (e.isFavorite = true)
                : (e.isFavorite = false);
        });
    }

    async startSearch(textInput: string) {

        if (this.category === "favorite") {
            return;
        }
        this.loading = true;


        await axios
            .get<IResponse>(
                `https://api.jikan.moe/v3/${this.action}/${this.category}?q=${textInput}&limit=5&page=1`
            )
            .then((res) => {
                this.data = res.data.results;
                this.favoriteCheck(this.data)

            })
            .catch((error) => {
                ErrorStore.catchingErrors(error)
            })
            .then(() => {
                setTimeout(() => {
                    this.loading = false;
                }, 500);
            });
    }


    startSearchWithDelay(ms: number, textInput: string) {
        if (this.isThrottle) {
            console.log('тротл')
            this.isWaiting = true
            console.log('ждем снятия ограничения')
            return
        } else {
            console.log('startsearch')
            this.isThrottle = true
            this.startSearch(textInput)

        }
        setTimeout(() => {
            console.log('4сек прошло снимаем ограничение')
            this.isThrottle = false
            if (this.isWaiting) {
                console.log('ограничение снято, запрос отправлен')
                this.startSearch(textInput)
            } else {
                console.log('ограничение снято, запрос не отправлялся')
                return
            }
        }, ms)

        this.isWaiting = false
    }

}

export default new store();
