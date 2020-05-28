import React, { useState, useEffect } from 'react'
import axios from 'axios';

<<<<<<< HEAD
=======
import { SongContext } from '../contexts/SongContext';

>>>>>>> 7c64396ff8f3014f9c91eac746657909e30d9817
import SearchBar from './searchBar';
import SongsList from './songsList';
import { axiosWithAuth } from '../utils/axiosWithAuth';

<<<<<<< HEAD
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
=======


function Dashboard() {
    const [song, setSong] = useState([]);

    useEffect(() => {
      axios.get('https://reqres.in/api/users')
        .then(res => {
          console.log(res.data.data)
        })
    }, [song])

    return(
        <SongContext.Provider value={{song}}>
            <div>
                <SearchBar />
                <SongsList />
            </div>
        </SongContext.Provider>
       
        
>>>>>>> 7c64396ff8f3014f9c91eac746657909e30d9817
    )
}
export default Dashboard;