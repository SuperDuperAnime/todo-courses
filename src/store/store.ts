import {makeAutoObservable} from "mobx";
import axios from "axios";
import {toJS} from "mobx";
import {animeData} from "./Category/anime";
import {naruto} from "./Category/q=Naruto";
import {CardType, CategoriesType, IResponse, IResponseTop} from "./types";
import LayoutStore from "./LayoutStore";


class store {

    action = "search";
    category: CategoriesType = "anime";
    content: CardType | null = null;
    data: CardType[] = [];
    topAnime: CardType[] = [];
    topCharacter: CardType[] = [];
    favorite: CardType[] = [];
    canIStartSearch = true;
    loading = false;
    error: string| number= 200
    isOpenError = false

    constructor() {
        makeAutoObservable(this);
        this.startProgram();
        this.getTop().then(() => {
            this.data = this.topAnime
            LayoutStore.setCategoriesView("top")
        })
    }


    startProgram() {
        let locStorage = localStorage.getItem("favoriteArr");
        if (locStorage !== null) {
            this.favorite = JSON.parse(locStorage);
        }
        console.log(toJS(this.favorite));
    }


    setCategory(select: CategoriesType) {
        this.content = null;
        this.data = [];
        switch (select) {
            case "character":
                this.data = this.topCharacter
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
    }

    async getTop() {
        this.loading = true;
        await axios.get<IResponseTop>(`https://api.jikan.moe/v3/top/anime`)
            .then((res) => {
                this.topAnime = res.data.top
            })
            .catch((error) => console.log(error.response))
            .then(() => {
                this.loading = false;
            })
        setTimeout(() => {
            axios.get<IResponseTop>(`https://api.jikan.moe/v3/top/characters`)
                .then(res => this.topCharacter = res.data.top)
                .catch((error) => console.log(error.response))
        }, 2000)
    }

    toggleOpen(open: boolean) {
        this.isOpenError = open
    }

    apiDelay4second() {
        setTimeout(() => {
            this.canIStartSearch = true;
        }, 4000);
    }


    async startSearch(textInput: string) {
        console.log("Кнопка нажата");
        if (this.category === "favorite") {
            return;
        }
        if (!this.canIStartSearch) return
        this.loading = true;


        await axios
            .get<IResponse>(
                `https://api.jikan.moe/v3/${this.action}/${this.category}?q=${textInput}&limit=5&page=1`
            )
            .then((res) => {
                res.data.results.forEach((e) => {
                    console.log(e);
                    this.favorite
                        .map((event) => {
                            return event.mal_id;
                        })
                        .includes(e.mal_id)
                        ? (e.isFavorite = true)
                        : (e.isFavorite = false);
                });
                this.data = res.data.results;
                console.log(toJS(this.data));
            })
            .catch((error) => {
                this.error = error.response.status
                this.isOpenError = true
                console.log(error)

            })
            .then(() => {
                setTimeout(() => {
                    this.loading = false;
                }, 500);
            });
        console.log("ответ получен");
        this.canIStartSearch = false;
        this.apiDelay4second();
    }
}

export default new store();
