import {makeAutoObservable, toJS} from "mobx";

class layoutStore {
    activeView = 'results'
    mobPanel = false

    constructor() {
	   makeAutoObservable(this)
    }

    toggleMobPanel(isOpen) {
	   this.mobPanel = isOpen
    }

    toggleActiveView(activeView) {
	   this.activeView = activeView
    }
}

export default new layoutStore()