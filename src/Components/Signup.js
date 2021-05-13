import React from "react";
import { Link } from "react-router-dom";
const Signup = () => {
  return (
    <>
      <div className="container-fluid main">
        <div className="row h-100">
          <div className="col-md-7 colorFul p-5 text-light first d-flex align-items-center">
            <main>
              <h4 className="mb-0">Join millions!</h4>
              <h4>Design for Signup and Login!</h4>
              <div>
                <p className="mb-2 mt-4">
                  Save Your Work and editing steps for easy access
                </p>
                <p className="mb-2">Support Hd files for downloding and printing</p>
                <p className="mb-2">Login for Free, no charges for that</p>
                <p className="mb-2">Singup as a new user</p>
                <p className="mb-2">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut,
                  harum? Officiis harum, sunt sint illum aut optio corporis sit
                  minima!
                </p>
                <p className="mt-4 fw-bold">
                  Your Personal Information is 100% SECURED!
                </p>
              </div>
            </main>
          </div>
          <div className="col-md-5 second p-5">
            <h4 className="text-center pb-2">Sign Up</h4>
            <div className="d-grid gap-2">
              <button className="btn btn-light" type="button"> 
                Sign Up with Facebook
              </button>
              <button className="btn btn-light" type="button">
                Sign Up with Google
              </button>
              <button className="btn btn-light">Sign Up with Apple</button>
            </div>
            <hr />
            <div className="mb-3">
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Please enter your name."
                autocomplete="off"
              />
            </div>
            <div className="mb-3">
              <input
                type="email"
                className="form-control"
                id="email"
                placeholder="Please enter your email address."
                autocomplete="off"
              />
            </div>
            <div className="mb-3">
              <input
                type="tel"
                className="form-control"
                id="phone"
                placeholder="Please enter your phone number."
                autocomplete="off"
              />
            </div>
            <div className="mb-3">
              <input
                className="form-control"
                type="password"
                id="password"
                placeholder="Password"
                autocomplete="off"
              />
            </div>
            <div className="d-grid gap-2">
              <button className="btn btn-primary">Sing Up</button>
            </div>
            <small className="text-muted d-block text-center mt-2">
              Have'nt got an account?{ "   "}
              <Link to="/Login" className="text-primary button">Sign Up</Link>
            </small>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
