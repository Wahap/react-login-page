import PropTypes from "prop-types";
import { connect } from "react-redux";
import React from "react";
import * as userActions from "../../redux/actions/userActions";
import * as apiActions from "../../redux/actions/apiStatusActions";
import { bindActionCreators } from "redux";
import Spinner from "../common/Spinner.js";
class UserPage extends React.Component {
  constructor(props) {
    super(props);
    const { actions } = this.props;
  }

  componentDidMount() {
    const { actions, users } = this.props;

    if (users.length === 0) {
      actions.getUsers().catch(error => {
        alert("Loading users failed" + error);
      });
    }
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
            {this.props.users.map(user => (
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
      </>
    );
  }
}

UserPage.propTypes = {
  users: PropTypes.array.isRequired,
  wahap: PropTypes.bool.isRequired
};

function mapStateToProps(state) {
  return {
    users: state.users,
    loading: state.apiCallsInProgress > 0,
    wahap: state.apiCallsInProgress
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      getUsers: bindActionCreators(userActions.getUsers, dispatch),
      beginApiCall: bindActionCreators(apiActions.beginApiCall, dispatch),
      stopApiCall: bindActionCreators(apiActions.stopApiCall, dispatch)
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
