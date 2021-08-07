import {makeAutoObservable} from "mobx";
import axios from "axios";

class store {
    textInput = ''
    action = 'search'
    category = "anime"
    card = ''
    data = []

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
	   axios.get(`https://api.jikan.moe/v3/${this.action}/${this.category}?q="${this.textInput}"`).then(res=> this.data = res)
    }

    // clickOnCategory(value) {
    //     this.category = value
    // }


}

export default new store()


