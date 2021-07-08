import React, {Component} from 'react';
import GotService from '../../../services/gotService';
import ErrorMessage from '../../errorMessage';
import ItemList from '../../itemList';
import ItemDetails, {Field} from '../../itemDetails';
import RowBlock from '../../rowBlock';


export default class CharacterPage extends Component {

	gotService = new GotService();

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

	onItemSelected = (id) => {
        this.setState({
            selectedChar: id
        })
    }

	render() {

		const {selectedChar} = this.state;

		if (this.state.error) {
            return <ErrorMessage/>
        }

		const itemList = (
			<ItemList
					 onItemSelected={this.onItemSelected}
					 getData={this.gotService.getAllCharacters}
					 renderItem={({name, gender}) => `${name} (${gender})`}/>
		)

		const charDetails = (
			<ItemDetails itemId={selectedChar}
			 category='character'
			 getData={this.gotService.getCharacter}>
				<Field field='gender' label='Gender'/>
				<Field field='born' label='Born'/>
				<Field field='died' label='Died'/>
				<Field field='culture' label='Culture'/>
			</ItemDetails>
		)

		return (
			<RowBlock left={itemList} right={charDetails} />
			
		)
	}
}