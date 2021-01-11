import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './../formComponents/'

const UserProfile = () => {
    const handleBack = () => {
        <a href="/users" />
    }

    return (
        <div>
            <p>coś</p>
            <Button className="button-back" values="back" onClick={handleBack} />

        </div>
    )
}

export default UserProfile;
