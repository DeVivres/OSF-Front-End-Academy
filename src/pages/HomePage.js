import React, { Component } from 'react';
import Header from '../components/GlobalElements/Header';
import Footer from '../components/GlobalElements/Footer';
import CarouselBanner from '../components/Homepage/CarouselBanner';
import PopularItems from '../components/Homepage/PopularItems';
import FullWidthImage from '../components/Homepage/FullWidthImage';
import FeaturedProducts from '../components/Homepage/FeaturedProducts';
import BenefitsContent from '../components/Homepage/BenefitsContent';
import CookiesPolicy from '../components/Non-ProductPages/CookiesPolicy';
import LogInDialog from '../components/Non-ProductPages/LogInDialog';

class HomePage extends Component {
    render() {
        return (
            <div className="container">
                <Header /> 
                <body>
                <CarouselBanner />
                <CookiesPolicy />
                <br></br>
                <LogInDialog />
                <PopularItems />
                <FullWidthImage />
                <FeaturedProducts />
                <BenefitsContent /> 
                <Footer />
                </body> 
            </div>
        );
    }
}

export default HomePage;