import React, {Component} from 'react'
import Card from 'react-bootstrap/Card'
import Footer from '../Footer'
import {useState, useEffect} from "react";
import ListGroupItem from 'react-bootstrap/ListGroupItem';
import ListGroup from 'react-bootstrap/ListGroup';
import LanguagesList from '../LanguagesList';

export default function Projects() {

    const[repos, setRepos] = useState([])
    const API_URL_REPOS = "https://api.github.com/users/krzysztof99xd/repos"
    useEffect(() => {
        fetch(API_URL_REPOS)
        .then(res => res.json())
        .then(data => {
            console.log(data)
            setRepos(data);
        });
    },[])


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
    const setData = ({name, avatar_url}) =>{
        setLogin(name)
        setAvatar_url(avatar_url)
    }



function renderRepo(repo){
    return(
        <Card className= "grid-cards" style={{ width: '20rem' }}> 
        <Card.Img variant="top"  src="https://avatars.githubusercontent.com/u/83342963?v=4/10px18"  width="max-width" 
         alt="Card image cap" />
        <Card.Header className="card-title"><b>{repo.name}</b></Card.Header>
        <Card.Body>
            <Card.Text className = "card-description">
                <em>{repo.description}</em>
            </Card.Text>
        </Card.Body>
        <ListGroup>
            <ListGroupItem className="list_group_element1">{repo.visibility}</ListGroupItem>
            <ListGroupItem className="list_group_element2">Primary language- {repo.language}</ListGroupItem>
            <ListGroupItem className="list_group_element2" >Languages: <LanguagesList repo= {repo}/> </ListGroupItem>
        </ListGroup>
        <Card.Link className='card-link' href={repo.html_url} target= "_blank"> Check out the repository </Card.Link>
      </Card>
       
    )
}
    return (
        <div className="project-container">
            <div className='github-parent'>
                <h1 className='github-profile-description'>
                    Check out my github profile 👇 </h1>
                <h2 className='github-nick'>
                    <em>{login}</em>
                </h2>
                <a href="https://github.com/krzysztof99xd" target= "_blank">
                <img className = "github-picture" 
                src = {avatar_url} ></img>
                </a>
            </div>
            <div className="projects-description">
               <b><em>Below you can find my projects. Don't hesitate to check it out!</em></b>
            </div>
            <div className='grid_container'>
                <div className='grid_item'>
                    {repos.map(renderRepo)}
                </div>
            </div>
            <Footer/>
        </div>   
    )
}
