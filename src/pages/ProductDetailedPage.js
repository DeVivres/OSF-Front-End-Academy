import React, { Component } from 'react';
import Footer from '../components/Global/Footer';
import Header from '../components/Global/Header';
import BenefitsContent from '../components/Homepage/BenefitsContent';
import LogInDialog from '../components/Non-Product/LogInDialog';

class ProductDetailedPage extends Component {
    render() {
        return (
            <div className="container">
                <Header /> 
                <LogInDialog />
                <body>
                <BenefitsContent /> 
                <Footer />
                </body>
            </div>
        );
    }
}

export default ProductDetailedPage;