import React from 'react';
import Follower from './Follower';

function FollowersList({ followers }) {

  return (
    <div>
      {followers.map((item, index) => {
        console.log('MAP ITEM', item)
        return <Follower user={item} key={index} />
      })}
    </div>
  )
}

export default FollowersList;