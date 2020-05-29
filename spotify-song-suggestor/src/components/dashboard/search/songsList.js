import React from 'react';
import Iframe from "react-iframe";
import Song from './song';

import './songcards.css';

const SongsList = (props) => {
    const convertToElement = (elmnt) => {
        const dom = document.createElement("div");

        dom.classList.add("iFrame");
        dom.innerHTML = elmnt;

        return dom
    }

    return (
        <div>
            <div className="message">{props.message}</div>
            <div className='cardContainer'>
                {props.songs.map((song, id) => (
                    (id === props.songs.length - 1)
                        ? <div className="iframeContainer">
                            <iframe
                                src={song.iframe}
                                className="igraph"
                                scrolling="none"
                            >
                            </iframe>
                        </div> :
                        <Song key={id} song={song} />
                ))}
            </div>
        </div>
    )
}
export default SongsList; 