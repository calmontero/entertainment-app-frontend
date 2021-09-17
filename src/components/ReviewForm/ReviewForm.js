import React, { useState } from "react";
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';

const initialState = {
    username: '',
    comment: '',
    rating: '',
    program_id: ''
};

function ReviewForm({ id , onAddReview }) {
    const[review, setReview] = useState(initialState);
    const [value, setValue] = React.useState(2);

    function handleSubmit(e) {
        e.preventDefault();
        review.program_id = id;
        review.rating = value;
        console.log(review);
        onAddReview(review);
        setReview(initialState);
    }

    function handleChange(e) {
        const updatedValue = {...review}
        updatedValue[e.target.name] = e.target.value
        setReview(updatedValue)
    }

    return (
        <div className="review-form">
            <h3>Add your Review</h3>
            <form  noValidate autoComplete="on" onSubmit={handleSubmit} >
                <Input 
                type="text"
                name="username"
                placeholder="Enter username..."
                value={review.username}
                onChange={handleChange}
                />
                
                <Box component="fieldset" mb={3} borderColor="transparent">
                    <Rating
                    name="simple-controlled"
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                    />
                </Box>

                <Input
                type="text"
                name="comment"
                style={{width: "600px"}}
                placeholder="Enter a comment..."
                className="Input-text"
                value={review.comment}
                onChange={handleChange}
                />

                <br />
                <Button type="submit"variant="outlined" color="secondary">Create review</Button>              
            </form>
        </div>
    );
}

export default ReviewForm;