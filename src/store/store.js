import {makeAutoObservable} from "mobx";
import axios from "axios";
import { toJS } from 'mobx'

class store {
    textInput = ''
    action = 'search'
    category = "anime"
    card = ''
    data = null

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
        console.log(111)
       axios.get(`https://api.jikan.moe/v3/${this.action}/${this.category}?q="${this.textInput}"`).then(res=> {this.data = res.data.results
        console.log(toJS(this.data))
    }).catch(error => console.log(error))
    }

    // clickOnCategory(value) {
    //     this.category = value
    // }


}

export default new store()


