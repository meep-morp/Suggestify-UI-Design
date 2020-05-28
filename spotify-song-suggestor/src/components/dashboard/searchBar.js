import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';
import { axiosWithAuthDS } from '../utils/axiosWithAuthDS';

const initialSearch = {
    artist: '',
    song: '',
}
const dummyData = [
    {
      album_art: 'https://i.scdn.co/image/ab67616d0000b273441fd03f69579d36801631d9',
      album_name: 'Houses of the Holy (1994 Remaster)',
      artist: 'Led Zeppelin',
      title: 'The Ocean - 1990 Remaster'
    },
    {
      album_art: 'https://i.scdn.co/image/ab67616d0000b273bfe41664b2ca1038b5e3bc6c',
      album_name: 'I Disappear',
      artist: 'Metallica',
      title: 'I Disappear'
    },
    {
      album_art: 'https://i.scdn.co/image/ab67616d0000b273533fd0b248052d04e6b732c0',
      album_name: 'Ride The Lightning (Deluxe Remaster)',
      artist: 'Metallica',
      title: 'Creeping Death (Remastered)'
    },
    {
      album_art: 'https://i.scdn.co/image/ab67616d0000b273eb11e2abccdca41f39ad3b89',
      album_name: 'Too Low For Zero',
      artist: 'Elton John',
      title: 'I Guess That\'s Why They Call It The Blues'
    },
    {
      album_art: 'https://i.scdn.co/image/ab67616d0000b273c199494ba9ea2b73e9208f91',
      album_name: 'Master of Reality (2014 Remaster)',
      artist: 'Black Sabbath',
      title: 'Sweet Leaf - 2014 Remaster'
    }
  ]
const SearchBar = () => {
    const [search, setSearch] = useState(initialSearch);

    const handleChange = e => {
        setSearch({
            ...search,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        axios
          .post(`https://reqres.in/api/users`, dummyData)
          .then((res) => {
              console.log(res)
          })
          .catch((err) => console.log(err.response));
    }
        return(
            <div>
                <form>
                        <input 
                            type='text'
                            name='artist'
                            placeholder='Artist Name'
                            value={search.artist}
                            onChange={handleChange}
                        />
                        <input 
                            type='text'
                            name='song'
                            placeholder='Track Name'
                            value={search.song}
                            onChange={handleChange}
                        />
                        <button onClick={handleSubmit}> Recomendations </button>
                </form>
            </div>
        )
    // artist name and track name
}
export default SearchBar