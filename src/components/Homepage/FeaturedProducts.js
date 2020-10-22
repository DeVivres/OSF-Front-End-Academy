import React, { Component } from 'react';
import '../App.css';
import '../Homepage/FeaturedProducts.css'
import firstImage from '../../img/FeaturedProducts/FeaturedProducts_Image1.png'
import secondImage from '../../img/FeaturedProducts/FeaturedProducts_Image2.png'
import thirdImage from '../../img/FeaturedProducts/FeaturedProducts_Image3.png'
import fourthImage from '../../img/FeaturedProducts/FeaturedProducts_Image4.png'
import icon from '..//..//img/FeaturedProducts/FeaturedProducts_Icon.png'
import whiteLine from '..//../img/FeaturedProducts/FeaturedProducts_WhiteLine.png'


class FeaturedProducts extends Component {
    render() {
        return (
            <div className="row bg-products p-5 d-none d-xl-flex d-lg-flex">
                <div className="col-lg text-center">
                    <div className="text-white">
                        <h2>Featured Products</h2>
                        <p>Unde omnis iste natus error sit voluptatem</p>
                        <svg width="1em" height="2em" viewBox="0 0 16 16" class="bi bi-chevron-left mr-1" 
                            href="#carouselExampleIndicators" role="button" data-slide="prev"
                            fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                        </svg>
                        <img className="white-line pr-3" src={whiteLine}></img>
                        <img className="" src={icon}></img>
                        <img className="white-line pl-3" src={whiteLine}></img>
                        <svg width="1em" height="2em" viewBox="0 0 16 16" class="bi bi-chevron-right ml-1" 
                            href="#carouselExampleIndicators" role="button" data-slide="next"
                            fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </div>
                    <br></br>
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