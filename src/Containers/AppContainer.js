import { connect } from 'react-redux';
import { getMovies } from '../Actions/Actions';
import App from '../Components/App/App';

const mapDispatchToProps = (dispatch) => ({
  getMovies: (movies) => dispatch(getMovies(movies))  
});

export default connect(null, mapDispatchToProps)(App);