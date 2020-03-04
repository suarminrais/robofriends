import React, { Fragment } from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  return (
    <Fragment>
      {
        robots.map(user => <Card key={user.id} name={user.name} email={user.email} id={user.id} />)
      }
    </Fragment>
  );
}

export default CardList;