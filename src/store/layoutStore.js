import {makeAutoObservable, toJS} from "mobx";

class layoutStore {
    resultsOpen = true
    modalOpen = false
    filterOpen = false
    contentOpen = false

    constructor() {
	   makeAutoObservable(this)
    }

    setModalOpen(isOpen) {
	   this.modalOpen = isOpen
    }

    setResultsOpen(isOpen) {
	   this.resultsOpen = isOpen
    }

    setFilterOpen(isOpen) {
	   this.filterOpen = isOpen
    }

    setContentOpen(isOpen) {
	   this.contentOpen = isOpen
    }
}

export default new layoutStore()