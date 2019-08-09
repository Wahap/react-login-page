import PropTypes from "prop-types";
import { connect } from "react-redux";
import React from "react";
import * as postActions from "../../redux/actions/postActions";
import * as apiActions from "../../redux/actions/apiStatusActions";
import { bindActionCreators } from "redux";
import Spinner from "../common/Spinner.js";
import CardFunc from "../common/CardFunction.js";

class PostPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { posts: [] };
  }

  componentDidMount() {
    const { actions, posts } = this.props;
    if (posts.length === 0) {
      actions.getPosts().catch(error => {
        alert("Loading posts failed" + error);
      });
    }
    this.setState({ posts });
  }

  startApiCall = () => {
    try {
      this.props.actions.beginApiCall();
    } catch (error) {}
  };

  stopApiCall = () => {
    try {
      this.props.actions.stopApiCall();
    } catch (error) {}
  };

  render() {
    return (
      <>
        {this.props.loading ? (
          <Spinner />
        ) : (
          <>
            <CardFunc data={this.props.posts} onClick={this.stopApiCall} />
            Test
          </>
        )}
      </>
    );
  }
}

PostPage.propTypes = {
  posts: PropTypes.array.isRequired,
  wahap: PropTypes.number.isRequired
};

function mapStateToProps(state) {
  return {
    posts: state.posts,
    loading: state.apiCallsInProgress > 0,
    wahap: state.apiCallsInProgress
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
