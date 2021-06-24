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

	getAllCharacters () {
		return this.getResource('/characters?page=5&pageSize=10');
	}

	getCharacter (id) {
		return this.getResource(`/characters/${id}`);
	}

	getAllHouses () {
		return this.getResource('/houses?pageSize=10');
	}

	getHouse (id) {
		return this.getResource(`/houses/${id}`);
	}

	getAllBooks () {
		return this.getResource('/books?pageSize=10');
	}

	getBook(id) {
		return this.getResource(`/books/${id}`);
	}
}

