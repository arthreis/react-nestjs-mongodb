import React from 'react';
import { Switch, Route } from 'react-router-dom';

import ContactForm from './pages/ContactForm';
import ContactList from './pages/ContactList';
import Header from './components/Header';
import Footer from './components/Footer';

const Routes = () => (
    <>
        <Header />
        <Switch>
            <Route path="/" component={ContactList} exact/>
            <Route path="/create" component={ContactForm} />
            <Route path="/edit/:id" component={ContactForm} />
            <Route path="/list" component={ContactList} />
        </Switch>
        <Footer />
    </>
);

export default Routes;
