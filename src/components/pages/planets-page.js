import React, {Component} from "react"
import Row from "../row"
import { PlanetList } from "../sw-components"
import PlanetDetails from "../sw-components/planet-details"

export default class PlanetsPage extends Component {
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
                left={<PlanetList onItemSelected={this.onItemSelected}/>}
                right={<PlanetDetails itemId={selectedItem} />}
            />
        )
    }
}