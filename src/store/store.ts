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

    textSearch = '';
    action = "search";
    category: CategoriesType = "anime";
    content: CardType | null = null;
    data: CardType[] = [];
    topAnime: CardType[] = [];
    topCharacter: CardType[] = [];
    searchData: CardType[] = [];
    favorite: CardType[] = [];
    favoriteData: CardType[] = [];
    loading = false;
    isThrottle = false;
    isWaiting = false;
    fetching = false;
    currentPage = {
        topAnime: 1,
        topCharacters: 1,
        animeCharacters: 1,
        // characters: 1,
        // anime: 1,
        favorite: 0
    };

    constructor() {
        makeAutoObservable(this);
        this.startProgram();
        this.getTopAnime().then(() => {
            //----------------->
            //this.data = this.topAnime
            LayoutStore.setCategoriesView("topAnime")
        })

        this.getTopCharacters()

    }


    startProgram() {
        let locStorage = localStorage.getItem("favoriteArr");
        if (locStorage !== null) {
           this.favorite = JSON.parse(locStorage);
          // this.scrollFavorite(locStorage)
        }
        
    }

    setFetching(fetchingBoolean: boolean) {
        this.fetching = fetchingBoolean
    }


    setCategory(select: CategoriesType) {
        this.content = null;
        this.data = [];
        this.searchData = []
        switch (select) {
            case "character":
                this.data = this.topCharacter
                //todo сменить top
                LayoutStore.categoryView = "topCharacters";
                break
            case "anime":
                this.data = this.topAnime
                LayoutStore.categoryView = "topAnime";
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
        await axios.get<IResponseTop>(`https://api.jikan.moe/v3/top/anime/${this.currentPage.topAnime}`)
            .then((res) => {
                this.setFetching(false)
                this.topAnime = this.topAnime.concat(res.data.top)

                this.data = this.topAnime
                this.currentPage.topAnime += 1;

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
        axios.get<IResponseTop>(`https://api.jikan.moe/v3/top/characters/${this.currentPage.topCharacters}`)
            .then(res => {
                this.setFetching(false)
                this.topCharacter = this.topCharacter.concat(res.data.top)
                if (this.category === "character") {
                    this.data = this.topCharacter
                    this.currentPage.topCharacters += 1;
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
        let a =`https://api.jikan.moe/v3/${this.action}/${this.category}?q=${textInput}&limit=10&page=${this.currentPage.animeCharacters}`
        console.log(a)
        await axios
            .get<IResponse>(
                `https://api.jikan.moe/v3/${this.action}/${this.category}?q=${textInput}&limit=10&page=${this.currentPage.animeCharacters}`
            )
            .then((res) => {
                this.setFetching(false)
                this.data = []
                this.searchData = this.searchData.concat(res.data.results);
                this.data = this.searchData;
                this.favoriteCheck(this.data)
                this.currentPage.animeCharacters +=1
            })
            .catch((error) => {
                ErrorStore.catchingErrors(error)
            })
            .then(() => {
                setTimeout(() => {
                    this.loading = false;
                }, 500);
            })
            .finally(
                () => this.setFetching(false)
            );
    }


    startSearchWithDelay(ms: number, textInput: string) {
        this.textSearch = textInput;
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
//пока не вызывается, тестим
    scrollFavorite(locStorageData: any) {
        this.favoriteData = JSON.parse(locStorageData);
        console.log(this.currentPage.favorite)
        if(this.favoriteData.length > this.favorite.length ) {
            this.setFetching(true)
            let arr = this.favoriteData.slice(this.currentPage.favorite, this.currentPage.favorite+10)
            this.setFetching(false)
            //console.log(toJS(arr))
            this.favorite = this.favorite.concat(arr);
            this.data = this.favorite
            this.currentPage.favorite +=5
            console.log(toJS(this.favorite))
            
        }
    }

}

export default new store();
