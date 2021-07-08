import React, {Component} from 'react';
import GotService from '../../../services/gotService';
import ErrorMessage from '../../errorMessage';
import ItemList from '../../itemList';
import ItemDetails, {Field} from '../../itemDetails';
import RowBlock from '../../rowBlock';


export default class HousePage extends Component {

	gotService = new GotService();

	state = {
		selectedHouse: 3,
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
            selectedHouse: id
        })
    }

	render() {

		const {selectedHouse} = this.state;

		if (this.state.error) {
            return <ErrorMessage/>
        }

		const itemList = (
			<ItemList
					 onItemSelected={this.onItemSelected}
					 getData={this.gotService.getAllHouses}
					 renderItem={({name, region}) => `${name} (${region})`}/>
		)

		const houseDetails = (
			<ItemDetails itemId={selectedHouse}
			 category='house'
			 getData={this.gotService.getHouse}>
				<Field field='region' label='Region'/>
				<Field field='words' label='Words'/>
				<Field field='titles' label='Titles'/>
				<Field field='overlord' label='Overlord'/>
				<Field field='ancestralWeapons' label='Ancestral weapons'/>
			</ItemDetails>
		)

		return (
			<RowBlock left={itemList} right={houseDetails} />
			
		)
	}
}