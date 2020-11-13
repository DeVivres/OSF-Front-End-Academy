import React, { Component } from 'react';
import Header from '../components/Global/Header';
import Footer from '../components/Global/Footer';
import LogInDialog from '../components/Non-Product/LogInDialog';
import CategoryLanding from '../components/Landing/CategoryLanding';
import FeaturedProducts from '../components/Homepage/FeaturedProducts';

class CategoryLandingPage extends Component {
    render() {
        return (
            <div className="container">
                <Header /> 
                <LogInDialog />
                <body>
                <CategoryLanding />
                <FeaturedProducts />
                <Footer />
                </body>
            </div>
        );
    }
}

export default CategoryLandingPage;