import { useState } from "react";
import axios from "axios";
import "../SignInUp/css/style.css";
import "../SignInUp/fonts/material-design-iconic-font/css/material-design-iconic-font.min.css";
import Nav from "../Navbar/Nav";
import { useNavigate } from "react-router-dom";

function SignUp() {

  const handleSignIn = () => {
		navigate('/signIn');
	}
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    role: "",
    mobileNumber: "",
    password: "",
    cpassword: "",
  });
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const {
      firstName,
      lastName,
      email,
      mobileNumber,
      role,
      password,
      cpassword,
    } = formData;

    if (password !== cpassword) {
      alert("Passwords do not match!");
      return;
    }

    axios
      .post("/signUp", {
        firstName,
        lastName,
        email,
        mobileNumber,
        role,
        password,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/signIn");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <Nav />
      <div className="wrapper">
        <div className="inner">
          <form onSubmit={handleSubmit}>
            <h3>SIGN UP FORM</h3>
            <div className="form-group">
              <div className="form-wrapper">
                <label htmlFor="">
                  <b>First Name</b>
                </label>
                <input
                  type="text"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleInputChange}
                  placeholder="First Name"
                  required
                />
              </div>
              <div className="form-wrapper">
                <label htmlFor="">
                  <b>Last Name</b>
                </label>
                <input
                  type="text"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleInputChange}
                  placeholder="Last Name"
                  required
                />
              </div>
            </div>
            <div className="form-wrapper">
              <label htmlFor="">
                <b>Email</b>
              </label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Email"
                required
              />
            </div>
            <div className="form-wrapper">
              <label htmlFor="">
                <b>Sign In as</b>
              </label>
              <select
                name="role"
                id="role"
                className="form-control"
                value={formData.role}
                onChange={handleInputChange}
                required
              >
                <option value="Admin">Admin</option>
                <option value="User">User</option>
              </select>
            </div>
            <div className="form-wrapper">
              <label htmlFor="">
                <b>Phone Number</b>
              </label>
              <input
                type="text"
                name="mobileNumber"
                value={formData.mobileNumber}
                onChange={handleInputChange}
                placeholder="Phone Number"
                required
              />
            </div>
            <div className="form-wrapper">
              <label htmlFor="">
                <b>Password</b>
              </label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Password"
                required
              />
            </div>
            <div className="form-wrapper">
              <label htmlFor="">
                <b>Confirm Password</b>
              </label>
              <input
                type="password"
                name="cpassword"
                value={formData.cpassword}
                onChange={handleInputChange}
                placeholder="Confirm Password"
                required
              />
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

// // import React,{useState} from 'react';
// // import '../SignInUp/css/style.css';
// // import '../SignInUp/fonts/material-design-iconic-font/css/material-design-iconic-font.min.css';
// // import Nav from '../Navbar/Nav';
// // import { useNavigate } from 'react-router-dom';
// // function SignUp() {
// // 	const navigate = useNavigate();

// //   const handleSignIn = ()=>{
// //     navigate('/signIn')
// //  }
// // //  const [user, setUser]=useState({
// // // 	fname: "", lname: "", email: "", sinas:"", phone:"",password:"", cpassword: ""
// // //  });
// // //  let name,value;
// // //  const handleInputs =(e) =>{
// // // 	console.log(e);
// // // 	name =e.target.name;
// // // 	value = e.target.value;

// // // 	setUser({...user,[name]:value})
// // //  }
// //   return (
// // 	<div>
// // 		<Nav/>
// // 	  <div className="wrapper" >
// // 			<div className="inner">
// // 				<form action="">
// // 					<h3>SIGN UP FORM</h3>
// // 					<div className="form-group">
// // 						<div className="form-wrapper">
// // 							<label htmlFor=""><b>First Name</b></label>
// // 							<input type="text" id="fname"
// // 							// value={user.fname}
// // 							// onChange={handleInputs}
// // 							// placeholder =" First Name"
// // 							/>
// // 						</div>
// // 						<div className="form-wrapper">
// // 							<label htmlFor=""><b>Last Name</b></label>
// // 							<input type="text" id="lname"
// // 							// value={user.lname}
// // 							// onChange={handleInputs}
// // 							// placeholder =" Last Name"
// // 							/>
// // 						</div>
// // 					</div>
// // 					<div className="form-wrapper">
// // 						<label htmlFor=""><b>Email</b></label>
// // 						<input type="email" id="email"
// // 						// // value={user.email}
// // 						// onChange={handleInputs}
// // 						// placeholder =" Email"
// // 						/>
// // 					</div>
// // 					<div className="form-wrapper">
// // 						<label htmlFor=""><b>Sign In as</b></label>

// // 						<select name="Choose" id="Admin" className='form-control'>
// // 						<option value="Admin" className='forn-control'>Choose a option</option>
// // 						<option value="Admin">Admin</option>
// // 						<option value="User">User</option>

// // 						</select>
// // 					</div>
// // 					<div className="form-wrapper">
// // 						<label htmlFor=""><b>Phone Number</b></label>
// // 						<input type="text" className="form-control"
// // 						// value={user.phone}
// // 						// onChange={handleInputs}
// // 						// placeholder ="Phone Number"
// // 						/>
// // 					</div>

// // 					<div className="form-wrapper">
// // 						<label htmlFor=""><b>Password</b></label>
// // 						<input type="password" id="password"
// // 						// value={user.password}
// // 						// onChange={handleInputs}
// // 						// placeholder ="Password"
// // 						/>
// // 					</div>
// // 					<div className="form-wrapper">
// // 						<label htmlFor=""><b>Confirm Password</b></label>
// // 						<input type="password" id="cpassword"
// // 						// value={user.cpassword}
// // 						// onChange={handleInputs}
// // 						// placeholder ="Confirm Password"
// // 						/>
// // 					</div>
// // 					<div className="form-wrapper">
// // 					<button>SIGN UP</button>
// // 					</div>
// // 					<div className="form-wrapper">
// // 					<button onClick={handleSignIn}>Already a member</button>
// // 					</div>
// // 				</form>
// // 			</div>
// // 		</div>

// // 	</div>
// //   )
// // }
// // export default SignUp
// import { useEffect, useState } from "react";
// import axios from "axios";
// import '../SignInUp/css/style.css';
// import '../SignInUp/fonts/material-design-iconic-font/css/material-design-iconic-font.min.css';
// import Nav from '../Navbar/Nav';
// import { useNavigate } from 'react-router-dom';

// function SignUp() {
//   const navigate = useNavigate();
//   const [user, setUser] = useState({
//     firstName: "",
//     lastName: "",
//     email: "",
//     role:"",
//     mobileNumber:"",
//     password:"",
//     cpassword:""
//   });

//   const handleUserDetails = (userDetails) => {
//     axios.post(
//       "/signUp",
//       userDetails
//     )
//   }

//   const handleFormSubmit =(event) => {
//     event.preventDefault();

//     const {
//       firstName,
//       lastName,
//       email,
//       mobileNumber,
//       role,
//       password,
//       cpassword
//     } = event.target.elements;

//     // setFormData
//     handleUserDetails({
//       firstName: firstName.value,
//       lastName: lastName.value,
//       email: email.value,
//       mobileNumber: mobileNumber.value,
//       role: role.value,
//       password: password.value,
//       cpassword: cpassword.value
//     });
//   }

//   useEffect(() => {

//     // console.log("formData: ", formData);
//   }, [user])
//   const handleSignIn = () => {
//     navigate('/signIn');
//   }

//   // const handleInputs = (e) => {
// 	// console.log(e);
//   //   const { name, value } = e.target;
//   //   setUser({...user, [name]: value });
//   // }

//   // const handleSubmit = async (e) => {
//   //   e.preventDefault();
//   //   const response = await fetch("http://localhost:5000/signup", {
//   //     method: "POST",
//   //     headers: {
//   //       "Content-Type": "application/json",
//   //     },
//   //     body: JSON.stringify({
//   //   fname: user.fname,
//   //   lname: user.lname,
//   //   email: user.email,
//   //   sinas: user.sinas,
//   //   phone: user.phone,
//   //   password: user.password,
//   //   cpassword: user.cpassword
//   //     }),
//   //   });
//   // }

//   return (
//     <div>
//       <Nav />
//       <div className="wrapper">
//         <div className="inner">
//           <form action=""  method='POST' onSubmit={handleFormSubmit}>
//             <h3>SIGN UP FORM</h3>
//             <div className="form-group">
//               <div className="form-wrapper">
//                 <label htmlFor=""><b>First Name</b></label>
//                 <input type="text" id="firstName" name="firstName" value={user.fname} onChange={handleInputs} placeholder=" First Name" />
//               </div>
//               <div className="form-wrapper">
//                 <label htmlFor=""><b>Last Name</b></label>
//                 <input type="text" id="lastName" name="lastName" value={user.lname} onChange={handleInputs} placeholder=" Last Name" />
//               </div>
//             </div>
//             <div className="form-wrapper">
//               <label htmlFor=""><b>Email</b></label>
//               <input type="email" id="email" name="email" value={user.email} onChange={handleInputs} placeholder=" Email" />
//             </div>
//             <div className="form-wrapper">
//               <label htmlFor=""><b>Sign In as</b></label>
//               <select name="sinas" id="role" className='form-control' value={user.sinas} onChange={handleInputs}>
//                 <option value="Admin">Admin</option>
//                 <option value="User">User</option>
//               </select>
//             </div>
//             <div className="form-wrapper">
//               <label htmlFor=""><b>Phone Number</b></label>
//               <input type="text" id="mobileNumber" name="mobileNumber" value={user.phone} onChange={handleInputs} placeholder="Phone Number" />
//             </div>
//             <div className="form-wrapper">
//               <label htmlFor=""><b>Password</b></label>
//               <input type="password" id="password" name="password" value={user.password} onChange={handleInputs} placeholder="Password" />
//             </div>
//             <div className="form-wrapper">
//               <label htmlFor=""><b>Confirm Password</b></label>
//               <input type="password" id="cpassword" name="cpassword" value={user.cpassword} onChange={handleInputs} placeholder="Confirm Password" />
//             </div>
//             <div className="form-wrapper">
//               <button>SIGN UP</button>
//             </div>
//             <div className="form-wrapper">
//               <button onClick={handleSignIn}>Already a member</button>
//             </div>
//             </form>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default SignUp
