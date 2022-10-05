import React from "react";
import "./userStyles.scss";

const User: React.FC = () => {
  return (
    <div className="user">
      <img src="/assets/images/user_img.jpg" alt="" />
      <div className="info">
        <div className="info__name">User</div>
        <div className="info__username">Bio</div>
      </div>
    </div>
  );
};

export default User;
