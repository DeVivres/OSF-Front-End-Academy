import React, { Component } from 'react';
import Header from '../components/Global/Header';
import Footer from '../components/Global/Footer';
import NotFound from '../components/Non-Product/NotFound'
import LogInDialog from '../components/Non-Product/LogInDialog';

class NotFoundPage extends Component {
    render() {
        return (
            <div className="container">
                <Header /> 
                <LogInDialog />
                <body>
                <NotFound />
                <Footer />
                </body>
            </div>
        );
    }
}

export default NotFoundPage;