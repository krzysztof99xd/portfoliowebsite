import React from 'react'
import Profile from "../Profile";
import Footer from '../Footer';


function Home() {
    return (
        <div className='project-container'>
            <div className='project-description'>
            <Profile/>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;