import React, { useState } from "react";
import image from "../assets/user.jpg";
const ProfileComponent = ({ user }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleCardClick = () => {
    setIsSelected(!isSelected);
  };

  // To handle first 10 user who have avatar uri but not working one
  if (parseInt(user.id) <= 10) {
    user.avatar = undefined;
  }
  const userImage = user.avatar ? user.avatar : image;

  return (
    <div className="card col-lg-4 profileCard" onClick={handleCardClick}>
      <div className="card-body">
        <div className="row justify-content-center align-items-center ">
          <div className="col-md-4">
            <img
              className="profileImage"
              src={userImage}
              alt={`${user.profile.firstName} ${user.profile.lastName}`}
            />
          </div>
          <div className="col-md-8">
            <h5 className="card-title">
              <span className="text-primary">Name :</span>
              {user.profile.firstName} {user.profile.lastName}
            </h5>
            {isSelected && (
              <>
                <span className="text-info">Job :</span>
                <p className="card-text">{user.jobTitle}</p>
                <span className="text-info">Bio :</span>
                <p className="card-text">{user.Bio}</p>
                <span className="text-info"> Email :</span>
                <p className="card-text">{user.profile.email}</p>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileComponent;
