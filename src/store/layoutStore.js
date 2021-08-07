import {makeAutoObservable} from "mobx";

class layoutStore {
    isMenuOpen = true

    constructor() {
        makeAutoObservable(this)
    }

    setMenuOpen(state) {
        this.isMenuOpen=state
    }
}

export default new layoutStore()