let searchState = { isLoading: false, term: '' }

export default function search(state = searchState, action) {
	switch(action.type) {
		case 'UPDATE_SEARCH_TERM':
			return Object.assign({}, searchState, { term: action.term });
		default:
			return state;
	}
}