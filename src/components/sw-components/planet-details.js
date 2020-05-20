import React from 'react'

import ItemDetails, { Record } from '../item-details'
import { withSwapiService } from '../hoc-helpers'

const PlanetDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="population" label="Population" />
            <Record field="rotationPeriod" label="Rotation Period" />
            <Record field="diameter" label="Diameter" />
            <Record field="climate" label="Climate" />
            <Record field="terrain" label="Terrain" />
        </ItemDetails>
    )
}

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPlanet,
        getImageUrl: swapiService.getPlanetImage
    }
}

export default withSwapiService(PlanetDetails, mapMethodsToProps)
