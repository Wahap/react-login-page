import React from "react";
import "./App.css";
import Header from "./components/common/Header";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomePage from "./components/home/HomePage";
import LoginPage from "./components/login/LoginPage";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import UserPage from "./components/users/UserPage";
import PostPage from "./components/posts/PostPage";

function App() {
  return (
    <div className="container-fluid">
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={LoginPage} />
          {<Route path="/home" component={HomePage} />}
          {<Route path="/users" component={UserPage} />}
          {<Route path="/login" component={LoginPage} />}
          {<Route path="/posts" component={PostPage} />}
          {/* <Route path="/course/:slug" component={ManageCoursePage} /> */}
          {/* <Route path="/course" component={ManageCoursePage} /> */}
          {/* <Route component={PageNotFound} /> */}
        </Switch>
      </BrowserRouter>
      <ToastContainer autoClose={3000} position="top-center" hideProgressBar />
    </div>
  );
}

export default App;
