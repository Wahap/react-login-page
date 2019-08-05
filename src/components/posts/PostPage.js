import PropTypes from "prop-types";
import { connect } from "react-redux";
import React from "react";
import * as postActions from "../../redux/actions/postActions";
import * as apiActions from "../../redux/actions/apiStatusActions";
import { bindActionCreators } from "redux";
import Spinner from "../common/Spinner.js";
class PostPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  componentDidMount() {
    const { actions } = this.props;

    actions.getPosts().catch(error => {
      alert("Loading posts failed" + error);
    });
  }

  render() {
    return (
      <>
        {this.props.loading ? (
          <>
            <Spinner />
            <div>
              {" "}
              <button
                style={{ marginBottom: 20 }}
                className="btn btn-primary add-course"
                onClick={() => this.stopApiCall()}
              >
                stop
              </button>
              <button
                style={{ marginBottom: 20 }}
                className="btn btn-primary add-course"
                onClick={() => this.startApiCall()}
              >
                arttirt
              </button>
            </div>
          </>
        ) : (
          <div>
            <p>{this.props.wahap}++</p>
            {this.props.posts.map(user => (
              <p>{user.email}</p>
            ))}
            test
            <button
              style={{ marginBottom: 20 }}
              className="btn btn-primary add-course"
              onClick={() => this.startApiCall()}
            >
              Add Course
            </button>
          </div>
        )}

        <div>
          <p>{this.props.wahap}++</p>

          <button
            style={{ marginBottom: 20 }}
            className="btn btn-primary add-course"
            onClick={() => this.startApiCall()}
          >
            Add Course
          </button>
        </div>
      </>
    );
  }
}

PostPage.propTypes = {
  posts: PropTypes.array.isRequired,
  wahap: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    posts: state.posts,
    loading: state.apiCallsInProgress > 0,
    wahap: "test" + state.apiCallsInProgress + 2
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getPosts: bindActionCreators(postActions.getPosts, dispatch),
      beginApiCall: bindActionCreators(apiActions.beginApiCall, dispatch),
      stopApiCall: bindActionCreators(apiActions.stopApiCall, dispatch)
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostPage);
