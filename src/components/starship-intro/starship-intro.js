import React from 'react'

import intro from './starship-intro.jpg'
import './starship-intro.css'

const StarshipIntro = () => {
    return (
        <div className="intro-img">
            <div className="ii">
                <img src={intro} alt="Starships"/>
            </div>
        </div>
    )
}

export default StarshipIntro
