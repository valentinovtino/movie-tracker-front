import { connect } from 'react-redux';
import { getMovies, userLoggedOut } from '../Actions/Actions';
import { withRouter } from 'react-router';
import App from '../Components/App/App';

export const mapDispatchToProps = (dispatch) => ({
  storeMovies: (movies) => dispatch(getMovies(movies)),
  userLoggedOut: () => dispatch(userLoggedOut())
});

export const mapStateToProps = (state) => ({
  user: state.user
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(App));