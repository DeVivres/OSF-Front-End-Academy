import React, { Component } from 'react';
import Header from '../components/GlobalElements/Header';
import NotFound from '../components/Non-ProductPages/NotFound'
import Footer from '../components/GlobalElements/Footer';

class NotFoundPage extends Component {
    render() {
        return (
            <div className="container">
                <Header /> 
                <body>
                <NotFound />
                <Footer />
                </body>
            </div>
        );
    }
}

export default NotFoundPage;