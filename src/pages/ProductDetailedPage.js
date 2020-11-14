import React, { Component } from 'react';
import Footer from '../components/Global/Footer';
import Header from '../components/Global/Header';
import BenefitsContent from '../components/Homepage/BenefitsContent';
import CookiesPolicy from '../components/Non-Product/CookiesPolicy';
import LogInDialog from '../components/Non-Product/LogInDialog';

class ProductDetailedPage extends Component {
    render() {
        return (
            <div className="container">
                <Header /> 
                <body>
                <CookiesPolicy />
                <LogInDialog />
                <BenefitsContent /> 
                <Footer />
                </body>
            </div>
        );
    }
}

export default ProductDetailedPage;