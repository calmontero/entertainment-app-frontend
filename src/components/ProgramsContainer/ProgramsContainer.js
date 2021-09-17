import React, { useState, useEffect } from "react";
import ProgramsCard from "../ProgramsCard/ProgramsCard";

function ProgramsContainer() {
    const [programs, setPrograms] = useState([]);
    const profile = localStorage.getItem('Profile');
    //if (profile ? console.log(profile) : console.log("Null"));

    //Get list of movies and tv shows
    useEffect(() => {
        fetch("/programs")
          .then((response) => response.json())
          .then((programsData) => setPrograms(programsData));
      }, []);
    
      return (
        <div className="programs-container">
            <h1>{profile ? "Full List of Movies and TV Shows - Profile: " + profile : "Full List of Movies and TV Shows"}</h1>
            {
                programs.map(p => {
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