import {makeAutoObservable, toJS} from "mobx";
import {CategoriesType} from "./types";

class layoutStore {
    activeView = 'results'
    mobPanel = false

    constructor() {
	   makeAutoObservable(this)
    }

    toggleMobPanel(isOpen: boolean) {
	   this.mobPanel = isOpen
    }

    toggleActiveView(activeView:string) {
	   this.activeView = activeView
    }
}

export default new layoutStore()