import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Header from "./components/common/Header";
import { Route, Switch } from "react-router-dom";
import HomePage from "./components/home/homePage";

function App() {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        {/* <Route path="/about" component={AboutPage} /> */}
        {/* <Route path="/courses" component={CoursesPage} /> */}
        {/* <Route path="/course/:slug" component={ManageCoursePage} /> */}
        {/* <Route path="/course" component={ManageCoursePage} /> */}
        {/* <Route component={PageNotFound} /> */}
      </Switch>
    </div>
  );
}

export default App;
