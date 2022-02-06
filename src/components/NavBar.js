import React from 'react'
import "./NavBar.css"
import "../App.css"
import { Link } from 'react-router-dom'

export default function NavBar() {
    function changeMode(){
        var element = document.body;
        element.classList.toggle("dark");
        const changing = document.getElementById('mode')
        if (changing.textContent.includes("Light")){
            document.getElementById('mode').innerHTML = "Dark Mode";
            document.getElementById('mode').style.backgroundColor = "black"
            document.getElementById('mode').style.color = "white"
        }else{
            document.getElementById('mode').innerHTML = "Light Mode";
            document.getElementById('mode').style.backgroundColor = "white"
            document.getElementById('mode').style.color = "black"
        }
    }        
       
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <div className = "navbar-container">
                <Link to="/" className="nav-links" >
                    About me 
                </Link>
                <Link to="/projects" className="nav-links"> Projects </Link>
                <Link to="/street-workout" className="nav-links"> My interests</Link>
                <div className='mode-container'>
                <button id="mode" className='mode' onClick={changeMode}>Dark Mode</button>
                </div>
                </div>
            </div>
        </nav>
    )
}
