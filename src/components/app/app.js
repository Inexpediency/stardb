import React, {Component} from 'react'

import Header from '../header'
import RandomPlanet from '../random-planet'

import './app.css'
import { ErrorIndicator, NotFoundIndicator } from "../errors"
import ErrorBoundary from "../error-boundary"
// import DummySwapiService from "../../services/dummy-swapi-service"

import { SwapiServiceProvider } from '../swapi-service-context'
import SwapiService from "../../services/swapi-service"
import {PeoplePage, PlanetsPage, StarshipsPage, LoginPage, SecretPage, WelcomePage} from "../pages"

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import StarshipDetails from "../sw-components/starship-details";

export default class App extends Component{

    state = {
        selectedItem: null,
        hasError: false,
        swapiService: new SwapiService(),
        isLoggedIn: false
    }

    onLogin = () => {
        this.setState({
            isLoggedIn: true
        })
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ hasError: true })
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        const { isLoggedIn, swapiService } = this.state

        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={swapiService} >
                    <Router>
                        <div className="stardb-app">
                            <Header/>
                            <RandomPlanet />
                            <Switch>
                                <Route path="/" component={WelcomePage} exact />

                                <Route path="/people/:id?" component={PeoplePage} exact/>

                                <Route path="/planets/:id?" component={PlanetsPage} exact/>

                                <Route path="/starships" component={StarshipsPage} exact/>
                                <Route path="/starships/:id" render={({ match }) => {
                                    const { id } = match.params
                                    return <StarshipDetails itemId={id} />
                                }}/>

                                <Route path="/login" render={() => (
                                    <LoginPage isLoggedIn={ isLoggedIn }
                                               onLogin={() => this.onLogin()} />
                                )} exact />

                                <Route path="/secret" render={() => (
                                    <SecretPage isLoggedIn={ isLoggedIn }/>
                                )} exact />

                                <Route component={NotFoundIndicator}/>
                            </Switch>
                        </div>
                    </Router>
                </SwapiServiceProvider>
            </ErrorBoundary>
        )
    }
}
