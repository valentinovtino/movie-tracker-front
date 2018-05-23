import { connect } from 'react-redux';
import { removeFavorite } from '../Actions/Actions';
import { withRouter } from 'react-router';
import { FavoritesDisplay } from '../Components/FavoritesDisplay/FavoritesDisplay';

export const mapStateToProps = (state) => ({
  favorites: state.user.favorites,
  userID: state.user.id
});

export const mapDispatchToProps = (dispatch) => ({
  removeUserFavorite: (movie, userID) => dispatch(removeFavorite(movie, userID))
});


export default withRouter(connect(mapStateToProps, mapDispatchToProps)(FavoritesDisplay));