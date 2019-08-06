import React from 'react';
import Follower from './Follower';

function FollowersList({ followers }) {

  return (
    <div className="grid-view">
      {followers.map((item, index) => {
        console.log('MAP ITEM', item)
        return <Follower follower={item} key={index} />
      })}
    </div>
  )
}

export default FollowersList;