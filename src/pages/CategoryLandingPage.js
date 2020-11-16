import React, { Component } from 'react';
import Header from '../components/Global/Header';
import Footer from '../components/Global/Footer';
import LogInDialog from '../components/Non-Product/LogInDialog';
import CategoryLanding from '../components/Landing/CategoryLanding';
import FeaturedProducts from '../components/Homepage/FeaturedProducts';
import CookiesPolicy from '../components/Non-Product/CookiesPolicy';

class CategoryLandingPage extends Component {
    render() {
        return (
            <div className="container">
                <Header /> 
                <CookiesPolicy />
                <LogInDialog />
                <CategoryLanding />
                <FeaturedProducts />
                <Footer />
            </div>
        );
    }
}

export default CategoryLandingPage;