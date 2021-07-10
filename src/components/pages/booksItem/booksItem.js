import React, {Component} from 'react';
import GotService from '../../../services/gotService';
import ItemDetails, {Field} from '../../itemDetails';

export default class BooksItem extends Component {
	gotService = new GotService();

	render() {
		const {bookId} = this.props; 

		return (
			<ItemDetails itemId={bookId}
			 category='book'
			 getData={this.gotService.getBook}>
				<Field field='numberOfPages' label='Number of pages'/>
				<Field field='publiser' label='Publiser'/>
				<Field field='released' label='Released'/>
			</ItemDetails>
		)
	}
}