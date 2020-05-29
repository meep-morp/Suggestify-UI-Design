import React from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { useParams } from 'react-router-dom';

const SavedList = (props) => {
    const { id } = useParams()
    const deleteSong = (song) => {
        axiosWithAuth()
        .delete(`api/songs/${id}`)
        .then(res => {
            const undeletedSongs = props.songs.filter(song => {
                if(song.song_id !== res.data){
                  return song
                }
              })
              props.updateSavedSongs(undeletedSongs);
        })
    }
    return(
        <div>
            {props.songs.map((song, id) => {
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
                        <div>
                            <button onClick={(e) => {
                                e.stopPropagation();
                                deleteSong(props.song)
                            }}>Delete</button>
                        </div>
                    </div>
                    </div>
                )
            })}
         </div>
    )
}
export default SavedList;