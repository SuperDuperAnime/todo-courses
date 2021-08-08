import {makeAutoObservable} from "mobx";
import axios from "axios";
import {toJS} from 'mobx'
import {animeData} from "./Category/anime";
import {naruto} from "./Category/q=Naruto";

class store {
    textInput = ''
    action = 'search'
    category = "anime"
    content = null
    data = null
    canIStartSearch = true

    constructor() {
	   makeAutoObservable(this)
    }

    setTextInput(input) {
	   this.textInput = input
	   console.log(this.textInput)
    }

    setCategory(select) {
	   this.category = select
	   console.log(this.category)

    }

    setContent(content) {
	   this.content = content
	   console.log(toJS(this.content))
    }

    apiDelay4second() {
	   this.canIStartSearch = true
    }

    startSearch(array) {
	   if (this.canIStartSearch===false) return
	   console.log('запрос отправлен')
	   this.data = array
	   console.log(toJS(this.data))
	   console.log('ответ получен')
	   this.canIStartSearch = false
    }


    // startSearch() {
    //    if (!this.canIStartSearch) return
    //    axios.get(`https://api.jikan.moe/v3/${this.action}/${this.category}?q=${this.textInput}`)
    // 	  .then(res => {
    // 		 this.data = res.data.results
    // 		 console.log(toJS(this.data))
    // 	  })
    // 	  .catch(error => console.log(error.response))
    //    this.canIStartSearch = false
    // }


}

export default new store()


