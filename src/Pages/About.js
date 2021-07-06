import React from 'react'

import Tittle from '../Components/Tittle'
import ImageSection from '../Components/ImageSection'
import SkillsSection from '../Components/SkillsSection'
import ServicesSection from '../Components/ServicesSection'

import design from '../Images/design.svg'
import intelligence from '../Images/intelligence.svg'
import gamedev from '../Images/game-dev.svg'

function AboutPage() {
    return (
        <div className="AboutPage">
            <Tittle title={'About Me'} span={'About Me'} />
            <ImageSection />
            <Tittle title={'My Skills'} span={'My Skills'} />
            <div className="skillsContainer">
                <SkillsSection skill={'Javascript'} progress={'95%'} width={'95%'} />
                <SkillsSection skill={'discord.js'} progress={'99%'} width={'99%'} />
                <SkillsSection skill={'Typescript'} progress={'50%'} width={'50%'} />
                <SkillsSection skill={'React'} progress={'70%'} width={'70%'} />
                <SkillsSection skill={'node.js'} progress={'95%'} width={'95%'} />
                <SkillsSection skill={'Python'} progress={'10%'} width={'10%'} />
                <SkillsSection skill={'Java'} progress={'40%'} width={'40%'} />
                <SkillsSection skill={'CSS'} progress={'1%'} width={'1%'} />
            </div>

            <Tittle title={'Purchase'} span={'Purchase'} />
            <div className="servives-container">
                <ServicesSection image={design} title={'Discord Bot  [3$-10$]'} 
                text={'Make a fully functional Discord Bot with custom features!'}
                />
                <ServicesSection image={intelligence} title={'React Website [5$-50$]'} 
                text={'Create a website with react.js , express.js and MongoDB!'}
                />
                <ServicesSection image={gamedev} title={'Custom JavaScript Project'} 
                text={'If you have any custom project which has to be made using node.js!'}
                />

                
            </div>

        </div>
    )
}

export default AboutPage