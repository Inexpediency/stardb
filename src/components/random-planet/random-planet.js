import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Spinner from '../spinner'
import SwapiService from '../../services/swapi-service'
import { ErrorIndicator } from "../errors"

import './random-planet.css'

export default class RandomPlanet extends Component {

    static defaultProps = {
        updateInterval: 3000
    }

    static propTypes = {
        updateInterval: PropTypes.number
    }

    swapiService = new SwapiService()

    state = {
        planet: {},
        loading: true,
        error: false
    };

    componentDidMount() {
        const { updateInterval } = this.props
        this.updatePlanet()
        this.interval = setInterval(this.updatePlanet, updateInterval)
    }

    componentWillUnmount() {
        clearInterval(this.interval)
    }

    onPlanetLoaded = (planet) => {
        this.setState({
            planet,
            loading: false
        });
    };

    onError = (err) => {
        this.setState({
            loading: false,
            error: true
        });
    }

    updatePlanet = () => {
        let id = 20
        while (id === 20 ) {
            id = Math.floor(Math.random()*19) + 2
        }

        this.swapiService
            .getPlanet(id)
            .then(this.onPlanetLoaded)
            .catch((err) => this.onError())
    }

    render() {
        const { planet, loading, error } = this.state

        const hasData = !(loading || error)

        const errorMessage = error ? <ErrorIndicator /> : null
        const spinner = loading ? <Spinner /> : null
        const content = hasData ? <PlanetView planet={planet}/> : null

        return (
            <div className="random-planet jumbotron rounded">
                {errorMessage}
                {spinner}
                {content}
            </div>
        );
    }
}

const PlanetView = ({ planet }) => {

    const { id, name, population, rotationPeriod, diameter } = planet

    return (
        <React.Fragment>
            <img className="planet-image"
                 src={`https://starwars-visualguide.com/assets/img/planets/${id}.jpg`}  alt={'Planet'}/>
            <div>
                <h4>{name}</h4>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item">
                        <span className="term">Population</span>
                        <span>{population}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Rotation Period</span>
                        <span>{rotationPeriod}</span>
                    </li>
                    <li className="list-group-item">
                        <span className="term">Diameter</span>
                        <span>{diameter}</span>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}
