import React from 'react';
import {useState, useEffect} from "react";

export default function LanguagesList({repo}) {
        const[languages, setLanguages] = useState([])
        const API_URL_LANG = repo.languages_url;
        useEffect(() => {
            fetch(API_URL_LANG)
            .then(res => res.json())
            .then(data => {
                console.log(API_URL_LANG)
                console.log(data)
                setLanguages(data);
            });
        },[])

        function displayLanguages(languages){
            var lan = ""
            languages.forEach(language =>{
                lan += language  +", "  
            })
            console.log(lan)
            return lan
            
        }
        return(
           
            <div>
                {displayLanguages(Object.keys(languages))}
            </div>
        )


}
