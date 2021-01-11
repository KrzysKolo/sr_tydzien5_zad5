import React from 'react';
import { Route } from 'react-router-dom';
import { About, Contact, Home, Users } from './../pages/';

const Dashboard = () => {
    return (
        <>
        <Route path="/" exact component={Home} />
            <Route path="/About" component={About} />
            <Route path="/Contact" component={Contact} />
            <Route path="/Users" component={Users} />

        </>
    )
}

export default Dashboard;
