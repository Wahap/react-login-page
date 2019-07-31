import PropTypes from "prop-types";
import { connect } from "react-redux";
import React from "react";
import * as userActions from "../../redux/actions/loginActions";
import { bindActionCreators } from "redux";
class UserPage extends React.Component {
  constructor(props) {
    super(props);
    //  this.state = { users: [] };
  }

  componentDidMount() {
    const { users } = this.props;
    const { actions } = this.props;
    actions.login().catch(error => {
      alert("Loading courses failed" + error);
    });
  }
  render() {
    return (
      <div>
        {this.props.users.map(user => (
          <p>{user.email}</p>
        ))}
        test
      </div>
    );
  }
}

UserPage.propTypes = {
  users: PropTypes.array.isRequired
};

function mapStateToProps(state) {
  return {
    users: state.users,
    loading: state.apiCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      login: bindActionCreators(userActions.login, dispatch)
    }
  };
}
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserPage);
