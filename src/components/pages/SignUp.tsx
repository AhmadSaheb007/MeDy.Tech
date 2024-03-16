
import {z} from 'zod';
import { Link } from 'react-router-dom';
import "./Home.css";
z.object({
  name: z.string().min(3),
})



interface Props{
  title: string;
}


const SignUp = ({title}: Props) => {
  return (
    <div className='banner m'>
      <div className="container">
        <div className="row d-flex justify-content-center pt-5">
          <div className="col-lg-6 text-center mt-5 py-4 border border-primary border-2 rounded-3 bg-blur">
            <p className="fs-2">{title}</p>
            <form className="px-4">
              <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control mb-4"
                  id="name"
                  aria-describedby="nameHelp"
                />

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

                <label htmlFor="exampleInputPassword1" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  className="form-control mb-4"
                  id="ConfiemPassword1"
                />


              </div>

              <button type="submit" className="submit-btn px-4 py-1 fs-5 mb-3">
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
