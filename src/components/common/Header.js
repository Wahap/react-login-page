import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Navbar from "react-bootstrap/Navbar";
import * as loginActions from "../../redux/actions/loginActions";
import { bindActionCreators } from "redux";
import { toast } from "react-toastify";
import { compose } from "redux";
import { withRouter, Link } from "react-router-dom";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  logOut = event => {
    const { actions } = this.props;
    actions.logout();

    this.props.history.push("login");
  };
  render() {
    const isLoggedIn = this.props.user && this.props.user.name;
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>
          {" "}
          <Link to="home">Home Page -{this.props.wahap}</Link>
        </Navbar.Brand>
        <Navbar.Brand>
          {" "}
          <Link to="login">Login</Link>
        </Navbar.Brand>
        {isLoggedIn ? (
          <Navbar.Brand>
            {" "}
            <Link className="link" to="users">
              Users
            </Link>
          </Navbar.Brand>
        ) : (
          ""
        )}
        {isLoggedIn ? (
          <Navbar.Brand>
            {" "}
            <Link className="link" to="posts">
              Posts
            </Link>
          </Navbar.Brand>
        ) : (
          ""
        )}
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
  loading: PropTypes.bool.isRequired,
  wahap: PropTypes.bool.isRequired
};
function mapStateToProps(state) {
  return {
    user: state.currentUser,
    loading: state.apiCallsInProgress > 0,
    wahap: state.apiCallsInProgress
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
