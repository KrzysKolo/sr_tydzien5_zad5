import React from 'react';

const UserInfo = ( { item }) => {

  return (
    <div className="profil">
			<div className="profil-photo">
				<div className="profil-photo__image">
					<img src={item.photo} alt={item.name.first} />
				</div>
				<div className="profil-photo__image-back">

				</div>
				<div className="profil-photo__name">
					{item.name.title} {item.name.first} {item.name.last}
				</div>
			</div>
			<div className="profil-info"></div>
      {item.email}
    </div>
    )
}

export default UserInfo;
