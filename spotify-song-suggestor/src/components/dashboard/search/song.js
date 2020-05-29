import React from 'react';
<<<<<<< HEAD:spotify-song-suggestor/src/components/dashboard/search/song.js
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { useParams, useHistory } from 'react-router-dom';

const Song = (props) => {
    const { id } = useParams();
    const { push } = useHistory();

    const saveSong = song => {
        axiosWithAuth()
            .post(`api/songs/save/${id}`, song)
            .then(res => {
                console.log(`Post was susccesful: ${res}`);
                push('/dashboard/save/')
            })
            .catch(err => {
                console.log(err)
            })
    }

    return(
=======
import axios from 'axios';

const Song = (props) => {

    const onSave = event => {
        axios.post(`https://spotsuggest.herokuapp.com/save/${props.song.song_id}`)
            .then(response => {
                console.log(response);
            })
            .catch(error => {
                console.log(error);
            })
    }

    return (
>>>>>>> 3c8a66eda1c358116cc50e4f5bd2e1bb7a987388:spotify-song-suggestor/src/components/dashboard/song.js
        <div className='song'>
            <div className='sImg'>
                <img src={props.song.album_art} />
            </div>
            <div className='sInfo'>
                <div>
                    <h2>Song </h2>
                    <p>{props.song.title}</p>
                </div>

                <div>
                    <h2>Album </h2>
                    <p>{props.song.album_name}</p>
                </div>

                <div>
                    <h2>Artist </h2>
                    <p>{props.song.artist}</p>
                </div>
<<<<<<< HEAD:spotify-song-suggestor/src/components/dashboard/search/song.js
                <div>
                    <button onClick={() => saveSong(props.song)}>SAVE</button>
=======
                <div className="save">
                    <button className="saveButton" onClick={onSave}>SAVE</button>
>>>>>>> 3c8a66eda1c358116cc50e4f5bd2e1bb7a987388:spotify-song-suggestor/src/components/dashboard/song.js
                </div>
            </div>
        </div>
    )
}
export default Song;