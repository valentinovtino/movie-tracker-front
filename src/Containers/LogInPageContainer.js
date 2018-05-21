import { connect } from 'react-redux';
import { postUser, fetchUser } from '../Actions/Actions';
import LogInPage from '../Components/LogInPage/LogInPage';
import { withRouter } from 'react-router'

const mapStateToProps = (state) => ({
  userHasErrored: state.userErrorReceived
});

const mapDispatchToProps = (dispatch) => ({
  postUser: (user) => dispatch(postUser(user)),
  fetchUser: (user) => dispatch(fetchUser(user))
});

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(LogInPage));