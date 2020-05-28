import React, { useState } from 'react';
import { axiosWithAuth } from '../utils/axiosWithAuth';
import axios from 'axios';
// import { axiosWithAuthDS } from '../utils/axiosWithAuthDS';

const initialSearch = {
    artist: '',
    song: '',
}

const SearchBar = (props) => {
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
          .post(`https://spotify-3-ds.herokuapp.com/search/${search.artist}/${search.song}`)
          .then((res) => {
              props.setSongs(res)
              props.setMessage('');
          })
          .catch((err) => props.setMessage('Invalid Search Try Again'));
    }
        return(
            <div>
                <form className="form searchBar">
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
                        <button onClick={handleSubmit}> SEARCH </button>
                </form>
            </div>
        )
}
export default SearchBar