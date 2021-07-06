import React from 'react'

import ContactItem from '../Components/ContactItem'
import email from '../Images/emailme.svg'
import location from '../Images/location.svg'
import Tittle from '../Components/Tittle'

function ContactPage() {
    return (
        <div>
            <div className="title">
                <Tittle title={'About Me'} span={'About Me'} />
            </div>

            <div className="ContactPage">
                <div className="contact-sect">
                    <ContactItem icon={email} text1={'ytgs.gaming@gmail.com'} text2={''} title={'Gmail'}/>
                    <ContactItem icon={location} text1={'YTGS#2697'} text2={''} title={'Discord'}/>
                </div>
            </div>
        </div>
    )
}

export default ContactPage