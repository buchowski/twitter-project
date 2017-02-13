export default function whatevers(state = [], action) {
	switch(action.type) {
		case 'BOOTSTRAP':
			return action.data;
		default:
			return state;
	}
}