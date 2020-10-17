import React from 'react';
import './App.css';
import Header from './GlobalElements/Header';
import Footer from './GlobalElements/Footer';
import CarouselBanner from './Homepage/CarouselBanner';
import PopularItems from './Homepage/PopularItems';
import FullWidthImage from './Homepage/FullWidthImage';
import FeaturedProducts from './Homepage/FeaturedProducts';
import BenefitsContent from './Homepage/BenefitsContent';


class App extends React.Component {
  render() {
    return (     
      <div className="container-lg">
        <Header /> 
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
export default App;