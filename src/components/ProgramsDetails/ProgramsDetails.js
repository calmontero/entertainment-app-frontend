import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import './ProgramsDetails.css'

function ProgramsDetails() {
    const [program, setProgram] = useState([]);
    const params = useParams();
    const id = params.id;

    useEffect(() => (
        fetch(`/programs/${id}`)
        .then((response) => response.json())
        .then((programData) => {
            setProgram(programData)
        })
        .catch(err => console.error(err))
    ),[]);

    return (
        <div className="program-details">
            <div class="flex-child magenta">
                <img
                    className="program-img"
                    src={program.image_url}
                    alt={program.title}
                    onError={(event) => event.target.style.display = 'none'}
                    style={{borderTopRightRadius: 20, borderBottomRightRadius: 20, borderBottomLeftRadius: 20, borderTopLeftRadius: 20}}
                />
            </div>
  
            <div class="flex-child1 green">
                <h1>{program.title}</h1>
                <span>{program.year}</span> <span>R</span> <span>{program.length} MIN</span>
            </div>
        </div>
    )
}

export default ProgramsDetails;