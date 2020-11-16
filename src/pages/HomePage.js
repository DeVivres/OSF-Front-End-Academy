import React, { Component } from 'react';
import Header from '../components/Global/Header';
import Footer from '../components/Global/Footer';
import CarouselBanner from '../components/Homepage/CarouselBanner';
import PopularItems from '../components/Homepage/PopularItems';
import FullWidthImage from '../components/Homepage/FullWidthImage';
import FeaturedProducts from '../components/Homepage/FeaturedProducts';
import BenefitsContent from '../components/Homepage/BenefitsContent';
import CookiesPolicy from '../components/Non-Product/CookiesPolicy';
import LogInDialog from '../components/Non-Product/LogInDialog';

class HomePage extends Component {
    render() {
        return (
            <div className="container">
                <Header /> 
                <CookiesPolicy />
                <LogInDialog />
                <CarouselBanner />
                <PopularItems />
                <FullWidthImage />
                <FeaturedProducts />
                <BenefitsContent /> 
                <Footer />
            </div>
        );
    }
}

export default HomePage;