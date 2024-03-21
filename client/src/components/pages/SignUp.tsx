import { useState } from 'react';
import { z } from 'zod';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "./Home.css";
z.object({
  name: z.string().min(3),
})



interface Props {
  title: string;
}


const SignUp = ({ title }: Props) => {

  let Navigate = useNavigate();

  const [formData, setFormData] = useState({ name: "", email: "", password: "", cfpassword: "" });
  const location = useLocation();

  console.log("location :>> ", location);
  console.log("location.pathname :>> ", location.pathname);
  let path;
  if (location.pathname === "/UserAs/DoctorSignUp") {
    path = "add"
  }
  else {
    path = "adduser"
  }
  console.log("path :>> ", path);
  let name, value;
  const handleInputs = (e) => {
    console.log(e);
    name = e.target.name;
    value = e.target.value;
    setFormData({ ...formData, [name]: value })
  }

  const postData = async (e) => {
    e.preventDefault();
    const { name, email, password, cfpassword } = formData;
    try {
      const res = await fetch(`http://localhost:3000/${path}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({
          name,
          email,
          password,
          cfpassword
        })
      });
      // console.log(res);
      const Data = await res.json();

      // console.log(Data);
      if (!Data || res.status === 422 || res.status === 400 || res.status === 500) {
        alert(Data.error);
      }
      else {
        alert(Data.message);
        Navigate("/login")
      }
    } catch (err) {
      console.error(err);
    }
  }
  return (
    <div className='banner m'>
      <div className="container">
        <div className="row d-flex justify-content-center pt-5">
          <div className="col-lg-6 text-center mt-5 py-4 border border-primary border-2 rounded-3 bg-blur">
            <p className="fs-2">{title}</p>
            <form className="px-4" method='POST'>
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control mb-4"
                  id="name"
                  name='name'
                  aria-describedby="nameHelp"
                  value={formData.name}
                  onChange={handleInputs}

                />

                <label htmlFor="exampleInputEmail1" className="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleInputEmail1"
                  name='email'
                  aria-describedby="emailHelp"
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

                <label htmlFor="exampleInputPassword1" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control mb-4"
                  id="ConfiemPassword1"
                  name='cfpassword'
                  value={formData.cfpassword}
                  onChange={handleInputs}
                />


              </div>

              <button type="submit" className="submit-btn px-4 py-1 fs-5 mb-3" value="register" onClick={postData}>
                sign Up
              </button>
              <p className="fs-6">
                <span>Already have an account? &nbsp;</span>
                <span><Link to="/login">log in</Link></span>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
