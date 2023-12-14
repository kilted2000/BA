//import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileForm from "./ProfileForm";
const Profile = () => {
  const { isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
          <div>
      <h1>Create or Edit Your Profile</h1>
      <ProfileForm  />
      <a href="/">Home</a>
    </div>
      </div>
    )
  );
};

export default Profile;