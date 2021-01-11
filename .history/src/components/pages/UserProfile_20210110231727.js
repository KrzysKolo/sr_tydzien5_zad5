import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './../formComponents/'

const UserProfile = () => {
  return (
    <div>
      <div className="user-card">coś</div>
      <Link className="link-button" to="/users"><Button values="Back" bg="button-back"/></Link>
    </div>
  )
}

export default UserProfile;
