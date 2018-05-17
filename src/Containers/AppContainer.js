import { connect } from 'react-redux';
import { getMovies } from '../Actions/Actions';
import App from '../Components/App/App';

export const mapDispatchToProps = (dispatch) => ({
  storeMovies: (movies) => dispatch(getMovies(movies))  
});

export default connect(null, mapDispatchToProps)(App);