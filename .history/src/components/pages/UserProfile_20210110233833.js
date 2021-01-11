import React, { useContext } from 'react';
import { SearchUserContext } from './../../components/contexts/';
import { Link } from 'react-router-dom';
import { Button } from './../formComponents/';

const UserProfile = () => {
	const { showProfil, setShowProfil } = useContext(SearchUserContext);
  return (
    <div>
      <div className={showProfil ? 'user-profil-lg user-profil-xs' : 'user-profil-xs'}>coś</div>
      <Link className="link-button" to="/users"><Button values="Back" bg="button-back"/></Link>
    </div>
  )
}

export default UserProfile;
