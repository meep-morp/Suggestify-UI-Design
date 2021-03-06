import React from "react";
import Song from "./song";

import "./songcards.css";

const SongsList = props => {
	let src = "src=";
	let length = "https://plotly.com/~mherbert93/1.embed".length;

	const convertToElement = elmnt => {
		const dom = document.createElement("div");

		dom.classList.add("iFrame");
		dom.innerHTML = elmnt;

		return dom;
	};

	return (
		<div>
			<div className="message">{props.message}</div>
			<div className="cardContainer">
				{props.songs.map((song, id) => (
					<Song key={id} song={song} />
				))}
			</div>
		</div>
	);
};
export default SongsList;
