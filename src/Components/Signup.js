import React from "react";
import { Link } from "react-router-dom";
import TextField from "./Textfield";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import axios from "axios";
const Signup = () => {
  const validate = Yup.object({
    name: Yup.string()
      .max(15, "Must have 15 character or less*")
      .required("Name is required*"),
    email: Yup.string()
      .email("Email is invalid*")
      .required("Email is required*"),
    phone: Yup.number()
      .typeError("That doesn't look like a phone number")
      .positive("Phone number can't start with a minus")
      .integer("Phone number can't include a decimal point")
      .min(1_111_111_111, "Must have 10 digit")
      .required("Phone number is required"),
    password: Yup.string()
      .min(8, "Must have 8 character or more*")
      .max(15, "Must have 15 character or less*")
      .required("Password is required*"),
  });
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
            <Formik
              initialValues={{
                name: "",
                email: "",
                phone: "",
                password: "",
              }}
              validationSchema={validate}
              onSubmit={(values) => {
                const { name, email, phone, password } = values;
                axios
                  .post("http://localhost:4000/apis/register", {
                    name: name,
                    email: email,
                    phone: phone,
                    password: password,
                  })
                  .then((response) => {
                    console.log("Response => ", response);
                    alert("Submitted");
                  })
                  .catch((err) => {
                    console.log("Error => ", err.message);
                  });
              }}
            >
              {(formik) => (
                <Form>
                  <TextField
                    type="text"
                    name="name"
                    placeholder="Please enter your name."
                  />
                  <TextField
                    type="email"
                    name="email"
                    placeholder="Please enter your email address."
                  />
                  <TextField
                    type="tel"
                    name="phone"
                    placeholder="Please enter your phone number."
                  />
                  <TextField
                    type="password"
                    name="password"
                    placeholder="Password"
                  />
                  <div className="d-grid gap-2">
                    <button className="btn btn-primary" type="submit">
                      Sing Up
                    </button>
                  </div>
                  <small className="text-muted d-block text-center mt-2">
                    Have'nt got an account?
                    <Link to="/Login" className="text-primary button">
                      Sign Up
                    </Link>
                  </small>
                </Form>
              )}
            </Formik>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;
