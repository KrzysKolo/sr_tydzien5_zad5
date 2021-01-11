import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './../formComponents/'

const UserProfile = () => {
    const handleBack = () => {
        <a href="/users" />
        console.log("klikam");
    }

    return (
        <div>
            <p>coś</p>
            <Button values="Back" bg="button-back" onClick={handleBack} />

        </div>
    )
}

export default UserProfile;
