import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faAt } from '@fortawesome/free-solid-svg-icons'

function Social() {
    return (
        <div className="social">
            <a href="https://github.com/allyzhang1311" target="_blank" rel='noopener noreferrer'
                className="social-icon">
                <FontAwesomeIcon icon={faGithub} size="2x" />
            </a>
            <a href="https://www.linkedin.com/in/allyzhang1311/" target="_blank" rel='noopener noreferrer'
                className="social-icon">
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
            </a>
            <a href="mailto:ally.zhang.1311@gmail.com" target="_blank" rel='noopener noreferrer'
                className="social-icon">
                <FontAwesomeIcon icon={faAt} size="2x" />
            </a>
            <p>
                Site by me, photo by <a href="https://www.instagram.com/lilmango24/">Lauren</a>
            </p>
        </div>
    )
}

function Home() {
    return (
        <>
            <h2>Welcome</h2>
            <div className="main-text">
                <p>
                    I'm a senior at Cornell University pursuing a B.A. in
                    Computer Science and Linguistics. I love developing tools that
                    help people learn and communicate - or just go about their daily
                    business that much quicker. My main areas of interest are database
                    systems, web development and natural language processing.
                    I'll be graduating in December 2020 as a budding
                    software engineer and linguist. Until then, stay tuned!
                </p>

                <p>
                    You can find me at the links below, or just click around.
                </p>
            </div>
            <Social />
        </>
    );
}

export default Home