import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Note from './components/Note';
import About from './components/About';
import ForgetPassword from './components/ForgetPassword';
import NoteState from './context/notes/noteState';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
// import Alert from './components/Alert';




function App() {
  return (
    <>
      <NoteState>
      <Router>
      <Navbar/>
      <Note/>
      <Login/>
      <SignUp/>
      <ForgetPassword/>
      <Routes>
      <Route exact path="/" element={<Home/>}/>
        <Route exact path="/About" element={<About/>}/>
      </Routes>
      </Router>
      </NoteState>
    </>
  );
}

export default App;
