import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './../formComponents/'

const UserProfile = () => {
  return (
    <div>
      <p>coś</p>
        <Link to="/users"><Button values="Back" bg="button-back"/></Link>
    </div>
  )
}

export default UserProfile;
