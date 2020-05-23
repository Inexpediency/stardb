import React from 'react'

import ItemDetails, { Record } from '../item-details'
import { withSwapiService } from '../hoc-helpers'

const PersonDetails = (props) => {
    return (
        <ItemDetails {...props}>
            <Record field="gender" label="Gender" />
            <Record field="eyeColor" label="Eye Color" />
            <Record field="height" label="Height" />
            <Record field="birthYear" label="Birth Year" />
            <Record field="homeworld" label="Homeworld" />
        </ItemDetails>
    )
}

const mapMethodsToProps = (swapiService) => {
    return {
        getData: swapiService.getPerson,
        getImageUrl: swapiService.getPersonImage
    }
}

export default withSwapiService(mapMethodsToProps)(PersonDetails)
