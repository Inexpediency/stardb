import React from "react"

const LoginPage = ({ isLoggedIn, onLogin }) => {

    const content = (isLoggedIn) => {
        if (isLoggedIn)
            return (
                <React.Fragment>
                    <h5 align="center">You can see a secret page!!! Do it as quickly as possible!!!</h5>
                </React.Fragment>
            )

        return (
            <React.Fragment>
                <h5>Login to see secret page!!!</h5>
                <br/>
                <button className="btn btn-primary" onClick={onLogin}>
                    Login
                </button>
            </React.Fragment>
        )
    }

    return (
        <div className="jumbotron">
            { content(isLoggedIn) }
        </div>
    )
}

export default LoginPage
