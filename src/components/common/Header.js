import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import * as loginActions from "../../redux/actions/loginActions";
import { bindActionCreators } from "redux";
import { toast } from "react-toastify";
import { withRouter } from "react-router-dom";
import { compose } from "redux";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logOut = event => {
    const { actions } = this.props;
    actions.logout();

    this.props.history.push("/");
  };
  render() {
    const isLoggedIn = this.props.user && this.props.user.name;
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand href="#home">My App</Navbar.Brand>
        {isLoggedIn ? <Navbar.Brand href="#users">Users</Navbar.Brand> : ""}
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end">
          <Navbar.Text>
            {isLoggedIn ? "Signed in as: " + this.props.user.name : ""}
            {isLoggedIn ? <a onClick={() => this.logOut()}>Log Out</a> : ""}
          </Navbar.Text>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

Header.protoTypes = {
  user: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired
};
function mapStateToProps(state) {
  return {
    user: state.currentUser,
    loading: state.apiCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      logout: bindActionCreators(loginActions.logOut, dispatch)
    }
  };
}

export default compose(
  withRouter,
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(Header);

// export default connect(
//   mapStateToProps,
//   mapDispatchToProps
// )(Header);
