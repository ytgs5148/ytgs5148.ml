import React from 'react'
import {NavLink} from 'react-router-dom'

function SidebarItems({value , onClick}) {
    if (onClick == "/redirect") {
        return (
            <li className="nav-item">
                <a activeClassName="active" href="https://myanimelist.net/profile/ytgs5148">
                    {value}
                </a>
            </li>
        )
    }

    return (
        <li className="nav-item">
            <NavLink to={onClick} exact activeClassName="active">
                {value}
            </NavLink>
        </li>
    )
}

export default SidebarItems