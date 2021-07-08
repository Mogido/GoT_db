import React, {Component} from 'react';
import {Col, Row, Container} from 'reactstrap';
import styled from 'styled-components';
import Header from '../header';
import RandomChar from '../randomChar';
import CharacterPage from '../pages/characterPage/characterPage';
import ErrorMessage from '../errorMessage';
import GotService from '../../services/gotService';
import BookPage from '../pages/bookPage';
import HousePage from '../pages/housePage';

const ToggleButton = styled.button`
margin: 20px auto;
background-color: darkblue;
color: #fff;
border: none;
display: block;
box-sizing: border-box;
padding: 10px 20px;
font-weight: bold;
`


export default class App extends Component  {

    gotService = new GotService();

    constructor() {
        super();
        this.onToggleRandomCharacter();
    }

    state = {
        showRandomBlock: true,
        error: false
    }

    componentDidCatch() {
        console.log('error');
        this.setState({
            error: true
        })
    }

    onToggleRandomCharacter = () => {
        this.setState({
            showRandomBlock: !this.state.showRandomBlock
        })
    }

    

    render () {

        const { showRandomBlock, error } = this.state;

        const RandomBlock = showRandomBlock ? <RandomChar/> : null;


        if (error) {
            return <ErrorMessage/>
        }

        return (
            <> 
                <Container>
                    <Header />
                </Container>
                <Container>
                    <Row>
                        <Col lg={{size: 5, offset: 0}}>
                            {RandomBlock}
                            <ToggleButton onClick={this.onToggleRandomCharacter} type='button'>Toggle random character</ToggleButton>
                        </Col>
                    </Row>
                    <CharacterPage/>
                    <BookPage/>
                    <HousePage/>
                </Container>
            </>
        )
    }
        

};

