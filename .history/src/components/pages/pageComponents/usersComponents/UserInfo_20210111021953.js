import React from 'react';

const UserInfo = ( { item }) => {

    return (
        <div className="profil">

            {item.email}
        </div>
    )
}

export default UserInfo;
