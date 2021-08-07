import {makeAutoObservable} from "mobx";
import axios from "axios";
import { toJS } from 'mobx'

class store {
    textInput = ''
    action = 'search'
    category = "anime"
    content = null
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

    setContent(content) {
	   this.content = content
	   console.log(this.content)
    }



    startSearch() {
        console.log(111)
       axios.get(`https://api.jikan.moe/v3/${this.action}/${this.category}?q=${this.textInput}&limit=3&page=1`).then(res=> {this.data = res.data.results
        console.log(toJS(this.data))
    }).catch(error => console.log(error))
    }

    // clickOnCategory(value) {
    //     this.category = value
    // }


}

export default new store()


