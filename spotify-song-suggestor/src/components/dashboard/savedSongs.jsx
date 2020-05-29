import React from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios";
import { useParams } from "react-router-dom";

const SavedSongs = props => {
    const { setSavedSongs, savedSongs } = props;

    const id = useParams();

    axiosWithAuth().get(`https://spotsuggest.herokuapp.com/save/${id}`)
        .then(response => {
            console.log(response);
            setSavedSongs(response.data);
        })
        .catch(error => {
            console.log(error);
            setSavedSongs("");
        })

    return (
        <div className="savedSongs">
            {savedSongs === "" || !savedSongs 
            ? <h2>Search a song to save related ones you enjoy!</h2> 
            : <h2>Loading...</h2>}
            {/* //savedSongs.map(song => (
            //     <div className="savedSong">
            //         <h3>{song.song_title}</h3>
            //     </div>
            // ))} */}
        </div>
    )
}

export default SavedSongs;