import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ReviewsCard from "../ReviewsCard/ReviewsCard";
import './ProgramsDetails.css'
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';

const Countries = [
    { label: "Albania", value: 355 },
    { label: "Argentina", value: 54 },
    { label: "Austria", value: 43 },
    { label: "Cocos Islands", value: 61 },
    { label: "Kuwait", value: 965 },
    { label: "Sweden", value: 46 },
    { label: "Venezuela", value: 58 }
  ];

function ProgramsDetails() {
    const [program, setProgram] = useState([]);
    const [loading, setLoading] = useState(false);
    const params = useParams();
    const id = params.id;

    function handleProfile(e) {
        console.log(e.value);
    }

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
    
    function CreateReview(review) {
        fetch(`/reviews`, {
            method: "POST",
            body: JSON.stringify(review),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
        .then((response) => response.json())
        .then((reviewData) => {
            const newReview = { ...program, reviews: [...program.reviews, reviewData] };
            setProgram(newReview);
        });
    }

    if (loading) {
        return <p>Data is loading...</p>;
    }
        
    return (
        <div className="program-details">
            <div className="flex-child magenta" key={id} >
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
                <p>Cast: {program.cast} </p>
                
                <p>Category: {} </p>
                <p>Genre: {} </p>
                <p>Rating: {} </p>
                <p>IMDB Link: {program.imdb_url} </p>
                <p>Add to a Profile:</p>
               
                    <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <Select options={Countries} onChange={handleProfile} />
                        </div>
                    <div className="col-md-4"></div>
                
                
            </div>

            <div className="reviews-container">
                <h1>Reviews</h1>
                <ReviewsCard reviews={program.reviews} id={id} onAddReview={CreateReview} />
            </div>
        </div>
    )
}

export default ProgramsDetails;