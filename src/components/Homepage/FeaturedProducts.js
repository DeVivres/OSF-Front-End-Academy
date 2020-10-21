import React, { Component } from 'react';
import '../App.css';
import '../Homepage/FeaturedProducts.css'
import firstImage from '../../img/FeaturedProducts/FeaturedProducts_Image1.png'
import secondImage from '../../img/FeaturedProducts/FeaturedProducts_Image2.png'
import thirdImage from '../../img/FeaturedProducts/FeaturedProducts_Image3.png'
import fourthImage from '../../img/FeaturedProducts/FeaturedProducts_Image4.png'


class FeaturedProducts extends Component {
    render() {
        return (
            <div className="row bg-products p-5 d-none d-xl-flex d-lg-flex">
                <div className="col-lg">
                    <h3 className="text-center text-white">Featured Products</h3>
                    <p className="text-center text-white">Unde omnis iste natus error sit voluptatem</p>
                    <a class="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span class="sr-only">Previous</span>
                    </a>
                    <a class="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span class="carousel-control-next-icon" aria-hidden="true"></span>
                        <span class="sr-only">Next</span>
                    </a>
                </div> 
                <div class="container-fluid">
                    <div id="carouselExampleIndicators" class="carousel slide" data-ride="carousel" data-interval="5000">
                        <div class="carousel-inner">
                            <div class="carousel-item active">
                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="card mb-2">
                                            <img 
                                                class="card-img-top" 
                                                src={firstImage}
                                                alt="Card image cap">
                                            </img>
                                            <div class="card-body text-center">
                                                <p class="card-text">Kristina Dam Oak Table With White Marble</p>
                                                <p className="text-success">Awesome</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="card mb-2">
                                            <img 
                                                class="card-img-top" 
                                                src={secondImage}
                                                alt="Card image cap">
                                            </img>
                                            <div class="card-body text-center">
                                                <p class="card-text">Kristina Dam Oak Table With White Marble</p>
                                                <p className="text-success">Marketing</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="card mb-2">
                                            <img 
                                                class="card-img-top" 
                                                src={thirdImage}
                                                alt="Card image cap">
                                            </img>
                                            <div class="card-body text-center">
                                                <p class="card-text">Kristina Dam Oak Table With White Marble</p>
                                                <p className="text-success">Awesome</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="card mb-2">
                                            <img 
                                                class="card-img-top img-fluid" 
                                                src={fourthImage}
                                                alt="Card image cap">
                                            </img>
                                            <div class="card-body text-center">
                                                <p class="card-text">Kristina Dam Oak Table With White Marble</p>
                                                <p className="text-success">Marketing</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div class="carousel-item">
                                <div class="row">
                                    <div class="col-md-3">
                                        <div class="card mb-2">
                                            <img 
                                                class="card-img-top " 
                                                src={secondImage}
                                                alt="Card image cap">
                                            </img>
                                            <div class="card-body text-center">
                                                <p class="card-text">Kristina Dam Oak Table With White Marble</p>
                                                <p className="text-success">Awesome</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="col-md-3">
                                        <div class="card mb-2">
                                            <img 
                                                class="card-img-top" 
                                                src={fourthImage}
                                                alt="Card image cap">
                                            </img>
                                            <div class="card-body text-center">
                                                <p class="card-text">Kristina Dam Oak Table With White Marble</p>
                                                <p className="text-success">Awesome</p>
                                            </div>
                                        </div>                                   
                                    </div>
                                    <div class="col-md-3">
                                        <div class="card mb-2">
                                            <img 
                                                class="card-img-top" 
                                                src={thirdImage}
                                                alt="Card image cap">
                                            </img>
                                            <div class="card-body text-center">
                                                <p class="card-text">Kristina Dam Oak Table With White Marble</p>
                                                <p className="text-success">Awesome</p>
                                            </div>
                                        </div>                                    
                                    </div>
                                    <div class="col-md-3">
                                        <div class="card mb-2">
                                            <img 
                                                class="card-img-top" 
                                                src={firstImage}
                                                alt="Card image cap">
                                            </img>
                                            <div class="card-body text-center">
                                                <p class="card-text">Kristina Dam Oak Table With White Marble</p>
                                                <p className="text-success">Awesome</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FeaturedProducts;