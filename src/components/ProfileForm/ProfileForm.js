import React, { useState } from "react";
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import { BASE_URL } from "../../constraints";

const initialState = {
    name: '',
    avatar: "https://bit.ly/2XrYtL7",
    user_id: 1
};

function ProfileForm({ onAddProfile }) {
    const[profile, setProfile] = useState(initialState);

    function handleSubmit(e) {
        e.preventDefault();
        fetch(BASE_URL + `/users/1/profiles`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify(profile)
          })
        .then((r) => r.json())
        .then((newProfile) => {
            setProfile(initialState);
            onAddProfile(newProfile);
        });
    }

    function handleChange(e) {
        const updatedValue = {...profile}
        updatedValue[e.target.name] = e.target.value
        setProfile(updatedValue)
    }

    return (
        <div className="profile-form">
            <h3>Add new Profile</h3>
            <form  noValidate autoComplete="on" onSubmit={handleSubmit} >
                <Input 
                type="text"
                name="name"
                placeholder="Enter name..."
                value={profile.name}
                onChange={handleChange}
                />

                <br />
                <Button type="submit"variant="outlined" color="secondary">Create</Button>              
            </form>
        </div>
    );
}

export default ProfileForm;