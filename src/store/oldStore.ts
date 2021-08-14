import {makeAutoObservable} from "mobx";
import axios from "axios";
import {toJS} from 'mobx'
import {animeData} from "./Category/anime";
import {naruto} from "./Category/q=Naruto";
import {CardType, CategoriesType, IAnimeResponse, IAnimeType, ICharacterResponse, ICharacterType} from "./types";
import axiosStore from "./axiosStore";




class store {
    textInput = 'naruto'
    action = 'search'
    category: CategoriesType = "anime"
    content: CardType = {
        "isFavorite": true,
        "mal_id": 9761,
        "image_url": "https://cdn.myanimelist.net/images/anime/2/36823.jpg?s=871573863bbdf4b4cfe8cf2290c6ba00",
        "title": "Finder Series",
        "synopsis": "Twenty-three-year old Takaba Akihito is a young freelance photographer who takes pride in his work and seeks to get a major \"scoop.\" After he takes photographs of the business dealings of crime lord A...",
    }
    data: CardType[] = Array()
    favorite: CardType[] | [] = []
    favoritesId: number[] = []
    canIStartSearch = true


    constructor() {
        makeAutoObservable(this)
    }

    // setTextInput(input: string) {
    //     this.textInput = input
    //     console.log(this.textInput)
    // }
    //
    // setCategory(select: CategoriesType) {
    //     //this.content = null
    //     // this.data = null
    //     if (select === 'favorite') {
    //         this.data = this.favorite
    //     }
    //     this.category = select
    //     console.log(this.category)
    //
    // }
    //
    // setContent(content: CardType) {
    //     this.content = content
    //     console.log(toJS(this.content))
    // }
    //
    //
    // setFavorite() {
    //     let pos = this.favorite.map(function (e) {
    //         return e.mal_id;
    //     }).indexOf(this.content.mal_id)
    //     //let indexOfCheck2 = this.favorite.filter(item => item.mal_id !== this.content.mal_id)
    //     // if (pos !== -1 || pos === 0) {
    //     if (pos !== -1) {
    //         this.content.isFavorite = false;
    //         this.favorite.splice(pos, 1)
    //         localStorage.setItem(`favoriteArr`, JSON.stringify(this.favorite))
    //     } else {
    //         this.content.isFavorite = true;
    //         // @ts-ignore
    //         this.favorite.unshift(this.content)
    //         localStorage.setItem(`favoriteArr`, JSON.stringify(this.favorite))
    //     }
    //
    //
    // }
    //
    // startProgram() {
    //     this.favorite = JSON.parse(localStorage.getItem("favoriteArr") || '')
    //     console.log(toJS(this.favorite))
    //
    // }
    //
    //
    // apiDelay4second() {
    //     this.canIStartSearch = true
    // }


    // checkDataIsFavorite() {
    //     console.log('checkDataIsFavorite')
    //     this.favoritesId = this.favorite.map(e => e.mal_id)
    //     this.data.forEach(e => this.favoritesId.includes(e.mal_id) ? e.isFavorite = true : e.isFavorite = false)
    // }
    //
    // mergeDataWithResponse(currentData: IAnimeType[] | ICharacterType[]) {
    //     this.data = currentData
    // }
    //
    //
    //
    // startSearch() {
    //     console.log('кнопка нажата')
    //     if (this.category === 'favorite') {
    //         return
    //     }
    //     console.log('не favorite')
    //     if (!this.canIStartSearch) return
    //     console.log('4 секунды уже прошло')
    //     console.log('Проверяем категории')
    //     if (this.category === "anime") {
    //         axiosStore.getAnime()
    //     } else if (this.category === "character") {
    //         axiosStore.getCharacter()
    //     }
    // }
    //
    //
    // startFakeSearch(array: CardType[]) {
    //     if (this.category === 'favorite') {
    //         return
    //     }
    //     if (!this.canIStartSearch) return
    //     console.log('запрос отправлен')
    //     this.data = array
    //     console.log(toJS(this.data))
    //     console.log('ответ получен')
    // }
}

export default new store()