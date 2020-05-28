import React, { useContext } from 'react';

import Song from './song';

const SongsList = (props) => {
    console.log(props.songs)
   return(
       <div>
           {props.songs.map((song, id) => {
              return <Song key={id} song={song}/>
           })}
       </div>
   ) 
}
export default SongsList;