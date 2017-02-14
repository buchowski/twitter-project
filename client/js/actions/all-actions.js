import { getTweets } from '../services/data-service';

export function updateSearchTerm(term) {
	return {
		type: 'UPDATE_SEARCH_TERM',
		term
	};
}

export function setTweets(tweets) {
	return {
		type: 'SET_TWEETS',
		tweets
	};
}

export function searchForTweets() {
	return (dispatch, getState) => {
		let { search: { term } } = getState();

		return getTweets(term)
			.then(tweets => {
				dispatch(setTweets(tweets));
			});
	};
}
