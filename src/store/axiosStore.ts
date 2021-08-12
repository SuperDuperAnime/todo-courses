import {makeAutoObservable} from "mobx";
import {IAnimeResponse, IAnimeType, ICharacterResponse, ICharacterType} from "./types";
import axios from "axios";
import store from "./store";

class axiosStore {
    animeData: IAnimeType[] | [] = []
    characterData: ICharacterType[] | [] = []

    constructor() {
        makeAutoObservable(this)
    }

    getAnime() {
        console.log('getAnime')
        axios
            .get<IAnimeResponse>(`https://api.jikan.moe/v3/search/anime?q=${store.textInput}&limit=3&page=1`).then(res => {
                this.animeData = res.data.results
            })
            .then(()=> store.mergeDataWithResponse(this.animeData))
            .catch(error => console.log(error.response))
        store.checkDataIsFavorite()
    }

    getCharacter() {
        console.log('getCharacter')
        axios
            .get<ICharacterResponse>(`https://api.jikan.moe/v3/search/character?q=${store.textInput}&limit=3&page=1`).then(res => {
                this.characterData = res.data.results
            })
            .then(()=> store.mergeDataWithResponse(this.characterData))
            .catch(error => console.log(error.response))
        store.checkDataIsFavorite()
    }
}

export default new axiosStore()