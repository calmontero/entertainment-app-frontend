import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ReviewsCard from "../ReviewsCard/ReviewsCard";
import './ProgramsDetails.css'

function ProgramsDetails() {
    const [program, setProgram] = useState([]);
    const [loading, setLoading] = useState(false);
    const params = useParams();
    const id = params.id;

    useEffect(() => {
        setLoading(true);
        fetch(`/programs/${id}`)
          .then((res) => res.json())
          .then((programData) => {
            setProgram(programData);
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            setLoading(false);
          });
    }, []);
    //console.log(program.reviews);
    if (loading) {
        return <p>Data is loading...</p>;
    }
        
    return (
        <div className="program-details">
            <div className="flex-child magenta">
                <img
                    className="program-img"
                    src={program.image_url}
                    alt={program.title}
                    onError={(event) => event.target.style.display = 'none'}
                    style={{borderTopRightRadius: 20, borderBottomRightRadius: 20, borderBottomLeftRadius: 20, borderTopLeftRadius: 20}}
                />
            </div>
  
            <div className="flex-child1 green">
                <h1>{program.title}</h1>
                <span>{program.year}</span> <span>{program.length} MIN</span>
                <br />
                <span>R</span>
                <br />
                <p>{program.description}</p>
                <p>Director: {program.director}</p>
                <p>Cast:</p>
                <p>Category: {} </p>
                <p>Genre:</p>
                <p>IMDB Link:</p>
            </div>

            <div className="reviews-container">
                <h1>Reviews</h1>
                <ReviewsCard reviews={program.reviews} />
            </div>
        </div>
    )
}

export default ProgramsDetails;