import React from 'react';

const Song = (props) => {
    return(
        <div className='song'>
            <img src={props.song.album_art} />
            <h2>{props.song.album_name}</h2>
            <p>{props.song.artist} </p> 
            <p>{props.song.title}</p> 
        </div>
    )
}
export default Song;