import React, {Component} from 'react';
import styled from 'styled-components';

const RandomBlock = styled.div`
    background-color: #fff;
    padding: 25px 25px 15px 25px;
    margin-bottom: 40px;
`;

const RandomName = styled.h4`
    margin-bottom: 20px;
    text-align: center;
`;

const RandomTerm = styled.span`
    font-weight: bold;
`;

export default class RandomChar extends Component {

    render() {

        return (
            <RandomBlock className=" rounded">
                <RandomName>Random Character: John</RandomName>
                <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between">
                        <RandomTerm>Gender </RandomTerm>
                        <span>male</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <RandomTerm>Born </RandomTerm>
                        <span>11.03.1039</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <RandomTerm>Died </RandomTerm>
                        <span>13.09.1089</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between">
                        <RandomTerm>Culture </RandomTerm>
                        <span>Anarchy</span>
                    </li>
                </ul>
            </RandomBlock>
        );
    }
}
