import React, { useContext } from 'react';
import { SearchUserContext } from './../../components/contexts/SearchUserContext';
import { Link } from 'react-router-dom';
import { Button } from './../formComponents/';

const UserProfile = () => {
	const { showProfil, setShowProfil } = useContext(SearchUserContext);
	console.log(showProfil);
	const handleShowProfil = () => {
		console.log(showProfil)
		setShowProfil(true);
		console.log(showProfil)
	};
  return (
    <div>
      <div className={showProfil ? 'user-profil-lg' : 'user-profil-xs'}>coś</div>
      <Link className="link-button" to="/users"><Button values="Back" bg="button-back" onClick={handleShowProfil}/></Link>
    </div>
  )
}

export default UserProfile;
