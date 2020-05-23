import React from "react"
import { StarshipList } from "../sw-components"
import { withRouter } from 'react-router-dom'
import Row from "../row";
import StarshipIntro from "../starship-intro"

const StarshipsPage = ({ history }) => {
    return (
        <Row
            left={<StarshipList onItemSelected={(itemId) => history.push(itemId)} />}
            right={<StarshipIntro />}
        />
    )
}

export default withRouter(StarshipsPage)