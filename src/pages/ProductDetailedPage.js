import React, { Component } from 'react';
import Footer from '../components/GlobalElements/Footer';
import Header from '../components/GlobalElements/Header';
import BenefitsContent from '../components/Homepage/BenefitsContent';
import LogInDialog from '../components/Non-ProductPages/LogInDialog';
import ProductImage from '../components/ProductDetailedPage/ProductImage';
import ProductTile from '../components/ProductTile/ProductTile';

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