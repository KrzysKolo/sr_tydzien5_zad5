import React from 'react';

const UserInfo = ( { item}) => {
    const { email } = item;
    return (
        <div>
            {email}
        </div>
    )
}

export default UserInfo;
