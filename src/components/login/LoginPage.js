import React from "react";
import { Button, FormGroup, FormControl, FormLabel } from "react-bootstrap";
import * as loginActions from "../../redux/actions/loginActions";
import { bindActionCreators } from "redux";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { toast } from "react-toastify";

class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "Sincere@april.biz",
      password: "asd"
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
    const { actions, user } = this.props;

    // stop here if form is invalid
    if (!(email && password)) {
      return;
    }

    try {
      actions
        .login(email, password)
        .then(res => {
          if (user) {
            this.props.history.push("home");
            toast.success("Cool");
          } else {
            toast.error("UserName or Password are not correct!");
          }
        })
        .catch(error => {
          alert("Loging failed" + error);
        });
    } catch (error) {
      alert("Loging1 failed" + error);
    }
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

LoginPage.protoTypes = {
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
      login: bindActionCreators(loginActions.login, dispatch)
    }
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LoginPage);
