import React from "react";
import { useState } from "react";

import { signup } from "../auth/index";

import { useHistory, Link } from "react-router-dom";

function Signup() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  const handleSubmit = (e) => {
    e.preventDefault();
    signup({ name, email, password })
      .then((data) => {
        // localStorage.setItem("user", JSON.stringify(data.user));
        history.push("/signin");
        console.log(data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container pt-5 mt-5">
        <div className="row">
          <div className=" col-md-6 offset-md-3 offset-lg-3">
            <h4 className="text-center text-primary">Signup</h4>
            <div className="card p-3 shadow">
              <div className="mb-3">
                <label className="form-label">Name</label>
                <input
                  type="text"
                  className="form-control"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label className="form-label">Email address</label>
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
        Already Have Account? <Link to="/signin">SignIn</Link>
      </h5>
    </form>
  );
}

export default Signup;
