export default class SwapiService {

    _apiBase = 'https://swapi.dev/api'
    _imageBase = 'https://starwars-visualguide.com/assets/img'

    getResource = async (url) => {
        const res = await fetch(`${this._apiBase}${url}`)

        if (!res.ok) {
            throw new Error(`Could not fetch ${url}` +
                `, received ${res.status}`)
        }
        return await res.json()
    }

    getAllPeople = async () => {
        const res = await this.getResource(`/people/`)
        return res.results.map(this._transformPerson)
    }

    getPerson = async (id) => {
        let person = await this.getResource(`/people/${id}/`)
        person = this._transformPerson(person)
        person.homeworld = await this._transformHomeworld(person.homeworld)

        return person
    }

    getAllPlanets = async () => {
        const res = await this.getResource(`/planets/`)
        return res.results.map(this._transformPlanet).slice(1)
    }

    getPlanet = async (id) => {
        const planet = await this.getResource(`/planets/${id}/`)
        return this._transformPlanet(planet)
    }

    getAllStarships = async () => {
        const res = await this.getResource(`/starships/`)
        return res.results.map(this._transformStarship).slice(2, -1)
    }

    getStarship = async (id) => {
        const starship = await this.getResource(`/starships/${id}/`)
        return this._transformStarship(starship)
    }

    getPersonImage = ({ id }) => {
        return `${this._imageBase}/characters/${id}.jpg`
    }

    getStarshipImage = ({ id }) => {
        return `${this._imageBase}/starships/${id}.jpg`
    }

    getPlanetImage = ({ id }) => {
        return `${this._imageBase}/planets/${id}.jpg`
    }

    _extractId = (item) => {
        const idRegExp = /\/([0-9]*)\/$/
        return item.url.match(idRegExp)[1]
    }

    _transformPlanet = (planet) => {
        return {
            id: this._extractId(planet),
            name: planet.name,
            population: planet.population,
            rotationPeriod: planet.rotation_period,
            diameter: planet.diameter,
            climate: planet.climate,
            terrain: planet.terrain,
            type: "planet"
        };
    }

    _transformStarship = (starship) => {
        return {
            id: this._extractId(starship),
            name: starship.name,
            model: starship.model,
            manufacturer: starship.manufacturer,
            costInCredits: starship.cost_in_credits,
            length: starship.length,
            crew: starship.crew,
            passengers: starship.passengers,
            cargoCapacity: starship.cargo_capacity,
            type: "starship"
        }
    }

    _transformPerson = (person) => {
        return {
            id: this._extractId(person),
            name: person.name,
            gender: person.gender,
            birthYear: person.birth_year,
            eyeColor: person.eye_color,
            hairColor: person.hair_color,
            mass: person.mass,
            height: person.height,
            homeworld: person.homeworld,
            type: "person"
        }
    }

    _transformHomeworld = async (url) => {
        const idRegExp = /\/([0-9]*)\/$/;
        const planetId = url.match(idRegExp)[1]

        const planet = await this.getResource(`/planets/${planetId}/`);
        return await planet.name
    }
}
