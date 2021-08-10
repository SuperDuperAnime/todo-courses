import {makeAutoObservable, toJS} from "mobx";

class layoutStore {
    activeView = 'results'

    constructor() {
        makeAutoObservable(this)
    }

    toggleActiveView(activeView) {
        this.activeView = activeView
    }
}

export default new layoutStore()