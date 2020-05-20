import React, {Component} from "react"
import Row from "../row"
import { StarshipList } from "../sw-components"
import StarshipDetails from "../sw-components/starship-details"

export default class PeoplePage extends Component {
    state = {
        selectedItem: null
    }

    onItemSelected = (selectedItem) => {
        this.setState({selectedItem})
    }

    render() {
        const { selectedItem } = this.state
        return (
            <Row
                left={<StarshipList onItemSelected={this.onItemSelected}/>}
                right={<StarshipDetails itemId={selectedItem} />}
            />
        )
    }
}