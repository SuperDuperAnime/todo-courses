import axios from "axios";
import { makeAutoObservable } from "mobx";
import { Entity } from "./newTypes/types";
import { CategoriesType } from "./types/types";

class ApiStore {
  category: CategoriesType = "anime";
  textInput: string = ''
  constructor() {
  makeAutoObservable(this)
  }
  searchStringCreator(category: Entity, textInput: string , page: number){
   return `https://api.jikan.moe/v3/search/${category}?q=${textInput}&limit=10&page=${page}`
  }
  async axiosToResults(string: string) {
    let res = await axios.get(this.searchStringCreator('anime', 'something', 1))
  if(res.data.results!==undefined){
  res = res.data.results
  }
  }
}