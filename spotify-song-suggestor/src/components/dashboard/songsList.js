import React from 'react';

import Song from './song';

import './songcards.css';

const SongsList = (props) => {
    console.log(props.songs)
   return(
       <div className='cardContainer'>
           {props.songs.map((song, id) => {
              return <Song key={id} song={song}/>
           })}
       </div>
   ) 
}
export default SongsList;