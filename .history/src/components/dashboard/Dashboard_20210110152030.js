import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { About, Contact, Home, Users, UserProfile } from './../pages/';

const Dashboard = () => {

  return (
    <section className="dashboard">
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/About" component={About} />
        <Route path="/Contact" component={Contact} />
        <Route path="/Users" component={Users} />
        <Route path="/UserProfile/:id" component={UserProfile} />
      </Switch>
    </section>
  )
}

export default Dashboard;
