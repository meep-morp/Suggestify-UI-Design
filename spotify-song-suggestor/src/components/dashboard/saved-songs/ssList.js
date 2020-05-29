import React from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { useParams, useHistory } from 'react-router-dom';

const SavedList = (props) => {
    const { id } = useParams();
    const history = useHistory();

    const deleteSong = (song) => {
        axiosWithAuth()
        .delete(`api/songs/${song.id}`)
        .then(res => {
            const undeletedSongs = props.songs.filter(song => {
                if(song.id !== res.data){
                  return song
                }
              })
              props.updateSongs(undeletedSongs);
              history.go(0)
        })
    }

    return(
        <div className="savedSongs container">
             <h2 className="title">SAVED SONGS</h2>
            <div className="legend">
                <p>TITLE</p>
                <p>ALBUM</p>
                <p>ARTIST</p>
            </div>
            {props.songs === [] || props.songs === undefined ?
            <h2>Save songs to listen again and again</h2> :
            props.songs.map((song, id) => {
                return (
                    <div className='savedSongs'>
                    <div className='sImg'>
                        <img src={song.album_art} />
                    </div>
                    <div className='sInfo'>
                        <div>
                            <h2>Song </h2> 
                            <p>{song.title}</p>
                        </div>
                        
                        <div>
                            <h2>Album </h2>
                            <p>{song.album_name}</p>
                        </div>
        
                        <div>
                            <h2>Artist </h2>
                            <p>{song.artist}</p>
                        </div>
                        <div>
                            <button onClick={(e) => {
                                e.stopPropagation();
                                deleteSong(song)
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