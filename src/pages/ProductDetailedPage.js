import React, { Component } from 'react';
import Footer from '../components/Global/Footer';
import Header from '../components/Global/Header';
import BenefitsContent from '../components/Homepage/BenefitsContent';
import CookiesPolicy from '../components/Non-Product/CookiesPolicy';
import LogInDialog from '../components/Non-Product/LogInDialog';
import ProductDetails from '../components/ProductDetailed/ProductDetails';
import ProductImage from '../components/ProductDetailed/ProductImage';
import Tabs from '../components/ProductDetailed/Tabs';
import PopularItems from '../components/Homepage/PopularItems';
import FeaturedProducts from '../components/Homepage/FeaturedProducts';

class ProductDetailedPage extends Component {
    render() {
        return (
            <div className="container">
                <Header /> 
                <CookiesPolicy />
                <LogInDialog />
                <div className="row bg-color-not-found p-3 d-flex ">
                    <div className="row m-5">
                        <div className="col">
                        </div>
                        <div className="col">
                        </div>
                    </div>
                    <div className="row m-5">
                        <Tabs />
                    </div>
                </div>
                <BenefitsContent /> 
                <Footer />
            </div>
        );
    }
}

export default ProductDetailedPage;