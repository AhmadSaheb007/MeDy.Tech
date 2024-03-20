import React from "react";

import "./Home.css";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div>
      <div className="banner">
        <div className="container">
          <div className="row d-flex justify-content-center pt-5">
            <div className="col-lg-6 text-center mt-5 py-4 border border-primary border-2 rounded-3 bg-blur">
              <p className="fs-2">Login</p>
              <form className="px-4">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                  />

                  <div id="emailHelp" className="form-text">
                    We'll never share your email with anyone else.
                  </div>
                </div>
                <div className="mb-3">
                  <label htmlFor="exampleInputPassword1" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control mb-4"
                    id="Password1"
                  />
                </div>

                <button
                  type="submit"
                  className="submit-btn px-4 py-1 fs-5 mb-3"
                >
                  Log in
                </button>
                <p className="fs-6">
                  <span>Already have an account? &nbsp;</span>
                  <span>
                    <Link to="/UserAs">Sign Up</Link>
                  </span>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
