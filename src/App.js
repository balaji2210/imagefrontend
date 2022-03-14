import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from "./components/Header";
import Signup from "./components/Signup";
import Signin from "./components/Signin";
import Upload from "./components/Upload";
import Details from "./components/Details";
import MyPost from "./components/myPosts";
import Home from "./components/Home";

function App() {
  const user = JSON.parse(localStorage.getItem("user"));
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/mypost" component={MyPost} />
        <Route exact path="/signup" component={Signup} />
        <Route exact path="/signin" component={Signin} />
        <Route exact path="/upload" component={Upload} />
        <Route exact path="/post/:id" component={Details} />
      </Switch>
    </Router>
  );
}

export default App;
