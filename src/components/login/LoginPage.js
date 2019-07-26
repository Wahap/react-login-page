import React from "react";
import { Link } from "react-router-dom";
class LoginPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = { myvalue: "test" };
  }
  handleSubmit(e) {
    e.preventDefault();
    this.setState = { myvalue: "Oh yeah" };
  }

  render() {
    return (
      <div class="text-center" styles="padding:50px">
        <div class="logo">login</div>
        <div class="login-form-1">
          <form id="login-form" class="text-left">
            <div class="login-form-main-message" />
            <div class="main-login-form">
              <div class="login-group">
                <div class="form-group">
                  <label for="lg_username" class="sr-only">
                    Username
                  </label>
                  <input
                    type="text"
                    class="form-control"
                    id="lg_username"
                    name="lg_username"
                    placeholder="username"
                  />
                </div>
                <div class="form-group">
                  <label for="lg_password" class="sr-only">
                    Password
                    {this.state.myvalue}
                    {this.props.myvalue}
                  </label>
                  <input
                    type="password"
                    class="form-control"
                    id="lg_password"
                    name="lg_password"
                    placeholder="password"
                  />
                </div>
                <div class="form-group login-group-checkbox">
                  <input type="checkbox" id="lg_remember" name="lg_remember" />
                  <label for="lg_remember">remember</label>
                </div>
              </div>
              <button onClick="handleSubmit" class="login-button">
                <i class="fa fa-chevron-right" />
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default LoginPage;
