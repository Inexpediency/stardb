import SwapiService from "../../services/swapi-service";
import { withData } from "../hoc-helpers";
import ItemList from "../item-list";

const {
    getAllPeople,
    getAllStarships,
    getAllPlanets
} = new SwapiService()

const PersonList = withData(ItemList, getAllPeople)

const PlanetList = withData(ItemList, getAllPlanets)

const StarshipList = withData(ItemList, getAllStarships)

export {
    PersonList,
    PlanetList,
    StarshipList
}