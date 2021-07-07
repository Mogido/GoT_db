import React, {Component} from 'react';
import { Col, Row } from 'reactstrap';
import ErrorMessage from '../errorMessage';
import ItemList from '../itemList';
import CharDetails from '../charDetails';

export default class CharacterPage extends Component {

	state = {
		selectedChar: 130,
		error: false
	}

	componentDidCatch() {
        console.log('error');
        this.setState({
            error: true
        })
    }

	onCharSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

	render() {

		if (this.state.error) {
            return <ErrorMessage/>
        }

		return (
			
			<Row>
				<Col md='6'>
					<ItemList onCharSelected={this.onCharSelected}/>
				</Col>
				<Col md='6'>
					<CharDetails charId={this.state.selectedChar} />
				</Col>
			</Row>
		)
	}
}