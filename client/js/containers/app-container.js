import { connect } from 'react-redux';
import AppComponent from '../components/app-component';

const mapStateToProps = (state) => {
	return {
		whatevers: state.whatevers.slice()
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onClick: (text) => {
			console.log(text);
		}
	}
}

const AppContainer = connect(mapStateToProps, mapDispatchToProps)(AppComponent);

export default AppContainer;