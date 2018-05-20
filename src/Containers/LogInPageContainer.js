import { connect } from 'react-redux';
import { postUser } from '../Actions/Actions';
import LogInPage from '../Components/LogInPage/LogInPage';

const mapStateToProps = (state) => ({
  userHasErrored: state.userErrorReceived
});

const mapDispatchToProps = (dispatch) => ({
  postUser: (user) => dispatch(postUser(user))
});

export default connect(mapStateToProps, mapDispatchToProps)(LogInPage);