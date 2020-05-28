import React, { useContext } from 'react';
<<<<<<< HEAD

import Song from './song';

const SongsList = (props) => {
    console.log(props.songs)
   return(
       <div>
           {props.songs.map((song, id) => {
              return <Song key={id} song={song}/>
           })}
=======
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
>>>>>>> 7c64396ff8f3014f9c91eac746657909e30d9817
       </div>
   ) 
}
export default SongsList;