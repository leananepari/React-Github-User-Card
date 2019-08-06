import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

function UserCard({ user }) {
console.log('USER CARD', user)
  return (
    <Card>
      <Image src={user.avatar_url} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{user.name}</Card.Header>
        <Card.Meta>
          <span className='date'>Joined in {user.created_at}</span>
        </Card.Meta>
        <Card.Description>
          {user.location}
        </Card.Description>
      </Card.Content>
      <Card.Content extra>
        <a>
          <Icon name='user' />
          {user.followers} Followers
        </a>
      </Card.Content>
    </Card>
  )
}

export default UserCard;