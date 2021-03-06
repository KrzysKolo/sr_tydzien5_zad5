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
				<div className="profil-photo__back">
				<div className="profil-info__address"><span>Description:</span>{item.description}</div>
				</div>
			</div>
			<div className="profil-info">
				<p className="profil-info__title">Address:</p>
				<div className="profil-info__address"><span>Country:</span>{item.location.country}</div>
				<div className="profil-info__address"><span>City:</span>{item.location.city}</div>
				<div className="profil-info__address"><span>Street:</span>{item.location.street.name} {item.location.street.number}</div>
				<div className="profil-info__address"><span>Postcode:</span>{item.location.postcode}</div>
				<div className="profil-info__address email"><span>Email:</span>{item.email}</div>
			</div>
    </div>
    )
}

export default UserInfo;
