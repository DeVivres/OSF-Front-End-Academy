import React, { Component } from 'react';
import Header from '../components/GlobalElements/Header';
import Footer from '../components/GlobalElements/Footer';
import LogInDialog from '../components/Non-ProductPages/LogInDialog';
import CategoryLanding from '../components/LandingPage/CategoryLanding';
import FeaturedProducts from '../components/Homepage/FeaturedProducts';

class CategoryLandingPage extends Component {
    render() {
        return (
            <div>
                <div className="container">
                <Header /> 
                <LogInDialog />
                <body>
                <CategoryLanding />
                <FeaturedProducts />
                <Footer />
                </body>
            </div>
            </div>
        );
    }
}

export default CategoryLandingPage;