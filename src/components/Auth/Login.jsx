import React from "react";

import { useFormik } from "formik";
import axios from "axios";
import '../Auth/Login.css'
import { env } from "../../config";
import { Link, useNavigate } from "react-router-dom";

import { useLottie } from "lottie-react";
import  animationData from "../lotties/chef.json";


function Login() {
  let navigate = useNavigate();

  // const handleLogin=()=>{
  //   navigate("/portal/home");
  // }
  
    // let username = "abc";
    // let pass = "123";
    // let login = () => {
    //   if (username === "abc" && pass === "123") {
    //       navigate("/portal/home");
    //   } else {
    //     alert("Worng data");
    //   }
    // };

  let formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: (values) => {
      let errors = {};

      if (values.email === "") {
        errors.email = "Please enter email";
      }
      if (values.password === "") {
        errors.password = "Please enter password";
      }

      return errors;
    },

    onSubmit: async (values) => {
      try {
        let loginData = await axios.post(`${env.api}/login`, values);
        console.log(loginData);

        if (loginData.data.token) {
          if (loginData.status === 200) {

            navigate("/portal/home");
            window.localStorage.setItem("app-token", loginData.data.token);
            window.localStorage.setItem("profile", loginData.data.user.name);
            window.localStorage.setItem("id", loginData.data.user._id);
            window.localStorage.setItem("email", loginData.data.user.email);
          }
        } else {
          alert(loginData.data.message);
        }
      } catch (error) {
        alert(error.response.data.message);
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
          <span className="col-lg-5 col-md-6 col-sm-9 pt-5 ">
         
            <div className="card o-hidden border-0 shadow-lg  mt-3 transp  d-flex align-content-center">
              <div className="card-body p-2">
                {/* <!-- Nested Row within Card Body --> */}
              <div className="row">
                  <div className="col-lg-9 mx-auto">
                    <div className="p-0">

                      
                      <div className="  text-center pb-2">
                        <h4 className="" style={{color:"#ff245b"}}>
                          Welcome To Login Page
                        </h4>
                         {View}
                      </div>



                      <form className="user" onSubmit={formik.handleSubmit}>
                        <div className="form-group pb-2">
                          <input
                            className={`form-control ${
                              formik.errors.email ? `input-error` : ``
                            }`}
                            id="exampleInputEmail"
                            type={"email"}
                            value={formik.values.email}
                            onChange={formik.handleChange}
                            name="email"
                            placeholder="Enter Email Address..."
                          />
                          <span style={{ color: "red" }}>
                            {formik.errors.email}
                          </span>
                        </div>
                        <div className="form-group pb-2">
                          <input
                            className={`form-control ${
                              formik.errors.password ? `input-error` : ``
                            }`}
                            id="exampleInputPassword"
                            type={"password"}
                            value={formik.values.password}
                            onChange={formik.handleChange}
                            placeholder="Password"
                            name="password"
                          />
                          <span style={{ color: "red" }}>
                            {formik.errors.password}
                          </span>
                        </div>
                        <div className="form-group">
                          <div className="text-start  fw-bold pb-2">
                            <Link to={"/resetpassword"} className="text-info">
                              Forgot password ?
                            </Link>
                          </div>
                        </div>

                        <button
                          type="submit"
                          className="btn btn-outline-primary container fw-bold myname "
                        // onClick={()=>handleLogin()}
                        >
                          LOGIN
                        </button>
                      </form>
                      <div className="text-center fw-bold mt-2 pb-4" style={{color:"#ff245b"}}>
                        <p>
                          Don't have an Account ? 
                          <Link to={"/register"} style={{color:"black"}}> Register</Link>
                        </p>
                        <strong className="mt-2"style={{color:"black"}}>User credential</strong> <br/>
                        <span style={{color:"black"}}>Email:midhunkumarengineer98@gmail.com</span><br/>
                        <span style={{color:"black"}}>Password :12345678</span>
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

export default Login;
