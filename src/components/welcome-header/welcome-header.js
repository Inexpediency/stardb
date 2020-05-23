import React from "react"

import './welcome-header.css'
import intro from './welcome-header.jpg'

const WelcomeHeader = () => {
    return (
        <div className="row mb2 w-header">
            <div className="col-md-6">
                <div className="description">
                    <h1 className="display-4">Star Data Base</h1>
                    <p className="lead">
                        Welcome to our website.
                    </p>
                    <p className="lead">
                        Here you can see illustrations of person, planets, and spaceships from the
                        Star Wars movie series and a little information about them.
                    </p>
                    <hr className="my-4" />
                    <p className="minor">
                        © Copyright 2020. Developer - <a href="https://ythosa.github.io">Ythosa</a>.
                    </p>
                </div>
            </div>
            <div className="col-md-6">
                <div className="intro-img">
                    <img src={intro} alt="intro"/>
                </div>
            </div>
        </div>
    )
}

export default WelcomeHeader
