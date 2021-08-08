import {makeAutoObservable} from "mobx";

class layoutStore {
    isFilterOpen = false
    isResultsOpen = false

    constructor() {
        makeAutoObservable(this)
    }

    setFilterOpen(state) {
        this.isFilterOpen=state
        console.log(  "isFilterOpen: " + this.isFilterOpen)
    }
    setResultsOpen(state) {
        this.isResultsOpen=state
        console.log(  "isResultsOpen: " + this.isResultsOpen)
    }
}

export default new layoutStore()