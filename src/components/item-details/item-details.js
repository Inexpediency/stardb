import React, { Component } from 'react'

import './item-details.css'
import SwapiService from "../../services/swapi-service"
import Spinner from "../spinner"

const Record = ({ item, field, label }) => {
    return (
        <li className="list-group-item">
            <span className="term">{ label }:</span>
            <span>{ item[field] }</span>
        </li>
    )
}

export {
    Record
}

export default class ItemDetails extends Component {

    swapiService = new SwapiService()

    state = {
        item: null,
        image: null,
        loading: true
    }

    componentDidMount() {
        this.updateItem()
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (this.props.itemId !== prevProps.itemId ||
            this.props.getData !== prevProps.getData ||
            this.props.getImageUrl !== prevProps.getImageUrl) {
            this.updateItem()
            this.setState({ loading: true })
        }
    }

    updateItem = () => {
        const { itemId, getData, getImageUrl } = this.props
        if (!itemId) {
            return
        }

        getData(itemId)
            .then((item) => {
                this.setState({
                    item,
                    image: getImageUrl(item),
                    loading: false
                })
            })
    }

    render() {

        if (!this.state.item)
            return <span>Select an item from a list</span>

        const { item, image, loading } = this.state

        const spinner = loading ? <Spinner /> : null

        const content = !loading ? <ItemDetailsView item={item} image={image} context={this.props.children}/> : null

        return (
            <div className="item-details card">
                { spinner }
                { content }
            </div>
        )
    }
}

const ItemDetailsView = ({ item, image, context }) => {

    const { name, type } = item

    return (
        <React.Fragment>
            <img className="item-image" alt={`~-~${type}~-~`}
                 src={ image } />

            <div className="card-body">
                <h4>{ name }</h4>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(context, (child) => {
                            return React.cloneElement(child, { item })
                        })
                    }
                </ul>
            </div>
        </React.Fragment>
    )
}
