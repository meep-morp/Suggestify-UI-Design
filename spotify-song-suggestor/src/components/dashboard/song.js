import React from 'react';

const Song = (props) => {
    return(
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
                
            </div>
        </div>
    )
}
export default Song;