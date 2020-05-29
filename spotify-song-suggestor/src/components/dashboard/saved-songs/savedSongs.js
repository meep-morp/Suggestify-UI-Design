import React, { useEffect, useState } from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import SavedList from './ssList';
import { useParams } from 'react-router-dom';


function SavedSongs(props) {
    const [savedSongs, setSavedSongs] = useState([]);
    // const params = useParams('/')
    const { id } = useParams();

    
    useEffect(() => {
        axiosWithAuth()
            .get(`api/songs/save/${localStorage.getItem('User Id')}`)
            .then(res => {
                setSavedSongs(res.data)
            })
    }, []);
    
    console.log(savedSongs)
    return (
        <div className='saved-songs'>
           <SavedList songs={savedSongs} updateSongs={setSavedSongs} />
        </div>
    )
}
export default SavedSongs;