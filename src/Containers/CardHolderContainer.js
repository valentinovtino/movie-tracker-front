import { connect } from "react-redux";
import CardHolder from "../Components/CardHolder/CardHolder";

export const mapStateToProps = (state) => ({
    movies: state.movies
});

export default connect(mapStateToProps)(CardHolder);