import React, { useContext } from 'react';
import { SongContext } from '../contexts/SongContext';

import Song from './song';

const SongsList = () => {
   const { song } = useContext(SongContext)
   console.log(song)
   return(
       <div>
           {/* {song.data.map(song => {
              return <Song key={song.id} song={song}/>
           })} */}
       </div>
   ) 
}
export default SongsList;