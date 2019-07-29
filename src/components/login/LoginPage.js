import React from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import * as userActions from "../../redux/actions/loginActions";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "demir.vahap@gmail.com",
      password: "asd",
      user: []
    };
  }

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { email, password } = this.state;
    const { actions } = this.props;

    // stop here if form is invalid
    if (!(email && password)) {
      return;
    }

    actions.login(email, password).catch(error => {
      alert("Loading authors failed" + error);
    });

    this.props.history.push("home/HomePage");
  };

  render() {
    return (
      <div className="Login">
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsSize="large">
            <FormLabel>Email</FormLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
          </FormGroup>
          <FormGroup controlId="password" bsSize="large">
            <FormLabel>Password</FormLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
          </FormGroup>
          <Button
            block
            bsSize="large"
            disabled={!this.validateForm()}
            type="submit"
          >
            Login
          </Button>
        </form>
      </div>
    );
  }
}

LoginPage.protoTypes;

function mapStateToProps(state) {
  return {
    user: state.user,
    loading: state.apiCallsInProgress > 0
  };
}

function mapDispatchToProps(dispatch) {
  return {
    actions: {
      login: bindActionCreators(userActions.getUsers, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
