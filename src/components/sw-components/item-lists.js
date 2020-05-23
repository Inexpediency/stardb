import React from "react"

import { withData, withSwapiService, withChildFunction, compose } from "../hoc-helpers"
import ItemList from "../item-list"


const renderNameAndGender = ({name, gender}) =>
    <span>{name}, &nbsp;{gender}</span>

const renderNameAndModel = ({ name, model }) =>
    <span>{name}, &nbsp;{model}</span>

const renderNameAndPopulation = ({ name, population }) =>
    <span>{name}, &nbsp;{population} {population !== 'unknown' ? 'people' : null}</span>


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


const PersonList = compose(
    withSwapiService(mapPersonMethodsToProps),
    withData,
    withChildFunction(renderNameAndGender)
)(ItemList)

const PlanetList = compose(
    withSwapiService(mapPlanetMethodsToProps),
    withData,
    withChildFunction(renderNameAndPopulation)
)(ItemList)

const StarshipList = compose(
    withSwapiService(mapStarshipMethodsToProps),
    withData,
    withChildFunction(renderNameAndModel)
)(ItemList)


export {
    PersonList,
    PlanetList,
    StarshipList
}
