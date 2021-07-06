import React from 'react'
import avatar from '../Images/avatar.png'
import SidebarItems from '../Utils/sidebarItems'

function Navbar() {
    return (
        <div className="NavBar">
            <nav className="nav">

                <div className="profile">
                    <img src={avatar} alt=""/>
                 </div>

                {/* Sidebar Menus */}
                <ul className="nav-items">
                    <SidebarItems onClick="/home" value="Home" />
                    <SidebarItems onClick="/about" value="About Me" />
                    <SidebarItems onClick="/portfolios" value="Projects" />
                    <SidebarItems onClick="/redirect" value="Anime List" />
                    <SidebarItems onClick="/contact" value="Contact" />
                </ul>

                <footer className="footer">
                    <p> @{new Date().getFullYear()} YTGS </p>
                </footer>

            </nav>
        </div>
    )
}

export default Navbar