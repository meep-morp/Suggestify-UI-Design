import React, { useState, useEffect } from 'react'
import axios from 'axios';

import SearchBar from './searchBar';
import SongsList from './songsList';
import { axiosWithAuth } from '../utils/axiosWithAuth';

// const url = `https://spotify-3-ds.herokuapp.com/search/${search.artist}/${search.song}`;
const initialMessage = "Search among thousands of songs";

function Dashboard() {
    const [songs, setSongs] = useState([]);
    const [message, setMessage] = useState(initialMessage);

    useEffect(() => {
      axiosWithAuth()
      .get(`/api/songs`)
        .then(res => {
          setSongs(res.data)
          setMessage("");
        })
    }, [])

    return(
            <div>
                <SearchBar setSongs={setSongs} setMessage={setMessage} />
                <SongsList songs={songs} message={message} />
            </div>
    )
}
export default Dashboard;