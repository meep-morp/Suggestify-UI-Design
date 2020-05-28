import React, { useState, useEffect } from 'react'
import axios from 'axios';

import SearchBar from './searchBar';
import SongsList from './songsList';
import { axiosWithAuth } from '../utils/axiosWithAuth';

// const url = `https://spotify-3-ds.herokuapp.com/search/${search.artist}/${search.song}`;

function Dashboard() {
    const [songs, setSongs] = useState([]);

    useEffect(() => {
      axiosWithAuth()
      .get(`/api/songs`)
        .then(res => {
          setSongs(res.data)
        })
    }, [])

    return(
            <div>
                <SearchBar setSongs={setSongs}/>
                <SongsList songs={songs}/>
            </div>
    )
}
export default Dashboard;