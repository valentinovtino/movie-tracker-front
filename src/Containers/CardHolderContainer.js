import { connect } from "react-redux";
import CardHolder from "../Components/CardHolder/CardHolder";
import { withRouter } from 'react-router';

export const mapStateToProps = (state) => ({
  movies: state.movies
});

export default withRouter(connect(mapStateToProps)(CardHolder));