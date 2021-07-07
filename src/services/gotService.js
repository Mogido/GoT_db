export default class GotService {
	constructor() {
		this._apiBase = 'https://anapioficeandfire.com/api';
	}

	async getResource (url) {
		const res = await fetch(`${this._apiBase}${url}`);
		
		if (!res.ok) {
			throw new Error(`Could not fetch ${url}, status: ${res.status}`)
		}

		return res.json();
	}

	async getAllCharacters () {
		const res = await this.getResource('/characters?page=5&pageSize=10');
		return res.map(this._transformCharacter);
	}

	async getCharacter (id) {
		const res = await this.getResource(`/characters/${id}`);
		return this._transformCharacter(res);
	}

	async getAllHouses () {
		const res = await this.getResource('/houses?pageSize=10');
		return res.map(this._transformHouse);
	}

	async getHouse (id) {
		const res = await this.getResource(`/houses/${id}`);
		return this._transformHouse(res);
	}

	async getAllBooks () {
		const res = await this.getResource('/books?pageSize=10');
		return res.map(this._transformBook);
	}

	async getBook(id) {
		const res = await this.getResource(`/books/${id}`);
		return this._transformBook(res);
	}

	_transformCharacter(char) {
		return {
			name: char.name ? char.name : 'undefined',
			gender: char.gender ? char.gender : 'undefined',
			born: char.born ? char.born : 'undefined',
			died: char.died ? char.died : 'undefined',
			culture: char.culture ? char.culture : 'undefined'
		}
	}

	_transformHouse(house) {
		return {
			name: house.name ? house.name : 'undefined',
			region: house.region ? house.region : 'undefined',
			words: house.words ? house.words : 'undefined',
			titles: house.titles ? house.titles : 'undefined',
			overlord: house.overlord ? house.overlord : 'undefined',
			ancestralWeapons: house.ancestralWeapons ? house.ancestralWeapons : 'undefined'
		}
	}

	_transformBook(book) {
		return {
			name: book.name ? book.name : 'undefined',
			numberOfPages: book.numberOfPages ? book.numberOfPages : 'undefined',
			publiser: book.publiser ? book.publiser : 'undefined',
			released: book.released ? book.released : 'undefined'
		}
	}
}

