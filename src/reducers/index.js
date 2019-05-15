import { combineResucers, combineReducers } from 'redux';

const songReducer = () => {
    return [
        { title: 'Billie Jean', duration: '3:45'},
        {title: 'Beat It', duration: '3:00'},
        {title: 'Heal the World', duration: '4:20'},
        {title: 'Earth Song', duration: '4:15'}
    ];
};

const selectedSongReducer = (selectedSong = null, action) => {
    
    if (action.type === 'SONG_SELECTED') {
        return action.payload;
    }

    return selectedSong;
};

export default combineReducers({
    songs: songReducer,
    selectedSong: selectedSongReducer
});