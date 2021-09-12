import React, { useState } from "react";

function ProgramsCard({ programs }) {
    const {id, title, image_url} = programs;

    return (
        <div className= "program-card">
            <h2> {title} </h2>
            <img
                src={image_url}
                alt={title}
                className="program-avatar"
            />
        </div>
    )
}

export default ProgramsCard;