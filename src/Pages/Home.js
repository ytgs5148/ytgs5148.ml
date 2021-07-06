import React from 'react'
import SidebarItems from '../Utils/socialMediaItems'
import {faGithub , faYoutube , faDiscord} from '@fortawesome/free-brands-svg-icons'

function HomePage() 
{
    return (
        <div className="HomePage">
            <header className="hero">
                <h1 className="hero-text">
                    Hi, I am 
                    <span> YTGS.</span>
                </h1>
                <p className="h-sub-text">
                    I am a JavaScript Developer who likes to create Websites and Discord BOTS. Learning web scrapping and Spigot! I watch 
                    animes a lot!
                </p>
                <div className="icons">
                    <SidebarItems onClick="/contact"                                             icon={faDiscord} />
                    <SidebarItems onClick="http://github.com/ytgs5148"                           icon={faGithub} />
                    <SidebarItems onClick="http://youtube.com/channel/UCvqAHYpbQDyo-gZS7nF8GMA"  icon={faYoutube} />
                </div>
            </header>
        </div>
    )
}

export default HomePage
