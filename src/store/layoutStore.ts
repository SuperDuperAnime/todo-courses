import {makeAutoObservable, toJS} from "mobx";
import {CategoriesType} from "./types";
import store from "./store";

class layoutStore {
    activeView = 'results'
    mobPanel = false
    categoryView = 'anime'

    constructor() {
        makeAutoObservable(this)
    }

    toggleMobPanel(isOpen: boolean) {
        this.mobPanel = isOpen
    }

    setActiveCategory() {
        this.categoryView = store.category
    }

    toggleActiveView(activeView: string) {
        this.activeView = activeView
    }
}

export default new layoutStore()