import React from 'react';
import { Card, Image } from 'semantic-ui-react';

function Follower({ follower }) {

  return (
    <Card>
    <Image src={follower.avatar_url} wrapped ui={false} />
    <Card.Content>
      <Card.Header>{follower.login}</Card.Header>
    </Card.Content>
  </Card>
  )
}

export default Follower;