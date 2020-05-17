import React, { Component } from 'react';

import ItemList from '../item-list/item-list';
import PersonDetails from '../person-details/person-details';
import ErrorIndicator from '../error-indicator/error-indicator';

import './people-page.css';
import SwapiService from "../../services/swapi-service";
import Row from "../Row";


export default class PeoplePage extends Component {

    swapiService = new SwapiService()

    state = {
        selectedPerson: null,
        hasError: false
    }

    componentDidCatch(error, info) {
        this.setState({
            hasError: true
        })
    }

    onPersonSelected = (selectedPerson) => {
        this.setState({ selectedPerson })
    };

    render() {

        if (this.state.hasError) {
            return <ErrorIndicator />
        }

        const itemList = (
            <ItemList
                onItemSelected={this.onPersonSelected}
                getData={ this.swapiService.getAllPeople }
                renderItem={({ name, gender, birthYear}) => (
                    `${name} (${gender}, ${birthYear})`
                )} />
        )

        const personDetails = (
            <PersonDetails personId={this.state.selectedPerson} />
        )

        return (
            <Row left={ itemList } right={ personDetails } />
        )
    }
}
