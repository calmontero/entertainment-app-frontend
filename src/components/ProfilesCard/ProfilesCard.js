import React, { useState} from 'react';
import "./ProfilesCard.css";
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function ProfilesCard({ profiles, onDeleteProfile }) {
    const { id, name } = profiles;
    const [isSelected, setSelected] = useState(false);
    

    function handleSelectedClick(e) {
        let target = e.currentTarget;
        target.classList.toggle('selected')
        
        if (isSelected) {
            localStorage.clear();
        } else {
            localStorage.clear();
            localStorage.setItem('Profile', name);
            localStorage.setItem('profile_id', id);
        }
        setSelected(!isSelected);
    }

    function handleDeleteClick() {
        fetch(`/profiles/${id}`, {
            method: "DELETE",
        }).then((r) => {
            if (r.ok) {
                onDeleteProfile(id);
            }
          });
    }

    return (
        <div className="profile-card">
            <h2>{name} </h2>
            <img
                className="profile-img"
                src={"https://bit.ly/2XrYtL7"}
                alt={name}
                onError={(event) => event.target.style.display = 'none'}
                style={{borderTopRightRadius: 20, borderBottomRightRadius: 20, borderBottomLeftRadius: 20, borderTopLeftRadius: 20}}
                onClick={handleSelectedClick}
                
            />
            <div className="details">
                <DeleteForeverIcon className="icon" fontSize="large" onClick={handleDeleteClick} />
            </div>
        </div>
    )
}

export default ProfilesCard;