import React from 'react';
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
                <div className="save">
                    <button className="saveButton" onClick={onSave}>SAVE</button>
                </div>
            </div>
        </div>
    )
}
export default Song;