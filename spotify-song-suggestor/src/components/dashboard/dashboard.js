import React, { useState, useEffect } from 'react'
import axios from 'axios';

import { SongContext } from '../contexts/SongContext';

import SearchBar from './searchBar';
import SongsList from './songsList';
import { axiosWithAuth } from '../utils/axiosWithAuth';



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
       
        
    )
}
export default Dashboard;