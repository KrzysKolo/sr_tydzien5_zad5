import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from './../formComponents/'

const UserProfile = () => {
    return (
        <div>
            <p>coś</p>
            <Button className="button-back" values="Back">
            <Link to="/users" />
            </Button>
        </div>
    )
}

export default UserProfile;
