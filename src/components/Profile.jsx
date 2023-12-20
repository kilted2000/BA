//import React from "react";
import { useAuth0 } from "@auth0/auth0-react";
import ProfileForm from "./ProfileForm";
import { Link } from "react-router-dom";
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
      <Link to="/">Home</Link>
    </div>
      </div>
    )
  );
};

export default Profile;