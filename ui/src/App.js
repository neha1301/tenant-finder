import './App.css';

import NavBar from './Navbar/NavBar';
import Contact from './Contact/Contact';

import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignIn from './SignInUp/SignIn';
import SignUp from './SignInUp/SignUp';
import About from './About/About';


function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<NavBar/>} />          
          <Route path="about" element={<About />} />
           
      <Route path='contact' element={<Contact/>} />
      <Route path='signIn' element={<SignIn/>} />
      <Route path='signUp' element={<SignUp/>} />
    </Routes>
     
      </BrowserRouter>
      
    </>
  );
};
export default App;
