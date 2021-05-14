import React from "react";
import { Link } from "react-router-dom";
import TextField from "./Textfield";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
const Signup = () => {
  const validate = Yup.object({
    email: Yup.string()
      .email("Enter valid email*")
      .required("Email is required"),
    password: Yup.string()
      .min(8, "Must have 8 character or more*")
      .max(15, "Must have 15 character or less*")
      .required("Password is required*"),
  });
  return (
    <>
      <div className="container-fluid main">
        <div className="row h-100">
          <div className="col-md-5 second p-5">
            <h4 className="text-center pb-2">Sign In</h4>
            <div className="d-grid gap-2">
              <button className="btn btn-light" type="button">
                Log In with Facebook
              </button>
              <button className="btn btn-light" type="button">
                Log In with Google
              </button>
              <button className="btn btn-light">Log In with Apple</button>
            </div>
            <hr />
            <Formik
              initialValues={{
                email: "",
                password: "",
              }}
              validationSchema={validate}
              onSubmit={(values) => {
                const { email, password } = values;
                axios
                  .post("http://localhost:4000/apis/login", {
                    email: email,
                    password: password,
                  })
                  .then((response) => {
                    console.log("Response => ", response.data);
                    alert("Login");
                  })
                  .catch((err) => {
                    console.log("Error => ", err.message);
                  });
              }}
            >
              {(formik) => (
                <Form>
                  {console.log(formik.values)}
                  <TextField
                    type="email"
                    name="email"
                    placeholder="Please enter your email address."
                  />
                  <TextField
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="submit">
                      Sing In
                    </button>
                  </div>
                  <small className="text-muted d-block text-center mt-2">
                    Have'nt got an account?{"   "}
                    <Link to="/" className="text-primary button">
                      Sign Up
                    </Link>
                  </small>
                </Form>
              )}
            </Formik>
          </div>
          <div className="col-md-7 colorFul p-5 text-light first d-flex align-items-center">
            <main>
              <h4 className="mb-0">Join millions!</h4>
              <h4>Design for Signup and Login!</h4>
              <div>
                <p className="mb-2 mt-4">
                  Save Your Work and editing steps for easy access
                </p>
                <p className="mb-2">
                  Support Hd files for downloding and printing
                </p>
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
        </div>
      </div>
    </>
  );
};

export default Signup;
