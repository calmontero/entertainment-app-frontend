import React, { useState, useEffect } from "react";
import { useParams } from 'react-router-dom';
import ReviewsCard from "../ReviewsCard/ReviewsCard";
import './ProgramsDetails.css'
import Select from 'react-select';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@material-ui/core/Button';
const BASE_URL = 'https://calm-headland-73614.herokuapp.com';

function ProgramsDetails({ profileData }) {
    const profile = localStorage.getItem('Profile');
    const [program, setProgram] = useState({
        data: {},
        category: {},
        genre: {},
        rating: {}
    });
    const [loading, setLoading] = useState(false);
    const params = useParams();
    const id = params.id;
    const formData = {};
    const profilesList = profileData.map((p) => (
        {label: p.name, value: p.id}
    ));

    function handleProfile(e) {
        formData.profile_id = e.value;
        formData.program_id = id;
    }

    useEffect(() => {
        setLoading(true);
        fetch(BASE_URL + `/programs/${id}`, {
            headers : { 
              'Content-Type': 'application/json',
              'Accept': 'application/json'
             }
          })
          .then((res) => res.json())
          .then((programData) => {

            setProgram({data: programData, category: programData.category,
                genre: programData.genre, rating: programData.rating
            });

          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
            setLoading(false);
          });
    }, []);

    function addReview(review) {
        setLoading(true);
        fetch(BASE_URL + `/reviews`, {
            method: "POST",
            body: JSON.stringify(review),
            headers: {
                Accept: "application/json",
                "Content-Type": "application/json",
            },
        })
        .then((response) => response.json())
        .then((reviewData) => {
            const newReview = { ...program, reviews: [...program.data.reviews, reviewData] };
            setProgram({data: newReview});
            
        });
        setLoading(false);
    }

    function addFavorite(e) {
        e.preventDefault();
        fetch(BASE_URL + `/favorites`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(formData)
          })
        .then((r) => r.json())
        .then(data => {
            console.log('Success:', data);
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
                    src={program.data.image_url}
                    alt={program.data.title}
                    onError={(event) => event.target.style.display = 'none'}
                    style={{borderTopRightRadius: 20, borderBottomRightRadius: 20, borderBottomLeftRadius: 20, borderTopLeftRadius: 20}}
                />
            </div>
  
            <div className="flex-child1 green">
                <h1>{program.data.title}</h1>
                <span>{program.data.year}</span> <span>{program.data.length} MIN</span>
                <br />
                <p>{program.rating.rating}</p>
                <p>{program.data.description}</p>
                <p>Director: {program.data.director}</p>
                <p>Cast: {program.data.cast} </p>
                <p>Category: {program.category.name} </p>
                <p>Genre: {program.genre.name} </p>
                <p>IMDB Link: <a href={program.data.imdb_url} target="_blank" > {program.data.imdb_url} </a></p>
                <p>Add to a Profile:</p>  <span><Button type="submit"variant="outlined" color="secondary" onClick={addFavorite} disabled={profile ? true : false} >Add</Button></span>
                <br />
                <br />
                    <div className="col-md-3"></div>
                        <div className="col-md-6">
                            <Select options={profilesList} onChange={handleProfile} disabled={profile ? true : false} />
                        </div>
                    <div className="col-md-4"></div>
            </div>

            <div className="reviews-container">
                <h1>Reviews</h1>
                <ReviewsCard reviews={program.data.reviews} id={id} onAddReview={addReview} />
            </div>
        </div>
    )
}

export default ProgramsDetails;