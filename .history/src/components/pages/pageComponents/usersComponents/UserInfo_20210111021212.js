import React from 'react';

const UserInfo = ( { item}) => {
    const { email } = item;
    return (
        <div>
            {item.email}
        </div>
    )
}

export default UserInfo;
