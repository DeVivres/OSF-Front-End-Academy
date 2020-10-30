import React, { Component } from 'react';
import firstImage from '../../img/FeaturedProducts/FeaturedProducts_Image1.png'
import secondImage from '../../img/FeaturedProducts/FeaturedProducts_Image2.png'
import thirdImage from '../../img/FeaturedProducts/FeaturedProducts_Image3.png'
import fourthImage from '../../img/FeaturedProducts/FeaturedProducts_Image4.png'
import '../App.css';
import ProductTile from '../ProductTile/ProductTile';

class PopularItems extends Component {
    render() {
        return (
            <div className="row d-block bg-items p-3">
                <div className="col d-flex justify-content-center p-3">
                    <h5 className="text-white">Popular Items</h5>
                </div>
                <div className="col p-3">
                    <div className="row p-3">
                        <div className="col col-md-6 col-lg-3 p-3">
                            <ProductTile card={{img:{firstImage}, text:"Taras", price:"2,34"}}/>
                        </div>
                        <div className="col col-md-6 col-lg-3 p-3">
                            <ProductTile card={{img:{secondImage}, text:"Hay - About A Lounge Chair AAL 93", price:"$659.55"}}/>
                        </div>
                        <div className="col col-md-6 col-lg-3 p-3">
                            <ProductTile card={{img:{secondImage}, text:"Activate Facial Mask and Charcoal Soap", price:"$659.55"}}/>

                            <div class="card text-center h-100">
                                <img class="card-img-top" src={thirdImage} alt="Card image cap"></img>
                                <div class="card-body">
                                    <p class="card-text">Activate Facial Mask and Charcoal Soap</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col col-md-6 col-lg-3 p-3">
                            <div class="card text-center h-100">
                                <img class="card-img-top" src={fourthImage} alt="Card image cap"></img>
                                <div class="card-body">
                                    <p class="card-text">Cocktail Table Walnut | Yes</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row p-3">
                        <div className="col col-md-6 col-lg-3 p-3">
                            <div class="card text-center h-100">
                                <img class="card-img-top" src={firstImage} alt="Card image cap"></img>
                                <div class="card-body">
                                    <p class="card-text">Hay - About A Lounge Chair AAL 93</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col col-md-6 col-lg-3 p-3">
                            <div class="card text-center h-100">
                                <img class="card-img-top" src={secondImage} alt="Card image cap"></img>
                                <div class="card-body">
                                    <p class="card-text">Tory Desk Calendar</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col col-md-6 col-lg-3 p-3">
                            <div class="card text-center h-100">
                                <img class="card-img-top" src={thirdImage} alt="Card image cap"></img>
                                <div class="card-body">
                                    <p class="card-text">Ch445 Wing Chair on Suite Ny</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                        <div className="col col-md-6 col-lg-3 p-3">
                            <div class="card text-center h-100">
                                <img class="card-img-top" src={fourthImage} alt="Card image cap"></img>
                                <div class="card-body">
                                    <p class="card-text">My dragons are misbehaving again. Unbelieveable!</p>
                                    <a href="#" class="btn btn-primary">Go somewhere</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default PopularItems;