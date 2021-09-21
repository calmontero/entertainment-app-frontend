import React, { useState } from "react";
import ProfileForm from "../ProfileForm/ProfileForm";
import ProfilesCard from "../ProfilesCard/ProfilesCard";

function ProfilesContainer({ profileData, onAddProfile, onDeletedProfile }) {
    const [profiles, setProfiles] = useState(profileData);
    function handleAddProfile(addedProfile) {
        setProfiles((profiles) => [...profiles, addedProfile]);
        onAddProfile(addedProfile);
    }

    function handleDeleteProfile(deletedProfile) {
        const profilesFilter = profiles.filter((p) => p.id !== deletedProfile);
        setProfiles(profilesFilter);
        onDeletedProfile(deletedProfile);
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