import React, {Component} from 'react';
import GotService from '../../services/gotService';
import Spinner from '../spinner';
import styled from 'styled-components';

const Char = styled.li`
    cursor: pointer;
`;

export default class ItemList extends Component {

    gotService = new GotService();

    state = {
        charList: null
    }

    componentDidMount() {
        this.gotService.getAllCharacters()
            .then( (charList) => {
                this.setState({
                    charList
                })
            })
    }

    renderItems(arr) {
        return arr.map((item) => {
            const {id, name} = item;
            return (
                <Char 
                key={id}
                onClick={() => this.props.onCharSelected(id )}
                className="list-group-item">
                    {name}
                </Char>
            )
        })
    }

    render() {

        const {charList} = this.state;

        if (!charList) {
            return <Spinner/>
        }

        const items = this.renderItems(charList);

        return (
            <ul className="item-list list-group">
                {items}
            </ul>
        );
    }
}