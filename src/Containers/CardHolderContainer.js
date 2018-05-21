import { connect } from "react-redux";
import CardHolder from "../Components/CardHolder/CardHolder";
import { withRouter } from 'react-router';
import { addFavorite } from '../Actions/Actions';

export const mapStateToProps = (state) => ({
  movies: state.movies,
  userID: state.user.id
});

export const mapDispatchToProps = dispatch => ({
  addUserFavorite: (movie, userID) => dispatch(addFavorite(movie, userID))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CardHolder));