import React from "react";
import mainLogo from "../images/logo2.png";
import "../SuperAdmin/superAdmin.css";
import eye from "../images/eye.png";
import { useNavigate, useLocation } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';
import { loginService } from "../Services/Axios";
import { userAuth } from "../Utilities/Constants";

export default function LogOut() {
  const navigate = useNavigate();

  

  const SignupSchema = Yup.object().shape({
    name: Yup.string().min(5, 'Too Short!').max(30, 'Too Long!').required('*Username cannot be blank'),
    password: Yup.string().min(5, 'Password must be 5 characters long')
                          .max(30, 'Password must be 30 characters long')
                          .required('Password cannot be blank')
                          // .matches(/[0-9]/, 'Password requires a number')
                          // .matches(/[a-z]/, 'Password requires a lowercase letter')
                          // .matches(/[A-Z]/, 'Password requires an uppercase letter')
                          // .matches(/[^\w]/, '*Password requires a symbol'),
});

  const {handleChange,handleSubmit,errors,values,touched} = useFormik({
    initialValues:{
      name:"",
      password:"",
      authcode : userAuth,
      device_type : 3
    },
    // enableReinitialize:true,
    validationSchema:SignupSchema,
    onSubmit:values=>{
      handleLogin (values)
    },
 
  })
  console.log(values,"error")
  const handleLogin = (data) => {
    let formData = new FormData()
    formData.append("username", data.name)
    formData.append("password", data.password)
    formData.append("authcode", data.authcode)
    formData.append("device_type", data.device_type)
    loginService(formData).then((res) =>  {
       console.log(res.data, "response");
       if(res.data.status === 1) {
         navigate('/')
       }
      }).catch((err) => console.log(err, "error"))
  }

  return (
    <div className="MainBody">
      
      <div className="signUpBox">
        <img className="mainlogo" src={mainLogo} alt="MainLogo" />
        <h4 className="titleMain">Sign In</h4>
        <div className="inputFieldsign">
          <input className="input" type="text"  placeholder="User name" value={values.name} name="name" onChange={handleChange} />
          {errors.name && touched.name ? <p style={{color:"red",fontSize: "14px"}}>{errors.name}</p> : null}
        </div>
        <div className="inputFieldsign">
       <input className="input" min="1" max="6" type="password" placeholder="Password" value={values.password} name="password" onChange={handleChange} />
       {errors.password && touched.password ? <p  style={{color:"red",fontSize: "14px"}}>{errors.password}</p> : null}
         
          {/* <img className="eyeMain" src={eye} alt="eye" /> */}
        </div>
        <button type="submit" onClick={handleSubmit} className="signBtn">
          Sign In
        </button>
      </div>
      <br />
    </div>
  );
}
