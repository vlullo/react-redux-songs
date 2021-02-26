//Action creator
export const selectSong = song => { //Named export allows to export different functions from a single file
    //Return an action
    return {
        type: 'SONG_SELECTED',
        payload: song
    };
};



//import { slectSong } from '../actions'; //use {...} for Named exports