import React from 'react';

const UserInfo = ( { item }) => {

  return (
    <div className="profil">
			<div className="profil-photo">
				<div className="profil-photo__front"></div>
				<div className="profil-photo__back"></div>
			</div>
			<div className="profil-info"></div>
      {item.email}
    </div>
    )
}

export default UserInfo;
