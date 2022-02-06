
import './App.css';
import Home from './components/pages/Home';
import Projects from "./components/pages/Projects";
import StreetWorkout from './components/pages/StreetWorkout';
import {BrowserRouter, Routes, Route} from "react-router-dom"
import NavBar from './components/NavBar';

function App() {
  return (
    <>
    <BrowserRouter>
    <NavBar/>
      <Routes>
        <Route path ="/" element={<Home/>}/>
        <Route path="/projects" element={<Projects/>}/>
        <Route path ="/street-workout" element={<StreetWorkout/>}/>
        </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
