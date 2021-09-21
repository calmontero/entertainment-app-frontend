import React, { useState, useEffect } from "react";
import ProgramsCard from "../ProgramsCard/ProgramsCard";

function ProgramsContainer() {
    const [programs, setPrograms] = useState([]);
    const profile = localStorage.getItem('Profile');
    const profile_id = localStorage.getItem('profile_id');

    //Get list of movies and tv shows
    useEffect(() => {
        if (!profile) {
            fetch("/programs", {
                headers : { 
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                 }
              })
            .then((response) => response.json())
            .then((programsData) => setPrograms(programsData));
        } else {
            fetch(`users/1/profiles/${profile_id}`, {
                headers : { 
                  'Content-Type': 'application/json',
                  'Accept': 'application/json'
                 }
              })
            .then((response) => response.json())
            .then((programsData) => setPrograms(programsData.programs));
        }
      }, []);
      
      return (
        <div className="programs-container">
            <h1>{profile ? "Full List of Movies and TV Shows - Profile: " + profile : "Full List of Movies and TV Shows"}</h1>
            {
                programs && programs.length>0 && programs.map(p => {
                    return <ProgramsCard
                            key={p.id}
                            programs={p}
                            />
                })
             }
        </div>
      )
}

export default ProgramsContainer;