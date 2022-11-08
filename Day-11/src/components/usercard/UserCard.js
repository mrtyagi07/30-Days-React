import React from 'react';

//User Card Component
const UserCard = props => {
  console.log(props.usercard);
  return (
    <div className="user-card">
      <img src={props.usercard.img.img} alt={props.usercard.firstName} />
      <h2>Vaibhav Tyagi</h2>
    </div>
  );
};

export default UserCard;
