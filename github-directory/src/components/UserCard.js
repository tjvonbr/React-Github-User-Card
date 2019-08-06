import React from 'react';
import { Card, Icon, Image } from 'semantic-ui-react';

const UserCard = props => {
  return (
    <Card className='card-container'
          raised='true'
          centered='true'
    >
      <Image rounded className='user-avatar' src={ props.userInfo.avatar_url } wrapped ui={false} />
      <Card.Content>
        <Card.Header className='card-header'>{ props.userInfo.name }</Card.Header>
        <Card.Meta>
          <span className='card-date'>Joined on { props.userInfo.created_at }</span>
        </Card.Meta>
        <Card.Description className='card-description'>
          Trevor is an aspiring full stack engineer living in Chicago, Illinois.  His technical skills include:  HTML, CSS, JavaScript, and React.
        </Card.Description>
      </Card.Content>
      <Card.Content extra className='card-followers'>
        <a>
          <Icon name='user' />
          Github followers:  { props.userInfo.followers }
        </a>
      </Card.Content>
    </Card>
  )
}

export default UserCard;