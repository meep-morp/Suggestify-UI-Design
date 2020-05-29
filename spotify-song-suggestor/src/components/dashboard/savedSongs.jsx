import React, { useEffect } from "react";
import { axiosWithAuth } from "../utils/axiosWithAuth";
import axios from "axios";
import { useParams } from "react-router-dom";

const SavedSongs = props => {
    const { setSavedSongs, savedSongs } = props;

    useEffect(() => {
        axiosWithAuth()
            .get(`/api/songs`)
            .then(res => {
                setSavedSongs(savedSongs.concat(res.data));
            })
    }, [])

    const id = useParams();

    // axiosWithAuth().get(`https://spotsuggest.herokuapp.com/save/${id}`)
    //     .then(response => {
    //         console.log(response);
    //         setSavedSongs(response.data);
    //     })
    //     .catch(error => {
    //         console.log(error);
    //         setSavedSongs("");
    //     })

    return (
        <div className="savedSongs">
            {savedSongs === [] || !savedSongs
                ? <h2>Save songs to listen again and again</h2>
                : savedSongs.map(song => (
                    <div className="savedSong">
                            <p>{song.title}</p>
                            <p className="artist">{song.artist}</p>
                    </div>
                ))}
        </div>
    )
}

export default SavedSongs;