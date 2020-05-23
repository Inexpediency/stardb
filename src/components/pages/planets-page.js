import React from "react"
import { withRouter } from 'react-router-dom'

import { PlanetList, PlanetDetails } from "../sw-components"
import Row from "../row"

const PlanetsPage = ({ history, match }) => {

    const { id } = match.params

    return (
        <Row
            left={<PlanetList onItemSelected={( id ) => history.push(id)} />}
            right={<PlanetDetails itemId={ id } />}
        />
    )
}

export default withRouter(PlanetsPage)
