import React, { useState, useEffect } from 'react';
import PrivateRoute from '../utils/privateRoute';
import axios from 'axios';
import SearchBar from './search/searchBar';
import SongsList from './search/songsList';
import SavedSongs from './saved-songs/savedSongs';

import { axiosWithAuth } from '../utils/axiosWithAuth';
import MyProfile from './profile/myProfile';
import { useParams } from 'react-router-dom';
import UpdateForm from './profile/updateProfile';
import DashNav from './dashNav';

// const url = `https://spotify-3-ds.herokuapp.com/search/${search.artist}/${search.song}`;
const initialMessage = "Search among thousands of songs";

function Dashboard() {
  const [songs, setSongs] = useState([]);
  const [message, setMessage] = useState(initialMessage);

  return (
    <div className="dashboard">
      <DashNav />
      <PrivateRoute path="/dashboard/profile/:id">
        <MyProfile />
      </PrivateRoute>
      <PrivateRoute path={`/dashboard/update-profile/${localStorage.getItem('User Id')}`}>
        <UpdateForm />
      </PrivateRoute>

      <PrivateRoute path="/dashboard/search">
        <div className="preSearch">
          <SearchBar setSongs={setSongs} setMessage={setMessage} />
          <SongsList songs={songs} message={message} />
        </div>
      </PrivateRoute>
      
      <PrivateRoute path='/dashboard/save/:id'>
        <SavedSongs />
      </PrivateRoute>
    </div>
  )
}
export default Dashboard;