import {makeAutoObservable} from "mobx";
import axios from "axios";
import {toJS} from 'mobx'
import {animeData} from "./Category/anime";
import {naruto} from "./Category/q=Naruto";
import {CardType, CategoriesType, IResponse} from "./types";

class store {
    textInput = 'naruto'
    action = 'search'
    category: CategoriesType = "anime"
    content: CardType| null = null
    data:CardType[]  = []
    favorite: CardType[] = []
    canIStartSearch = true

    constructor() {
        makeAutoObservable(this)
    }

    setTextInput(input: string) {
        this.textInput = input
        console.log(this.textInput)
    }

    setCategory(select: CategoriesType) {
        this.content = null
        this.data = []
        if (select === 'favorite') {
            this.data = this.favorite || null
        }
        this.category = select
        console.log(this.category)

    }

    setContent(content: CardType) {
        this.content = content
        console.log(toJS(this.content))
    }


    setFavorite() {
        if(this.content===null)return
        let pos = this.favorite.map(function (e) {
            return e.mal_id;
        }).indexOf(this.content.mal_id)
        //let indexOfCheck2 = this.favorite.filter(item => item.mal_id !== this.content.mal_id)

        // @ts-ignore
        if (pos !== -1 || pos === 0) {
            this.content.isFavorite = false;
            this.favorite.splice(pos, 1)
            localStorage.setItem(`favoriteArr`, JSON.stringify(this.favorite))
        } else {
            this.content.isFavorite = true;
            this.favorite.unshift(this.content)
            localStorage.setItem(`favoriteArr`, JSON.stringify(this.favorite))
        }
    }

    startProgram() {
        this.favorite = JSON.parse(localStorage.getItem("favoriteArr")|| '')
        console.log(toJS(this.favorite))
    }


    apiDelay4second() {
        this.canIStartSearch = true
    }

    //
    // startSearch(array) {
    //     if (this.category === 'favorite') {
    //         return
    //     }
    //     if (this.canIStartSearch === false) return
    //     console.log('запрос отправлен')
    //     this.data = array
    //     console.log(toJS(this.data))
    //     console.log('ответ получен')
    //     this.canIStartSearch = false
    // }

    startSearch() {
        if (this.category === 'favorite') {
            return
        }

        axios.get<IResponse>(`https://api.jikan.moe/v3/${this.action}/${this.category}?q=${this.textInput}&limit=3&page=1`).then(res => {
            res.data.results.forEach(e => {
                console.log(e)
                this.favorite.map(event => {
                    return event.mal_id
                }).includes(e.mal_id)
                    ? e.isFavorite = true
                    : e.isFavorite = false
            })
            this.data = res.data.results
            console.log(toJS(this.data))
        }).catch(error => console.log(error.response))
        this.canIStartSearch = false
    }
}

export default new store()

