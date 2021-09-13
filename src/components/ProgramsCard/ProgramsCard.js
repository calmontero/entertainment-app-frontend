import React from "react";
import './ProgramsCard.css';
import { Link } from 'react-router-dom';

function ProgramsCard({ programs }) {
    const {id, title, image_url, year} = programs;

    return (
        <div className= "program-card">
            
            <img
                className="program-img"
                src={image_url}
                alt={title}
                onError={(event) => event.target.style.display = 'none'}
                style={{borderTopRightRadius: 20, borderBottomRightRadius: 20, borderBottomLeftRadius: 20, borderTopLeftRadius: 20}}
            />
            <h2>
                <Link to={`/programs/${id}`}>{title}</Link>
            </h2>
            <h3>{year}</h3>
        </div>
    )
}

export default ProgramsCard;