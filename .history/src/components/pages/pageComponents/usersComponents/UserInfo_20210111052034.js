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
				<p className="profil-info__title">Address:</p>
				<div className="profil-info__address"><p classNae="profil-info__address-name">Country:</p>{item.location.country}</div>
				<div className="profil-info__address"><p classNae="profil-info__address-name">City:</p>{item.location.city}</div>
				<div className="profil-info__address"><p classNae="profil-info__address-name">Street:</p>{item.location.street.name} {item.location.street.number}</div>
				<div className="profil-info__address"><p classNae="profil-info__address-name">postcode:</p>{item.location.postcode}</div>
			{item.email}
			</div>

    </div>
    )
}

export default UserInfo;
