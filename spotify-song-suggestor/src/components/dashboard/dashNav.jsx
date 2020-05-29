import React from "react";

const DashNav = props => {
    return (
        <nav className="dashNav">
            <a href="/dashboard/profile">My Profile</a>
            <span>|</span>
            <a href="/dashboard/search">Search Songs</a>
            <a className="signOut" href="/">Sign Out</a>
        </nav>
    )
}

export default DashNav;