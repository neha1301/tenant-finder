import React, { useState } from "react";
import "../SignInUp/css/style.css";
import "../SignInUp/fonts/material-design-iconic-font/css/material-design-iconic-font.min.css";
import Nav from "../Navbar/Nav";
import { useNavigate } from "react-router-dom";
const Swal = require('sweetalert2')
const { body} = require("express-validator");

function SignUp() {
  const [credential, setCredential] = useState({
    name: "",
    email: "",
    signinas: "",
    phone: "",
    password: "",
    cpassword: "",
  });

  const navigate = useNavigate();

  const handleSignIn = () => {
    navigate("/signIn");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:3000/api/NewUser", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: credential.name,
        email: credential.email,
        signinas: credential.signinas,
        phone: credential.phone,
        password: credential.password,
        cpassword: credential.cpassword,
      }),
    });

    const nameRegex = /^[A-Za-z ]+$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[6-9]\d{9}$/;
    const passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@#$%^&+=!])(?=.*[^\s]).{5,}$/;
    const json = await response.json();
    console.log(json);

    if(!nameRegex.test(credential.name)){
      Swal.fire({
        title: 'Error!',
        text: 'Enter valid Name',
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }

    

    else if(!emailRegex.test(credential.email)){
      Swal.fire({
        title: 'Error!',
        text: 'Enter valid Email Id',
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }

    else if(credential.signinas!=='Admim' || credential.signinas!=='User' || credential.signinas!=='admim' || credential.signinas!=='user'){
      Swal.fire({
        title: 'Error!',
        text: 'Enter Correct Sign In as option',
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }

    else if(!mobileRegex.test(credential.phone)){
      Swal.fire({
        title: 'Error!',
        text: 'Enter Correct mobile no.',
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }

    else if(!passwordRegex.test(credential.password)){
      Swal.fire({
        title: 'Error!',
        text: 'Invalid password',
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }

    else if(credential.password!==credential.cpassword){
      Swal.fire({
        title: 'Error!',
        text: 'password and confirm password did not match',
        icon: 'error',
        confirmButtonText: 'OK'
      })
    }    

    else if (!json.success) {
      Swal.fire({
        title: 'Error!',
        text: 'Mobile no already registered',
        icon: 'error',
        confirmButtonText: 'OK'
      })

    } else {
      navigate("/");
    }
  };

  const onChange = (e) => {
    setCredential({ ...credential, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <Nav />

      <div onSubmit={handleSubmit} className="wrapper">
        <div className="inner">
          <form action="">
            <h3>SIGN UP FORM</h3>
            <div className="form-group">
              <div className="form-wrapper">
                <label htmlFor="">
                  <b>Name</b>
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="name"
                  value={credential.name}
                  onChange={onChange}
                />
              </div>
            </div>
            <div className="form-wrapper">
              <label htmlFor="">
                <b>Email</b>
              </label>
              <input type="text" className="form-control" name="email"
              
              value={credential.email}
              onChange={onChange} />
            </div>

            <div className="form-wrapper">
              <label htmlFor="">
                <b>Sign In As(Admin/User)</b>
              </label>
              <input type="text" className="form-control" name="signinas"
              
              value={credential.signinas}
              onChange={onChange} />
            </div>

            
            <div className="form-wrapper">
              <label htmlFor="">
                <b>Phone Number</b>
              </label>
              <input type="text" className="form-control" name="phone"
                  value={credential.phone}
                  onChange={onChange}/>
            </div>

            <div className="form-wrapper">
              <label htmlFor="">
                <b>Password</b>
              </label>
              <input type="password" className="form-control" name="password"
                  value={credential.password}
                  onChange={onChange}/>
            </div>
            <div className="form-wrapper">
              <label htmlFor="">
                <b>Confirm Password</b>
              </label>
              <input type="password" className="form-control" name="cpassword"
                  value={credential.cpassword}
                  onChange={onChange}/>
            </div>
            <div className="form-wrapper">
              <button>SIGN UP</button>
            </div>
            <div className="form-wrapper">
              <button onClick={handleSignIn}>Already a member</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
