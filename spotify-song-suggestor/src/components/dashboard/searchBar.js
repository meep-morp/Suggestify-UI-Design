import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';
<<<<<<< HEAD
// import { axiosWithAuthDS } from '../utils/axiosWithAuthDS';
=======
import { axiosWithAuthDS } from '../utils/axiosWithAuthDS';
>>>>>>> 7c64396ff8f3014f9c91eac746657909e30d9817

const initialSearch = {
    artist: '',
    song: '',
}
<<<<<<< HEAD

const SearchBar = (props) => {
=======
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
>>>>>>> 7c64396ff8f3014f9c91eac746657909e30d9817
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
<<<<<<< HEAD
          .post(`https://spotify-3-ds.herokuapp.com/search/${search.artist}/${search.song}`)
          .then((res) => {
              props.setSongs(res)
          })
          .catch((err) => props.setSongs('Invalid Search Try Again'));
=======
          .post(`https://reqres.in/api/users`, dummyData)
          .then((res) => {
              console.log(res)
          })
          .catch((err) => console.log(err.response));
>>>>>>> 7c64396ff8f3014f9c91eac746657909e30d9817
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
<<<<<<< HEAD
=======
    // artist name and track name
>>>>>>> 7c64396ff8f3014f9c91eac746657909e30d9817
}
export default SearchBar