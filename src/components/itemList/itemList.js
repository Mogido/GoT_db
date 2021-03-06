import React, {Component} from 'react';
import Spinner from '../spinner';
import styled from 'styled-components';

const ListItem = styled.li`
    cursor: pointer;
`;

export default class ItemList extends Component {


    state = {
        itemList: null
    }

    componentDidMount() {
        const {getData} = this.props;

        getData()
            .then( (itemList) => {
                this.setState({
                    itemList
                })
            })
    }

    renderItems(arr) {
        return arr.map((item) => {
            const {id} = item;
            const label = this.props.renderItem(item)
            return (
                <ListItem 
                key={id}
                onClick={() => this.props.onItemSelected(id )}
                className="list-group-item">
                    {label}
                </ListItem>
            )
        })
    }

    render() {

        const {itemList} = this.state;

        if (!itemList) {
            return <Spinner/>
        }

        const items = this.renderItems(itemList);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}