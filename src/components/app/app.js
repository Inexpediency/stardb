import React, {Component} from 'react'

import Header from '../header'
import RandomPlanet from '../random-planet'

import './app.css'
import ErrorIndicator from "../error-indicator";
import {PersonDetails, PersonList, PlanetList, StarshipList} from "../sw-components";
import ErrorBoundary from "../error-boundary";
import DummySwapiService from "../../services/dummy-swapi-service";

import { SwapiServiceProvider } from '../swapi-service-context';
import SwapiService from "../../services/swapi-service";

export default class App extends Component{

    swapiService = new SwapiService();

    state = {
        selectedPerson: null,
        hasError: false
    }

    componentDidCatch(error, errorInfo) {
        this.setState({ hasError: true })
    }

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        return (
            <ErrorBoundary>
                <SwapiServiceProvider value={this.swapiService} >
                    <div className="stardb-app">
                        <Header/>
                        <RandomPlanet />

                        <PersonList />
                        <PersonDetails itemId={2} />

                        <StarshipList />

                        <PlanetList/>

                    </div>
                </SwapiServiceProvider>
            </ErrorBoundary>
        )
    }
}
