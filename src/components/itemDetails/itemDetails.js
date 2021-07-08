import React, {Component} from 'react';
import GotService from '../../services/gotService';
import styled from 'styled-components';


const Details = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;            
`;

const ItemName = styled.h4`
    margin-bottom: 20px;
    text-align: center;
`;

const ErrorMessage = styled.span`
font-weight: bold;
color: #fff;
box-sizing: border-box;
border: 1px solid #fff;
padding: 10px 20px;
margin: 0 auto;
display: block;
text-align: center;
`;

const Field = ({item, field, label}) => {
    return (
        <li className="list-group-item d-flex justify-content-between">
            <span className="term">{label}</span>
            <span>{item[field]}</span>
        </li>
    )
}

export {
    Field
}

export default class ItemDetails extends Component {

    gotService = new GotService();

    state = {
        item: null
    }

    componentDidMount() {
        this.updateItem();
    }

    componentDidUpdate(prevProps) {
        if (this.props.itemId !== prevProps.itemId) {
            this.updateItem();
        }
    }

    updateItem() {
        const {itemId, getData} = this.props;
        
        if (!itemId) {
            return;
        }
        getData(itemId)
            .then((item) => {
                this.setState({item})
            })
    }

    render() {

        const {category} = this.props;

        if (!this.state.item) {
            return <ErrorMessage >Please select a {category}</ErrorMessage>
        }
        const {item} = this.state;
        const {name} = item;

        return (
            <Details className=" rounded">
                <ItemName>{name}</ItemName>
                <ul className="list-group list-group-flush">
                    {
                        React.Children.map(this.props.children, (child) => {
                            return React.cloneElement(child, {item})
                        })
                    }
                </ul>
            </Details>
        );
    }
}