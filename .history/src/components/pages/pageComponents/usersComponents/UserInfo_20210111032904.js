import React from 'react';

const UserInfo = ( { item }) => {

  return (
    <div className="profil">
			<div className="profil-photo">
				<div className="profil-photo__front">
					<img src={item.photo} />
				</div>
				<div className="profil-photo__back"></div>
			</div>
			<div className="profil-info"></div>
      {item.email}
    </div>
    )
}

export default UserInfo;
