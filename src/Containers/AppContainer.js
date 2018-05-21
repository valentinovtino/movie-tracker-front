import { connect } from 'react-redux';
import { getMovies } from '../Actions/Actions';
import { withRouter } from 'react-router'
import App from '../Components/App/App';

export const mapDispatchToProps = (dispatch) => ({
  storeMovies: (movies) => dispatch(getMovies(movies)),

});

export default withRouter(connect(null, mapDispatchToProps)(App));