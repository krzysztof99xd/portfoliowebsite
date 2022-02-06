import React from 'react'
// import { Link } from 'react-router-dom'
import Typical from 'react-typical'
import "./Profile.css"
import "../App.css"
import {useState, useEffect} from "react";

export default function Profile() {
    const [user, setUser] = useState("");
    const[login, setLogin]= useState("");
    const[avatar_url, setAvatar_url]= useState("")
    const API_URL = "https://api.github.com/users/krzysztof99xd"
    useEffect(() => {
        fetch(API_URL)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setData(data);
        });
    },[])

    const setData = ({login, avatar_url}) =>{
        setLogin(login)
        setAvatar_url(avatar_url)
    }
    function navigateToTheBottom(e){
        e.preventDefault();
        window.scrollTo(0, document.body.scrollHeight)
    }

    // const tabs = document.querySelectorAll('[data-target]'),
    //     tabContents = document.querySelectorAll('[data-content]')  
        
    // tabs.forEach(tab => {
    //     tab.addEventListener('click', () =>{
    //         const target = document.querySelector(tab.dataset.target)

    //         tabContents.forEach(tabContent =>{
    //             tabContent.classList.remove('qualification-active' )
    //         })
    //         target.classList.add('qualification-active')

    //         tabs.forEach(tab =>{
    //             tab.classList.remove('qualification-active')
    //         })
    //         tab.classList.add('qaulification-active')
    //     })
    // })
        // <div>
        //     <button onClick={getUserInfo} type="button">Click here to fetch the dat</button> 
        // </div>
    return (
        <div className="profile-container">
            <div className="profile-parent">
                <div className="profile-details">
                    <div className="profile-details-name">
                        <span className="primary-text">
                            Hello I am <span id="highlighted-text" className="highlighted-text">Krzysztof</span>
                        </span>
                    </div>
                    <div className="profile-details-role">
                        <span className="primary-text">
                            <h1>
                            <Typical
                                loop={Infinity}
                                steps={[
                                    "Eager to learn",
                                    1000,
                                    "Student abroad",
                                    1000,
                                    "Calisthenic",
                                    1000,
                                        ]}
                                    />
                            </h1>
                            <span className="profile-role-tagline">
                            Eager to develop the friendly user interface
                            </span>
                        </span>
                    </div>
                    <div className="profile-options">
                        <button className="btn-primary" onClick={navigateToTheBottom}>
                            Contact me 
                            <i class="icon-envelope fas fa-envelope"></i>
                        </button>
                            <a className="CV-download" href='KrzysztofCVNetherland.pdf' download='KrzysztofCVNetherland.pdf'>
                         <button className="btn-primary"> Get resume 
                         <i class="icon-resume far fa-file"></i></button>
                        </a>      
                    </div>
                  
                </div>
                <div className="profile-picture">
                    <div className="profile-picture-background">

                    </div>
                </div>  
            </div>
            <div className='profile-description'>
                <h1 className='a-little-bit-about-me'> A little bit about me</h1> 
                <p>I am 23 years old Polish guy who currently studies at the University of Twente in the Netherlnads. As for Dutch people I am propably quite old, 23 years old and just a second year of Bachelor?
                What was I doing before?</p>
                <p>I was studying Marketing Management in Denmark, in a small city called Randers. After getting the internship in my second year where I had the opportunity to work actually in the industry I decided that it is not something what drives me and definitely not something I want to do until the end of my life.</p>
                I decided that I would like to try myself in a different field. Therefore, I decided to come to the Netherlands to study Business Information Technology. It means that I take half classes together with <b>Computer Science</b> and the other half with <b>Industrial Engineering</b>.
                I really enjoy my journey in the Netherlands so far and I enjoy programming as well. I am planning to develop myself in <b>Web Development</b> and <b>Data Science</b>. 
                <p>When it comes to my hobbies, I enjoy calisthenics as well as cooking. Check it out in "My interests" tab.</p>
            </div>
            <section className='qualification-section'>
                <h2 classname="section-title">Qualification</h2>
                    <div className='qualification-container'>
                      <div className= "qualification-tabs">
                        {/* <div className='qualification-button qualification-active' data-target='#education'>
                            <i class="fas fa-graduation-cap"></i>
                                Education
                        </div> */}
                        <div className='qualification-button' data-target='#work'>
                            <i class="fas fa-briefcase"></i>
                                Work experience
                        </div>
                       </div>
                       <div className="qualification-sections">
                            <div class="qualification-content qualification-active" data-content id='education'>
                                <div className="qualification-data">
                                    <div>
                                        <h3 className='qualification-title'>Teaching Assistant</h3>
                                        <span className="qualification-subtitle">University of Twente, Enschede</span>
                                            <div className='qualification-calendar'>    
                                            <i class="far fa-calendar"></i>
                                            2020-2021
                                            </div>
                                            <div className='qualification-description'>
                                            <em>I became a Teaching Assistant (TA) at BIT program. 
                                                I work with System Design course where I answer the student questions about <b>UML diagrams</b>, 
                                                I help them with assignments. In the end of the course students are also introduced to the <b>GIT version control</b>, so I also help them with setting the git repository, introduce them to basic opartions there. In the end of the academic year I will become a TA for Data and Information course where will help students with <b>SQL queries, Web Development</b> and more.</em>
                                            </div>
                                    </div>
                                    <div>
                                        <span className='qualification-rounder'></span>
                                        <span className='qualification-line'></span>
                                    </div>
                                </div>

                                <div className="qualification-data">
                                    <div></div>
                                    
                                    <div>
                                        <span className='qualification-rounder'></span>
                                        <span className='qualification-line'></span>
                                    </div>

                                    <div>
                                        <h3 className='qualification-title'>Waiter at Theatre Cafe</h3>
                                        <span className="qualification-subtitle">University of Twente, Enschede</span>
                                            <div className='qualification-calendar'>    
                                            <i class="far fa-calendar"></i>
                                            Oct 2021 - present
                                            </div>
                                            <div className='qualification-description'>
                                            <em>Since I have been living almost 4 years abroad I decided that I must learn the language of the country where I live in (Unfortunately I did not do it in Denmark). 
                                                Therefore, I decided to apply for the waiter position at the cafe in the University. I try to use there as much Dutch as possible (I take the Dutch classes at the language centre at the University of Twnente). <b>Hopelijk spreek ik over een jaar vloeiend Nederlands!</b> </em>   
                                            </div>
                                    </div>
                                </div>

                                <div className="qualification-data">
                                    <div>
                                        <h3 className='qualification-title'>Marketing Intern</h3>
                                        <span className="qualification-subtitle">Fututre Company A/S, Aarhus</span>
                                            <div className='qualification-calendar'>    
                                            <i class="far fa-calendar"></i>
                                            Jan 2020 - July 2020
                                            </div>
                                            <div className='qualification-description'>
                                            <em>I managed to get an internship on my second year of studies. 
                                            I was mostly working with social media and paid ads. I was creating advertising content using <b>Adobe Creative Cloud </b>(mainly Adobe Illustartor and Adobe Photoshop). 
                                            As part of my marketing responsibilities I was also working with <b>Google Ads</b>. 
                                            My responsibility was also to maintain and update the company's website using <b>Wordpress</b>.
                                            I also participated in Photoshop, InDesign and Illustrator courses.</em>
                                            </div>
                                    </div>

                                    <div>
                                        <span className='qualification-rounder'></span>
                                        <span className='qualification-line'></span>
                                    </div>
                                    
                                </div>
                                <div className="qualification-data">
                                    <div></div>
                                    <div>
                                        <span className='qualification-rounder'></span>
                                        {/* <span className='qualification-line'></span> */}
                                    </div>

                                    <div>
                                        <h3 className='qualification-title'>Food delivery and kitchen assistance</h3>
                                        <span className="qualification-subtitle">Randers</span>
                                            <div className='qualification-calendar'>    
                                            <i class="far fa-calendar"></i>
                                            Nov 2018 - July 2020
                                            </div>
                                            <div className='qualification-description'>
                                                <em>Since I moved out from Poland to Denmark I wanted to lighten my parents wallet so I decided to have a part-time job. Undoubtedly I matured a lot during this period. 
                                                I have improved my <b>time-management</b>, I learnt to <b>work under time pressure, deal much better with stress</b> and learnt how to make some nigiris. </em> 
                                            </div>
                                    </div>
                                </div>
                            </div>
                           
                        </div>  
                    </div>
            </section>  
         </div>
  
    )
}