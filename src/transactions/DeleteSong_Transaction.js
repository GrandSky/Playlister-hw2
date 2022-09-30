import jsTPS_Transaction from "../common/jsTPS.js"
export default class DeleteSong_Transaction extends jsTPS_Transaction {
    constructor(initApp, initIndex, initOldSong) {
        super();
        this.app = initApp;
        this.index = initIndex;
        this.oldSong = initOldSong;
    }

    doTransaction() {
        this.app.removeSong(this.index);
    }
    
    undoTransaction() {
        this.app.addSongAt(this.index, this.oldSong);
    }
}