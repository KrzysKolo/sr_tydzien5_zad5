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
				<p className="profil-info__address"><span classNae="profil-info__address-title">Country:</span>{item.location.country}</p>
				<p className="profil-info__address"><span classNae="profil-info__address-title">City:</span>{item.location.city}</p>
				<p className="profil-info__address"><span classNae="profil-info__address-title">Street:</span>{item.location.street.name} {item.location.street.number}</p>
				<p className="profil-info__address"><span classNae="profil-info__address-title">postcode:</span>{item.location.postcode}</p>
			{item.email}
			</div>

    </div>
    )
}

export default UserInfo;
