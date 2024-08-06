import './App.css';
import Navbar from './components/Navbar';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Home from './components/Home';
import Note from './components/Note';
import MyNotes from './components/MyNotes';
import ForgetPassword from './components/ForgetPassword';
import NoteState from './context/notes/noteState';


import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useEffect } from 'react';

function App() {
  //refresh screen if we swipe down in phone
  useEffect(() => {
    const handleTouchMove = (event) => {
      if (event.touches.length === 1 && event.touches[0].clientY > 0) {
        // Swipe down detected, refresh the page
        window.location.reload();
      }
    };
    window.addEventListener('touchmove', handleTouchMove);
    return () => {
      window.removeEventListener('touchmove', handleTouchMove);
    };
  }, []);

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
      <Route exact path="/Notes" element={<MyNotes/>}/>
      </Routes>
      </Router>
      </NoteState>
    </>
  );
}

export default App;
