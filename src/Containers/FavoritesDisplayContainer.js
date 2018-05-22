import { connect } from 'react-redux';
import {  } from '../Actions/Actions';
import { withRouter } from 'react-router';
import { FavoritesDisplay } from '../Components/FavoritesDisplay/FavoritesDisplay';

export const mapStateToProps = (state) => ({
  favorites: state.user.favorites,
  userID: state.user.id
});

// export const mapDispatchToProps = (dispatch) => ({
//   // Val's delete favorite button
// });


export default withRouter(connect(mapStateToProps)(FavoritesDisplay));