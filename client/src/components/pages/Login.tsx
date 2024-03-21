import { useState } from 'react';

import "./Home.css";
import { Link } from "react-router-dom";
const Login = () => {


  const [formData, setFormData] = useState({  email: "", password: "" });
  
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setFormData({ ...formData, [name]: value })
  }

  const postData = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    try {
      const res = await fetch(`http://localhost:3000/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          email,
          password
        })
      });
      // console.log(res);
      const Data = await res.json();

      // console.log(Data);
      if (!Data || res.status === 401 || res.status === 400 || res.status === 500) {
        alert(Data.error);
      }
      else {
        alert(Data.message);
        // Navigate("/login")
      }
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div>
      <div className="banner">
        <div className="container">
          <div className="row d-flex justify-content-center pt-5">
            <div className="col-lg-6 text-center mt-5 py-4 border border-primary border-2 rounded-3 bg-blur">
              <p className="fs-2">Login</p>
              <form className="px-4" method='POST'>
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Email address
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="exampleInputEmail1"
                    aria-describedby="emailHelp"
                    name='email'
                    value={formData.email}
                    onChange={handleInputs}
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
                    name='password'
                    value={formData.password}
                    onChange={handleInputs}
                  />
                </div>

                <button
                  type="submit"
                  className="submit-btn px-4 py-1 fs-5 mb-3"
                  value="register" 
                  onClick={postData}
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
