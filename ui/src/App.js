import "./App.css";

import NavBar from "./Navbar/NavBar";
import Contact from "./Contact/Contact";

import { BrowserRouter, Route, Routes } from "react-router-dom";
import SignIn from "./SignInUp/SignIn";
import SignUp from "./SignInUp/SignUp";
import About from "./About/About";
import AddProperty from "./views/AddProperty";

import { useAuth } from "./context/authContext";

function App() {
  const { loggedIn, mobile, email, role } = useAuth();

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<NavBar />} />
        <Route path="add-property" element={<AddProperty />} />
        <Route path="about" element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="signIn" element={<SignIn />} />
        <Route path="signUp" element={<SignUp />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
