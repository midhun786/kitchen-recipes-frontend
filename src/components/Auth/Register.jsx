import React from "react";
import '../Auth/Login.css'
import { useFormik } from "formik";
import axios from "axios";
import { env } from "../../config";
import { Link, useNavigate } from "react-router-dom";

import { useLottie } from "lottie-react";
import  animationData from "../lotties/chef.json";

function Register() {
  let navigate = useNavigate();
//   let username = "abc";
//   let pass = "123";
//   let login = () => {
//     if (username == "abc" && pass == "123") {
//         navigate("/portal/dashboard");
//     } else {
//       alert("Worng data");
//     }
//   };

  let formik = useFormik({
    initialValues: {
      name:"",
      email: "",
      password: "",
    },
    validate: (values) => {
      let errors = {};
      if (values.name === "") {
        errors.name = "Please enter name "
      }
      if (values.email === "") {
        errors.email = "Please enter email"
      }
      if (values.password === "") {
        errors.password = "Please enter password"
      }
      
      return errors;
    }, 
    onSubmit: async (values) => {
      try {
        await axios.post(`${env.api}/register`, values);
        
        navigate("/");
      } catch (error) {
        alert(error.response.messsage)
        console.log(error);
      }
    },
  });


  const options = {
    animationData: animationData,
    loop: true
  };

  const { View } = useLottie(options);

  return (
   
    <div className="container login">
    <span className="row d-flex align-content-center justify-content-center ">
      <span className="col-lg-4 col-md-6 col-sm-9 pt-5 ">
    
        <div className="card o-hidden border-0 shadow-lg  transp  d-flex align-content-center">
          <div className="card-body p-2">
            {/* <!-- Nested Row within Card Body --> */}
          <div className="row">
              <div className="col-lg-9 mx-auto">
                <div className="p-0">

                  
                  <div className="  text-center">
                    <h4 className=" " style={{color:"#ff245b"}}>
                      Welcome To Register Page
                    </h4>
                    {View}
                  </div>


                    <form className="user" onSubmit={formik.handleSubmit}>
                    <div className="form-group pb-2">      
                        <input
                          className={`form-control ${formik.errors.name ? `input-error` : ``}`}
                          type={"text"}
                          value={formik.values.name}
                          onChange={formik.handleChange}
                          name="name"
                          placeholder="Enter Name"
                        />
                         <span style={{ color: "red" }}>{formik.errors.name}</span>
                      </div>
                      <div className="form-group pb-2">      
                        <input
                          className={`form-control ${formik.errors.email ? `input-error` : ``}`}
                          id="exampleInputEmail"
                          type={"email"}
                          value={formik.values.email}
                          onChange={formik.handleChange}
                          name="email"
                          placeholder="Enter Email Address"
                        />
                         <span style={{ color: "red" }}>{formik.errors.email}</span>
                      </div>
                      <div className="form-group pb-4">
                        <input
                         className={`form-control ${formik.errors.password ? `input-error` : ``}`}
                          id="exampleInputPassword"
                          type={"password"}
                          value={formik.values.password}
                          onChange={formik.handleChange}
                          placeholder="Password"
                          name="password"
                        />
                        <span style={{ color: "red" }}>{formik.errors.password}</span>
                      </div>
                     

                      <button
                        type="submit"
                        className="btn btn-outline-primary container fw-bold myname "
                      >
                        REGISTER
                      </button>
                    </form>
                    <div className='text-center fw-bold p-2 '>
                    <p style={{color:"#ff245b"}}>Already a member ?
                         <Link to={'/'} style={{color:"black"}}> Login</Link></p>
                    
                    </div>
                 
                    </div>
                  </div>
                </div>
              </div>
              </div>
          </span>
        </span>
      </div>
  );
}

export default Register;
