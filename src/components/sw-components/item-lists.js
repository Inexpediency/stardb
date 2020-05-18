import React from "react"

import { withData } from "../hoc-helpers"
import ItemList from "../item-list"
import withSwapiService from "../hoc-helpers/with-swapi-service"

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped { ...props }>
                { fn }
            </Wrapped>
        )
    }
}

// Render list instance label
const renderNameAndGender = ({name, gender}) =>
    <span>{name}, &nbsp;{gender}</span>

const renderNameAndModel = ({ name, model }) =>
    <span>{name}, &nbsp;{model}</span>

const renderNameAndPopulation = ({ name, population }) =>
    <span>{name}, &nbsp;{population} {population !== 'unknown' ? 'people' : null}</span>

// Transform methods
const mapPersonMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPeople
    }
}
const mapPlanetMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllPlanets
    }
}
const mapStarshipMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getAllStarships
    }
}

// Forming lists
const PersonList = withSwapiService(
    withData(withChildFunction(ItemList, renderNameAndGender)),
    mapPersonMethodsToProps
)
const PlanetList = withSwapiService(
    withData(withChildFunction(ItemList, renderNameAndPopulation)),
    mapPlanetMethodsToProps
)
const StarshipList = withSwapiService(
    withData(withChildFunction(ItemList, renderNameAndModel)),
    mapStarshipMethodsToProps
)

export {
    PersonList,
    PlanetList,
    StarshipList
}
