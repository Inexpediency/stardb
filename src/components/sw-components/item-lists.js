import SwapiService from "../../services/swapi-service";
import { withData } from "../hoc-helpers";
import ItemList from "../item-list";
import React from "react";

const {
    getAllPeople,
    getAllStarships,
    getAllPlanets
} = new SwapiService()

const withChildFunction = (Wrapped, fn) => {
    return (props) => {
        return (
            <Wrapped { ...props }>
                { fn }
            </Wrapped>
        )
    }
}

const renderNameAndGender = ({name, gender}) =>
    <span>{name}, &nbsp;{gender}</span>

const renderNameAndModel = ({ name, model }) =>
    <span>{name}, &nbsp;{model}</span>

const renderNameAndPopulation = ({ name, population }) =>
    <span>{name}, &nbsp;{population} {population !== 'unknown' ? 'people' : null}</span>

const PersonList = withData(withChildFunction(ItemList, renderNameAndGender), getAllPeople)

const PlanetList = withData(withChildFunction(ItemList, renderNameAndPopulation), getAllPlanets)

const StarshipList = withData(withChildFunction(ItemList, renderNameAndModel), getAllStarships)

export {
    PersonList,
    PlanetList,
    StarshipList
}