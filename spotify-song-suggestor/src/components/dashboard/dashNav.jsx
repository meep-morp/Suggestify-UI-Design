import React from "react";

const DashNav = props => {
    return (
        <nav className="dashNav">
            <a href="http://spotify-song-suggester.netlify.app">My Profile</a>
            <span>|</span>
            <a href="/dashboard/search">Search Songs</a>
            <a href="/">Sign Out</a>
        </nav>
    )
}

export default DashNav;