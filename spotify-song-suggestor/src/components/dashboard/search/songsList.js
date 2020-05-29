import React from 'react';

import Song from './song';

import './songcards.css';

const SongsList = (props) => {
    console.log(props.songs)

    return (
        <div>
            <div className="message">{props.message}</div>
            <div className='cardContainer'>
                {props.songs.map((song, id) => {
                    return <Song key={id} song={song} />
                })}
            </div>
        </div>
    )
}
export default SongsList; 