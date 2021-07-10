import React, {Component} from 'react';
import GotService from '../../../services/gotService';
import ErrorMessage from '../../errorMessage';
import ItemList from '../../itemList';
import {withRouter} from 'react-router-dom';


class BookPage extends Component {

	gotService = new GotService();

	state = {
		error: false
	}

	componentDidCatch() {
        console.log('error');
        this.setState({
            error: true
        })
    }

	render() {

		if (this.state.error) {
            return <ErrorMessage/>
        }

	

		return (
			<ItemList
				onItemSelected={(itemId) => {
					this.props.history.push(itemId)
				}}
				getData={this.gotService.getAllBooks}
				renderItem={({name}) => name}/>
			
		)
	}
}

export default withRouter(BookPage);