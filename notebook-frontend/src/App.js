import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Note from './components/Note';
import About from './components/About';
import ForgetPassword from './components/ForgetPassword';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
        <Route exact path="/Login" element={<Login/>}/>
        <Route exact path="/SignUp" element={<SignUp/>}/>
        <Route exact path="/Note" element={<Note/>}/>
        <Route exact path="/About" element={<About/>}/>
        <Route exact path="/forgetPassword" element={<ForgetPassword/>}/>
      </Routes>
      </Router>
    </div>
  );
}

export default App;
