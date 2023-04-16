// import React,{useState} from 'react';
// import '../SignInUp/css/style.css';
// import '../SignInUp/fonts/material-design-iconic-font/css/material-design-iconic-font.min.css';
// import Nav from '../Navbar/Nav';
// import { useNavigate } from 'react-router-dom';
// function SignUp() {
// 	const navigate = useNavigate();

//   const handleSignIn = ()=>{
//     navigate('/signIn')
//  }
// //  const [user, setUser]=useState({
// // 	fname: "", lname: "", email: "", sinas:"", phone:"",password:"", cpassword: ""
// //  });
// //  let name,value;
// //  const handleInputs =(e) =>{
// // 	console.log(e);
// // 	name =e.target.name;
// // 	value = e.target.value;

// // 	setUser({...user,[name]:value})
// //  }
//   return (
// 	<div>
// 		<Nav/>
// 	  <div className="wrapper" >
// 			<div className="inner">
// 				<form action="">
// 					<h3>SIGN UP FORM</h3>
// 					<div className="form-group">
// 						<div className="form-wrapper">
// 							<label htmlFor=""><b>First Name</b></label>
// 							<input type="text" id="fname"
// 							// value={user.fname}
// 							// onChange={handleInputs}
// 							// placeholder =" First Name"
// 							/>
// 						</div>
// 						<div className="form-wrapper">
// 							<label htmlFor=""><b>Last Name</b></label>
// 							<input type="text" id="lname"
// 							// value={user.lname}
// 							// onChange={handleInputs}
// 							// placeholder =" Last Name"
// 							/>
// 						</div>
// 					</div>
// 					<div className="form-wrapper">
// 						<label htmlFor=""><b>Email</b></label>
// 						<input type="email" id="email"
// 						// // value={user.email}
// 						// onChange={handleInputs}
// 						// placeholder =" Email"
// 						/>
// 					</div>
// 					<div className="form-wrapper">
// 						<label htmlFor=""><b>Sign In as</b></label>
						

// 						<select name="Choose" id="Admin" className='form-control'>
// 						<option value="Admin" className='forn-control'>Choose a option</option>
// 						<option value="Admin">Admin</option>
// 						<option value="User">User</option>
					
// 						</select>
// 					</div>
// 					<div className="form-wrapper">
// 						<label htmlFor=""><b>Phone Number</b></label>
// 						<input type="text" className="form-control"
// 						// value={user.phone}
// 						// onChange={handleInputs}
// 						// placeholder ="Phone Number"
// 						/>
// 					</div>
					
// 					<div className="form-wrapper">
// 						<label htmlFor=""><b>Password</b></label>
// 						<input type="password" id="password"
// 						// value={user.password}
// 						// onChange={handleInputs}
// 						// placeholder ="Password"
// 						/>
// 					</div>
// 					<div className="form-wrapper">
// 						<label htmlFor=""><b>Confirm Password</b></label>
// 						<input type="password" id="cpassword"
// 						// value={user.cpassword}
// 						// onChange={handleInputs}
// 						// placeholder ="Confirm Password"
// 						/>
// 					</div>
// 					<div className="form-wrapper">
// 					<button>SIGN UP</button>
// 					</div>
// 					<div className="form-wrapper">
// 					<button onClick={handleSignIn}>Already a member</button>
// 					</div>
// 				</form>
// 			</div>
// 		</div>
		
// 	</div>
//   )
// }
// export default SignUp

import React, { useState } from 'react';
import '../SignInUp/css/style.css';
import '../SignInUp/fonts/material-design-iconic-font/css/material-design-iconic-font.min.css';
import Nav from '../Navbar/Nav';
import { useNavigate } from 'react-router-dom';

function SignUp() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    fname: "",
    lname: "",
    email: "",
    sinas:"",
    phone:"",
    password:"",
    cpassword:""
  });
  
  const handleSignIn = () => {
    navigate('/signIn');
  }

  const handleInputs = (e) => {
	console.log(e);
    const { name, value } = e.target;
    setUser({...user, [name]: value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch("http://localhost:5000/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
    fname: user.fname,
    lname: user.lname,
    email: user.email,
    sinas: user.sinas,
    phone: user.phone,
    password: user.password,
    cpassword: user.cpassword
      }),
    });
  }

  return (
    <div>
      <Nav />
      <div className="wrapper">
        <div className="inner">
          <form action=""  method='POST'>
            <h3>SIGN UP FORM</h3>
            <div className="form-group">
              <div className="form-wrapper">
                <label htmlFor=""><b>First Name</b></label>
                <input type="text" id="fname" name="fname" value={user.fname} onChange={handleInputs} placeholder=" First Name" />
              </div>
              <div className="form-wrapper">
                <label htmlFor=""><b>Last Name</b></label>
                <input type="text" id="lname" name="lname" value={user.lname} onChange={handleInputs} placeholder=" Last Name" />
              </div>
            </div>
            <div className="form-wrapper">
              <label htmlFor=""><b>Email</b></label>
              <input type="email" id="email" name="email" value={user.email} onChange={handleInputs} placeholder=" Email" />
            </div>
            <div className="form-wrapper">
              <label htmlFor=""><b>Sign In as</b></label>
              <select name="sinas" id="sinas" className='form-control' value={user.sinas} onChange={handleInputs}>
                <option value="Admin">Admin</option>
                <option value="User">User</option>
              </select>
            </div>
            <div className="form-wrapper">
              <label htmlFor=""><b>Phone Number</b></label>
              <input type="text" id="phone" name="phone" value={user.phone} onChange={handleInputs} placeholder="Phone Number" />
            </div>
            <div className="form-wrapper">
              <label htmlFor=""><b>Password</b></label>
              <input type="password" id="password" name="password" value={user.password} onChange={handleInputs} placeholder="Password" />
            </div>
            <div className="form-wrapper">
              <label htmlFor=""><b>Confirm Password</b></label>
              <input type="password" id="cpassword" name="cpassword" value={user.cpassword} onChange={handleInputs} placeholder="Confirm Password" />
            </div>
            <div className="form-wrapper">
              <button onClick={handleSubmit}>SIGN UP</button>
            </div>
            <div className="form-wrapper">
              <button onClick={handleSignIn}>Already a member</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default SignUp