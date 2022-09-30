import jsTPS_Transaction from "../common/jsTPS.js"
export default class EditSong_Transaction extends jsTPS_Transaction {
    constructor(initApp,initIndex, initNewSong, initOldSong) {
        super();
        this.app = initApp;
        this.index=initIndex;
        this.newSong = initNewSong;
        this.oldSong = initOldSong;
    }

    doTransaction() {
        this.app.changeSong(this.index,this.newSong);
    }
    
    undoTransaction() {
        this.app.changeSong(this.index, this.oldSong);
    }
}