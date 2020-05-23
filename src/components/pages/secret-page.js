import React from "react"
import { Redirect } from "react-router-dom"

const SecretPage = ({ isLoggedIn }) => {
    if (isLoggedIn) {
        return (
            <div className="jumbotron text-center">
                <h5>This page is full of secrets!!!</h5>
            </div>
        )
    }

    return <Redirect to="/login" />
}

export default SecretPage
