import React, { useState } from "react";
import { Typography } from "@mui/material";

import "./styles.css";
import { useParams, Link } from "react-router-dom";
import UserPhotos from "../UserPhotos";

/**
 * Define UserDetail, a React component of Project 4.
 */
function UserDetail() {
  const { userId } = useParams();
  const [showUserPhotos, setShowUserPhotos] = useState(false);

  const handleViewUserPhotos = () => {
    setShowUserPhotos(true);
  };

  return (
    <>
      <Typography variant="body1">
        This should be the UserDetail view of the PhotoShare app. Since it is
        invoked from React Router, the params from the route will be in the
        property match. So this should show details of user: {userId}. You can
        fetch the model for the user from models.userModel.
      </Typography>
      <Link to={`/photos/${userId}`} onClick={handleViewUserPhotos}>
        View User Photos
      </Link>
      {showUserPhotos && <UserPhotos userId={userId} />}
    </>
  );
}

export default UserDetail;