import { connect } from 'react-redux';
import { postUser } from '../Actions/Actions';
import LogInPage from '../Components/LogInPage/LogInPage';

const mapDispatchToProps = (dispatch) => ({
  postUser: (user) => dispatch(postUser(user))
})

export default connect(null, mapDispatchToProps)(LogInPage)