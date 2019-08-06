import React from 'react';
import UserCard from './UserCard';

function FollowersList({ followers }) {
  return (
    <div className="grid-view">
      {followers.map((item, index) => {
        return <UserCard user={item} key={index} />
      })}
    </div>
  )
}

export default FollowersList;