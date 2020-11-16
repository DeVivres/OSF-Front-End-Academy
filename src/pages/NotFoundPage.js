import React, { Component } from 'react';
import Header from '../components/Global/Header';
import Footer from '../components/Global/Footer';
import NotFound from '../components/Non-Product/NotFound'
import LogInDialog from '../components/Non-Product/LogInDialog';
import CookiesPolicy from '../components/Non-Product/CookiesPolicy';

class NotFoundPage extends Component {
    render() {
        return (
            <div className="container">
                <Header /> 
                <CookiesPolicy />
                <LogInDialog />
                <NotFound />
                <Footer />
            </div>
        );
    }
}

export default NotFoundPage;