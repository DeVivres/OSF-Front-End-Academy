import React, { Component } from 'react';
import '../App.css';
import firstImage from '../../img/FeaturedProducts/FeaturedProducts_Image1.png'
import secondImage from '../../img/FeaturedProducts/FeaturedProducts_Image2.png'
import thirdImage from '../../img/FeaturedProducts/FeaturedProducts_Image3.png'
import fourthImage from '../../img/FeaturedProducts/FeaturedProducts_Image4.png'


class FeaturedProducts extends Component {
    render() {
        return (
            <div className="row border border-danger justify-content-center">
                <div className="col">
                    <h5>Featured Products</h5>
                    <p>Unde omnis iste natus error sit voluptatem</p>
                    
                </div>  
            </div>       
        );
    }
}

export default FeaturedProducts;