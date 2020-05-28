import React from "react";

const Footer = props => {
    return (
        <footer>
            <div class="footer-wrapper">
                <div class="footer-section">
                    <h3>Spotify Song Suggester</h3>
                    <p>Lorem ipsum dolor sit amet,
              consectetur adipiscing elit. Nulla.</p>
                    <button>Try it out</button>
                </div>

                <div class="footer-section footer-about">
                    <h3 class="footer-header">ABOUT</h3>
                    <a href="#">About</a>
                    <a href="#">Submit an issue</a>
                    <a href="#">GitHub Repo</a>
                    <a href="#">Slack</a>
                </div>

                <div class="footer-section footer-about">
                    <h3 class="footer-header">SOCIAL MEDIA</h3>
                    <a href="#">Facebook</a>
                    <a href="#">Instagram</a>
                    <a href="#">Twitter</a>
                </div>
            </div>
        </footer>
    )
}

export default Footer