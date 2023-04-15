import React from 'react'

import '../SignInUp/css/style.css';
import '../SignInUp/fonts/material-design-iconic-font/css/material-design-iconic-font.min.css';
import Nav from '../Navbar/Nav';
import { useNavigate } from 'react-router-dom';

function SignIn() {
	const navigate = useNavigate();

  const handleSignUp = ()=>{
    navigate('/signUp')
  }
  return (
	<div>
		<Nav/>
	  <div className="wrapper" >
			<div className="inner">
				<form action="">
					<h3>SIGN IN FORM</h3>
					
					
					<div className="form-wrapper">
						<label htmlFor=""><b>Phone Number</b></label>
						<input type="text" className="form-control"/>
					</div>
					<div className="form-wrapper">
						<label htmlFor=""><b>Password</b></label>
						<input type="password" className="form-control"/>
					</div>

					<div className="form-wrapper">
						<label htmlFor=""><b>Sign In as</b></label>
						

						<select name="Choose" id="Admin" className='form-control'>
						<option value="Admin" className='forn-control'>Choose a option</option>
						<option value="Admin">Admin</option>
						<option value="User">User</option>
					
						</select>
					</div>

					<div className="form-wrapper">
					<button>SIGN IN</button>
					</div>
					<div className="form-wrapper">
					<button onClick={handleSignUp}>NEW USER</button>
					</div>
				</form>
			</div>
		</div>
	</div>
  )
}

export default SignIn




		