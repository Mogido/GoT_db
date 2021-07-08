import React, {Component} from 'react';
import GotService from '../../../services/gotService';
import ErrorMessage from '../../errorMessage';
import ItemList from '../../itemList';
import ItemDetails, {Field} from '../../itemDetails';
import RowBlock from '../../rowBlock';


export default class BookPage extends Component {

	gotService = new GotService();

	state = {
		selectedBook: 7,
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
            selectedBook: id
        })
    }

	render() {

		const {selectedBook} = this.state;

		if (this.state.error) {
            return <ErrorMessage/>
        }

		const itemList = (
			<ItemList
					 onItemSelected={this.onItemSelected}
					 getData={this.gotService.getAllBooks}
					 renderItem={({name}) => name}/>
		)

		const bookDetails = (
			<ItemDetails itemId={selectedBook}
			 category='book'
			 getData={this.gotService.getBook}>
				<Field field='numberOfPages' label='Number of pages'/>
				<Field field='publiser' label='Publiser'/>
				<Field field='released' label='Released'/>
			</ItemDetails>
		)

		return (
			<RowBlock left={itemList} right={bookDetails} />
			
		)
	}
}