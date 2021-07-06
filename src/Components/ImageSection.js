import React from 'react'

function ImageSection() {
    return (
        <div className="ImageSection">

            <div className="about-info">
                <div className="about-details">
                    <div className="left-section">
                        <p>Name</p>
                        <p>Age</p>
                        <p>Languages</p>
                        <p>Hobby</p>
                        <p>Games</p>
                    </div>
                    <div className="right-section">
                        <p>: YTGS</p>
                        <p>: 16</p>
                        <p>: JavaScript</p>
                        <p>: Animes , Programming and Gaming</p>
                        <p>: Genshin Impact and sometimes Minecraft</p>
                    </div>
                </div>
                {/* <button className="btn">Download Cv</button> */}
            </div>
        </div>
    )
}

export default ImageSection;
