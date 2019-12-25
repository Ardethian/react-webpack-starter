import { connect } from 'react-redux';
import { Child } from '../components/Child';
import { changeText } from '../actions';

function mapStateToProps(state) {
	return {
		text: state.text
	};
}

function mapDispatchToProps(dispatch) {
	return {
		changeText: text => dispatch(changeText(text))
	};
}

export default connect(mapStateToProps, mapDispatchToProps)(Child);
