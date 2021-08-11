import {makeAutoObservable} from "mobx";
import axios from "axios";
import {toJS} from 'mobx'
import {animeData} from "./Category/anime";
import {naruto} from "./Category/q=Naruto";

export type CategoriesType = "anime" | 'character' | 'favorite'


// export type CardType = AnimeType|CharacterType

export interface CardType {
    isFavorite: boolean
    mal_id: number,
    image_url: string,
    title?: string,
    synopsis?: string,
        name?: string,
    alternative_names?: string| undefined,
}
// interface AnimeType {
//     isFavorite: boolean
//     mal_id: number,
//     image_url: string,
//     title: string,
//     synopsis: string,
// }
// interface CharacterType {
//     isFavorite: boolean
//     mal_id: number,
//     image_url: string,
//     name: string,
//     alternative_names: string| undefined,
// }


class store {
    textInput = 'naruto'
    action = 'search'
    category: CategoriesType = "anime"
    content: CardType  = {
        "isFavorite": true,
        "mal_id": 9761,
        "image_url": "https://cdn.myanimelist.net/images/anime/2/36823.jpg?s=871573863bbdf4b4cfe8cf2290c6ba00",
        "title": "Finder Series",
        "synopsis": "Twenty-three-year old Takaba Akihito is a young freelance photographer who takes pride in his work and seeks to get a major \"scoop.\" After he takes photographs of the business dealings of crime lord A...",
    }
    data: CardType[] | [] = [{
        "isFavorite": true,
        "mal_id": 9761,
        "image_url": "https://cdn.myanimelist.net/images/anime/2/36823.jpg?s=871573863bbdf4b4cfe8cf2290c6ba00",
        "title": "Finder Series",
        "synopsis": "Twenty-three-year old Takaba Akihito is a young freelance photographer who takes pride in his work and seeks to get a major \"scoop.\" After he takes photographs of the business dealings of crime lord A...",
    }]
    favorite: CardType[] | [] = [{
        "isFavorite": true,
        "mal_id": 9761,
        "image_url": "https://cdn.myanimelist.net/images/anime/2/36823.jpg?s=871573863bbdf4b4cfe8cf2290c6ba00",
        "title": "Finder Series",
        "synopsis": "Twenty-three-year old Takaba Akihito is a young freelance photographer who takes pride in his work and seeks to get a major \"scoop.\" After he takes photographs of the business dealings of crime lord A...",
    }]
    canIStartSearch = true

    constructor() {
        makeAutoObservable(this)
    }

    setTextInput(input: string) {
        this.textInput = input
        console.log(this.textInput)
    }

    setCategory(select: CategoriesType) {
        //this.content = null
        // this.data = null
        if (select === 'favorite') {
            this.data = this.favorite
        }
        this.category = select
        console.log(this.category)

    }

    setContent(content: CardType) {
        this.content = content
        console.log(toJS(this.content))
    }


    setFavorite() {
        let pos = this.favorite.map(function (e) {
            return e.mal_id;
        }).indexOf(this.content.mal_id)
        //let indexOfCheck2 = this.favorite.filter(item => item.mal_id !== this.content.mal_id)
        // if (pos !== -1 || pos === 0) {
        if (pos !== -1) {
            this.content.isFavorite = false;
            this.favorite.splice(pos, 1)
            localStorage.setItem(`favoriteArr`, JSON.stringify(this.favorite))
        } else {
            this.content.isFavorite = true;
            // @ts-ignore
            this.favorite.unshift(this.content)
            localStorage.setItem(`favoriteArr`, JSON.stringify(this.favorite))
        }
    }

    startProgram() {
        this.favorite = JSON.parse(localStorage.getItem("favoriteArr") || '')
        console.log(toJS(this.favorite))

    }


    apiDelay4second() {
        this.canIStartSearch = true
    }


    startSearch(array: CardType[]) {
        if (this.category === 'favorite') {
            return
        }
        if (!this.canIStartSearch) return
        console.log('запрос отправлен')
        this.data = array
        console.log(toJS(this.data))
        console.log('ответ получен')
        // this.canIStartSearch = false
    }

    // startSearch() {
    //    console.log('кнопка нажата')
    //    if (this.category === 'favorite') {
    // 	  return
    //    }
    //    console.log('не favorite')
    //    if (this.canIStartSearch === false) return
    //    console.log('4 секунды уже прошло')
    //    console.log('запрос отправлен')
    //    axios.get(`https://api.jikan.moe/v3/${this.action}/${this.category}?q=${this.textInput}&limit=3&page=1`).then(res => {
    // 	  res.data.results.forEach(e => {
    // 		 console.log(e)
    // 		 this.favorite.map(event => {
    // 			return event.mal_id
    // 		 }).includes(e.mal_id)
    // 			? e.isFavorite = true
    // 			: e.isFavorite = false
    // 	  })
    // 	  this.data = res.data.results
    // 	  console.log(toJS(this.data))
    //    }).catch(error => console.log(error.response))
    // console.log('циклы завершен')
    //    this.canIStartSearch = false
    //
    // }
}

export default new store()


