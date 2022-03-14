import React from "react";
import { Link, withRouter, useHistory } from "react-router-dom";
import { isAuthenticated, signout } from "../auth";

function Header() {
  const user = isAuthenticated();
  const history = useHistory();

  const Signout = () => {
    signout().then((data) => {
      console.log(data);
    });
    localStorage.clear();
    history.push("/signin");
  };

  return (
    <nav className="navbar navbar-expand-sm navbar-dark bg-primary">
      <div className="container-fluid">
        <Link className="navbar-brand fst-italic" to={"/"}>
          ImageUploader
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          {user ? (
            <div className="navbar-nav ms-auto">
              <Link className="nav-link active " to="/mypost">
                MyPost
              </Link>
              <Link className="nav-link active " to="/upload">
                Upload files
              </Link>
              <Link className="nav-link active " to="/signin" onClick={Signout}>
                Signout
              </Link>
            </div>
          ) : (
            <div className="navbar-nav ms-auto">
              <Link className="nav-link active " to="/signup">
                Signup
              </Link>
              <Link className="nav-link active " to="/signin">
                Signin
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default withRouter(Header);
