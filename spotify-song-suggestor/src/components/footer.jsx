import React from "react";

const Footer = props => {
    return (
        <footer>
            <div className="footer-wrapper">
                <div className="footer-section">
                    <h3>Suggestify</h3>
                    <p>Find and visualize songs
                        that fit your personal taste.</p>
                    <button>Try it out</button>
                </div>

                <div className="footer-section footer-about">
                    <h3 className="footer-header">ABOUT</h3>
                    <a href="#">About</a>
                    <a href="#">Submit an issue</a>
                    <a href="#">GitHub Repo</a>
                    <a href="#">Slack</a>
                </div>

                <div className="footer-section footer-about">
                    <h3 className="footer-header">SOCIAL MEDIA</h3>
                    <a href="#">Facebook</a>
                    <a href="#">Instagram</a>
                    <a href="#">Twitter</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer