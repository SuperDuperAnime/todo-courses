import {makeAutoObservable} from "mobx";
import axios from "axios";

class store {
    textInput = 'test'
    action = 'search'
    category = "anime"
    card = 'test'

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

    setCard(id) {
	   this.card = id
	   console.log(this.card)
    }

    startSearch() {
	   axios.get(`https://api.jikan.moe/v3/${this.action}/${this.category}?q="${this.textInput}"`).then(res=> console.log(res))
    }


}

export default new store()


