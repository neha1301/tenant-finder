import { useEffect, useState } from "react";
import axios from "axios";
import '../SignInUp/css/style.css';
import '../SignInUp/fonts/material-design-iconic-font/css/material-design-iconic-font.min.css';
import Nav from '../Navbar/Nav';
import { useNavigate } from 'react-router-dom';

function SignIn() {
	const navigate = useNavigate();

	const handleSignUp = () => {
		navigate('/signUp');
	}

	const [user, setUser] = useState({
		mobileNumber: "",
		role: "",
		password: "",
		cpassword: ""
	});

	const handleUserDetails = async (userDetails) => {
		try {
			const response = await axios.post("/signIn", userDetails);
			console.log(response.data);
		} catch (error) {
			console.log(error);
		}
	}

	const handleInputChange = (event) => {
		const { name, value } = event.target;
		setUser((prevUser) => ({
			...prevUser,
			[name]: value
		}));
	}

	const handleFormSubmit = (event) => {
		event.preventDefault();
		handleUserDetails(user);
	}

	useEffect(() => {
		console.log("user: ", user);
	}, [user]);

	return (
		<div>
			<Nav />
			<div className="wrapper">
				<div className="inner">
					<form onSubmit={handleFormSubmit}>
						<h3>SIGN IN FORM</h3>

						<div className="form-wrapper">
							<label htmlFor="mobileNumber"><b>Phone Number</b></label>
							<input type="text" id="mobileNumber" name="mobileNumber" value={user.mobileNumber} onChange={handleInputChange} className="form-control" />
						</div>

						<div className="form-wrapper">
							<label htmlFor="password"><b>Password</b></label>
							<input type="password" id="password" name="password" value={user.password} onChange={handleInputChange} className="form-control" />
						</div>

						<div className="form-wrapper">
							<label htmlFor="role"><b>Sign In as</b></label>
							<select name="role" id="role" value={user.role} onChange={handleInputChange} className="form-control">
								<option value="">Choose a option</option>
								<option value="Admin">Admin</option>
								<option value="User">User</option>
							</select>
						</div>

						<div className="form-wrapper">
							<button type="submit">SIGN IN</button>
						</div>

						<div className="form-wrapper">
							<button type="button" onClick={handleSignUp}>NEW USER</button>
						</div>
					</form>
				</div>
			</div>
		</div>
	)
}

export default SignIn;









// import { useEffect, useState } from "react";

// import axios from "axios";
// import '../SignInUp/css/style.css';
// import '../SignInUp/fonts/material-design-iconic-font/css/material-design-iconic-font.min.css';
// import Nav from '../Navbar/Nav';
// import { useNavigate } from 'react-router-dom';

// function SignIn() {
// 	const navigate = useNavigate();

//   const handleSignUp = ()=>{
//     navigate('/signUp')
//   }
// const [user, setUser] = useState({
//     mobileNumber:"",
// 	role:"",
//     password:"",
//     cpassword:""
//   });

//   const handleUserDetails = (userDetails) => {
//     axios.post(
//       "/signIn",
//       userDetails
//     )
//   }
//   const handleFormSubmit =(event) => {
//     event.preventDefault();

//     const {
//       mobileNumber,
//       role,
//       password,
//     } = event.target.elements;

//     // setFormData
//     handleUserDetails({
//       mobileNumber: mobileNumber.value,
//       role: role.value,
//       password: password.value,
//     });
//   }
//   useEffect(() => {
//     // console.log("formData: ", formData);
//   }, [user])
//   return (
// 	<div>
// 		<Nav/>
// 	  <div className="wrapper" >
// 			<div className="inner">
// 				<form action="">
// 					<h3>SIGN IN FORM</h3>
// 					<div className="form-wrapper">
// 						<label htmlFor=""><b>Phone Number</b></label>
// 						<input type="text" className="form-control"/>
// 					</div>
// 					<div className="form-wrapper">
// 						<label htmlFor=""><b>Password</b></label>
// 						<input type="password" className="form-control"/>
// 					</div>
// 					<div className="form-wrapper">
// 						<label htmlFor=""><b>Sign In as</b></label>
// 						<select name="Choose" id="Admin" className='form-control'>
// 						<option value="Admin" className='forn-control'>Choose a option</option>
// 						<option value="Admin">Admin</option>
// 						<option value="User">User</option>
// 											</select>
// 					</div>
// 					<div className="form-wrapper">
// 					<button>SIGN IN</button>
// 					</div>
// 					<div className="form-wrapper">
// 					<button onClick={handleSignUp}>NEW USER</button>
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// 	</div>
//   )
// }
// export default SignIn	