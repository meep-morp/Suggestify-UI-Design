import React from 'react';
import { axiosWithAuth } from '../../utils/axiosWithAuth';
import { useParams, useHistory } from 'react-router-dom';

const Song = (props) => {
    const { id } = useParams();
    const { push } = useHistory();

    const saveSong = song => {
        axiosWithAuth()
            .post(`api/songs/save/${id}`, song)
            .then(res => {
                console.log(`Post was susccesful: ${res}`);
                push('/dashboard/save/')
            })
            .catch(err => {
                console.log(err)
            })
    }

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
                <div>
                    <button className="saveButton" onClick={() => saveSong(props.song)}>SAVE</button>
                </div>
            </div>
        </div>
    )
}
export default Song;