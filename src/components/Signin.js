import React from "react";
import { useState } from "react";
// import { useHistory } from "react-router";
import { Link, useHistory } from "react-router-dom";
import { signin } from "../auth";

function Signin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();

    signin({ email, password }).then((data) => {
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("token", JSON.stringify(data.token));
      history.push("/mypost");
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container pt-5 mt-5">
        <div className="row">
          <div className="col-md-6 offset-md-3 offset-lg-3">
            <h4 className="text-center text-primary">SignIn</h4>
            <div className="card p-3 shadow">
              <div className="mb-3">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-control"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>

              <button type="submit" className="btn btn-primary ">
                Submit
              </button>
            </div>
          </div>
        </div>
      </div>
      <h5 className="text-center">
        No Account? <Link to="/signup">Signup</Link>
      </h5>
    </form>
  );
}

export default Signin;
