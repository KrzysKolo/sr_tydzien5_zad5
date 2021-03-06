import React from 'react';

const UserInfo = ( { item }) => {

  return (
    <div className="profil">
			<div className="profil-photo">
				<div className="profil-photo__front">
					<img src={item.photo} />
					<div className="profil-photo__front-text">
						<p>{item.name.title}</p>
						<p>{item.name.first} {item.name.last}</p>
					</div>
				</div>
				<div className="profil-photo__back"></div>
			</div>
			<div className="profil-info">
			{item.email}
			</div>

    </div>
    )
}

export default UserInfo;
