import React, { useState, useEffect } from 'react';
import PrivateRoute from '../utils/privateRoute';
import axios from 'axios';
import SearchBar from './searchBar';
import SongsList from './songsList';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import MyProfile from './myProfile';
import { useParams } from 'react-router-dom';

// const url = `https://spotify-3-ds.herokuapp.com/search/${search.artist}/${search.song}`;
const initialMessage = "Search among thousands of songs";

function Dashboard() {
  const [songs, setSongs] = useState([]);
  const [message, setMessage] = useState(initialMessage);
  const [savedSongs, setSavedSongs] = useState({});

  useEffect(() => {
    setMessage("Loading...");
    axiosWithAuth()
      .get(`/api/songs`)
      .then(res => {
        document.querySelector(".preSearch")
          .classList.remove("preSearch");
        setSongs(res.data)
        setMessage("");
      })
  }, [])

  return (
    <div className="dashboard">
      <PrivateRoute path="/dashboard/profile">
        <MyProfile savedSongs={savedSongs} setSavedSongs={setSavedSongs} />
      </PrivateRoute>
      <PrivateRoute path="/dashboard/search">
        <div className="preSearch">
          <SearchBar setSongs={setSongs} setMessage={setMessage} />
          <SongsList songs={songs} message={message} />
        </div>
      </PrivateRoute>
    </div>
  )
}
export default Dashboard;