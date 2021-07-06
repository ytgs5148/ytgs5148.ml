import React from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome'

function SidebarItems({onClick , icon}) {
    return (
        <a className="icon-holder" href={onClick} >
            <FontAwesomeIcon icon={icon} className="icon gh" />
        </a>
    )
}

export default SidebarItems
