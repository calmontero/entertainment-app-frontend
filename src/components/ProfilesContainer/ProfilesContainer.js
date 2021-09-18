import React, { useState, useEffect } from "react";
import ProfileForm from "../ProfileForm/ProfileForm";
import ProfilesCard from "../ProfilesCard/ProfilesCard";

function ProfilesContainer() {
    const [profiles, setProfiles] = useState([]);

    //Get list of profiles
    useEffect(() => {
        fetch("/profiles")
          .then((res) => res.json())
          .then((profilesData) => {
            setProfiles(profilesData);
          })
          .catch((err) => {
            console.log(err);
          })
          .finally(() => {
          });
    }, []);
    
    function handleAddProfile(addedProfile) {
        setProfiles((profiles) => [...profiles, addedProfile]);
    }

    function handleDeleteProfile(deletedProfile) {
        setProfiles((profiles) =>
            profiles.filter((profile) => profile.id !== deletedProfile.id)
        );
    }
    
    return (
        <div className="profiles-container">
            <h2>Profiles</h2>
            <ProfileForm onAddProfile={handleAddProfile} />
            {
                profiles && profiles.map(p => {
                    return <ProfilesCard
                            key={p.id}
                            profiles={p}
                            onDeleteProfile={handleDeleteProfile}
                            />
                })
            }
        </div>
    )
}

export default ProfilesContainer;