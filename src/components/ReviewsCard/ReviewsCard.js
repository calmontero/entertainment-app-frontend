import React from "react";
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import ReviewForm from "../ReviewForm/ReviewForm";

function ReviewsCard({ reviews , id , onAddReview }) {
    const displayReviews = reviews && reviews.map(p => {
        return <div>
            <p>Username: {p.username}</p>
            <Box component="fieldset" mb={3} borderColor="transparent">
                <Rating name="read-only" value={p.rating} readOnly />
            </Box>
            <p>{p.comment}</p>
        </div>
    })

    return (
        <div className="reviews-container" key={id} >
            <ReviewForm id={id} onAddReview={onAddReview} />
            {displayReviews}
        </div>
    )
}

export default ReviewsCard;