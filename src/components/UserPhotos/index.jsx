import React from 'react';
import { Typography } from '@mui/material';
import { useParams } from 'react-router-dom';
import { userModel, photoOfUserModel } from '../../modelData/models';

/**
 * Define UserPhotos, a React component of Project 4.
 */
function UserPhotos() {
  const { userId } = useParams();
  const user = userModel(userId);
  const photos = photoOfUserModel(userId);

  return (
    <div>
      <Typography variant="body1">
        This should be the UserPhotos view of the PhotoShare app. Since it is
        invoked from React Router, the params from the route will be in the property
        `match`. So this should show details of user: {userId}. You can fetch the model for the user
        from `photoOfUserModel(userId)`:
      </Typography>
      {user && (
        <div>
          <h2>{`${user.first_name} ${user.last_name}`}</h2>
          {photos.map((photo) => (
            <div key={photo._id}>
              <img src={`images/${photo.file_name}`} alt={`Photo ${photo._id}`} />
              <p>Created at: {photo.date_time}</p>
              <ul>
                {photo.comments.map((comment) => (
                  <li key={comment._id}>
                    <p>Created at: {comment.date_time}</p>
                    <p>
                      Comment by: {`${comment.user.first_name} ${comment.user.last_name}`}
                    </p>
                    <p>{comment.comment}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default UserPhotos;