import React from "react";
import { Link } from "react-router-dom";
const HomePage = () => (
  <div>
    <div class="col-sm-8 col-centered">
      <div className="jumbotron">
        <h1>Pluralsight Administration</h1>
        <p>React, Redux and React Router for ultra-responsive web apps.</p>
        <Link to="users" className="btn btn-primary btn-lg">
          Learn more
        </Link>
      </div>
    </div>
  </div>
);

export default HomePage;
