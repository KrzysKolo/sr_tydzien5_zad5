import React from 'react';

const UserInfo = ( { info}) => {
    const { email } = info
    return (
        <div>
            {email}
        </div>
    )
}

export default UserInfo;
