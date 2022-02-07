import React from 'react'
import Footer from '../Footer'
import {useState, useEffect} from "react";
import  ReactPlayer  from 'react-player';
export default function StreetWorkout() {
  
    return (
        <div className="street-workout-container">
            <div className="interests-description">
                <h2><em>Expect studies and work I have a lot of things which I like doing in my free time</em></h2>
            </div>
            
            <div className='street-workout-section'>
                <div className='street-workout-video'>
                    <video controls 
                        src= "/videos/ringpullups.mp4">
                        type"video/mp4"
                    </video>
                </div>
                <div className='street-workout-description'>
                    <p className='title-paragraph'><b><em>Calisthenics</em></b><i class="icon-running fas fa-running"></i></p>
                            <p>It is a sport which I felt in love to</p>
                        <p>Before starting my journey with calisthenics I had been going to the gym. I also enjoyed my journey there. However, when COVID pandermic started, things got complicated and I had to find a way to keep exercising.</p>
                        <p>Fortunately, I came across calisthenics which became an inherent element of my life.</p>

                </div>
            </div>
            <div className='cooking-section'>
                    <div className='cooking-description'>
                    <p className='title-paragraph'><b><em>Cooking</em></b><i class="icon-cooking fas fa-utensils"></i></p>
                        <p>When pandemic started I also discovered my new hobby... <b><em>cooking</em></b>.</p>        
                        <p>It was also a moment when I turned vegetarian which required from me to come up with new recipes in order to keep my diet diverse.</p>
                        <p>For a long period in my life I was not aware how important part in our lifes plays the nutrition. Giving up meat and improving my diet has changed my life. Aristotle said very wisely:</p>
                        <p className='clever-quote'><em>Mdicus curat, natura sanat (doctor heals, the nature makes well)</em></p>
                    </div>
                <div className= "cooking-photo">
                </div>
               </div>
            <Footer/>
        </div>
     
    )
}
