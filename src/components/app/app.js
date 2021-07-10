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
import BooksItem from '../pages/booksItem';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import img from './img/got.jpeg';

const ToggleButton = styled.button`
margin: 20px auto;
background-color: darkblue;
color: #fff;
border: none;
display: block;
box-sizing: border-box;
padding: 10px 20px;
font-weight: bold;
`;

const MainTitle = styled.h1`
margin: 0 auto;
text-align: center;
color: #fff;
padding: 20px;
box-sizing: border-box;
border: 1px solid #fff;
`;

const AppContainer = styled.div`
overflow-x: hidden;
background: url(${img}) center center no-repeat;
background-size: cover;
font-size: 16px;
height: 100%;	
`;


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
           <Router>
                <AppContainer> 
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
                        <Route path='/' exact component={() => <MainTitle>Welcome to Game Of Thrones Data Base</MainTitle>} />
                        <Route path='/characters/' component={CharacterPage} />
                        <Route path='/houses/' component={HousePage} />
                        <Route path='/books/' exact component={BookPage} />
                        <Route path='/books/:id' render={
                            ({match}) => {
                                const {id} = match.params;
                            return <BooksItem bookId={id} />}
                        }/>
                    </Container>
                </AppContainer>
           </Router>
        )
    }
        

};

