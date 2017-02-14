import { connect } from 'react-redux';
import AppComponent from '../components/app-component';
import { updateSearchTerm, searchForTweets } from '../actions/all-actions';

const mapStateToProps = (state) => {
	return {
		tweets: state.tweets,
		term: state.search.term
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onClick: () => {
			dispatch(searchForTweets());
		},
		onInput: ($event) => {
			let term = $event.target.value;

			dispatch(updateSearchTerm(term));
		}
	}
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppComponent);

export default AppContainer;