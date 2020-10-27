import React, { Component } from 'react';
import firstImage from '../../img/FeaturedProducts/FeaturedProducts_Image1.png'
import secondImage from '../../img/FeaturedProducts/FeaturedProducts_Image2.png'
import thirdImage from '../../img/FeaturedProducts/FeaturedProducts_Image3.png'
import fourthImage from '../../img/FeaturedProducts/FeaturedProducts_Image4.png'
import icon from '..//..//img/FeaturedProducts/FeaturedProducts_Icon.png'
import whiteLine from '..//../img/FeaturedProducts/FeaturedProducts_WhiteLine.png'


class FeaturedProducts extends Component {
    render() {
        return (
            <div className="row bg-products p-3 d-none d-xl-flex d-lg-flex">
                <div className="col-lg text-center p-3">
                    <div className="text-white">
                        <h2>Featured Products</h2>
                        <p>Unde omnis iste natus error sit voluptatem</p>
                        <svg width="1em" height="2em" viewBox="0 0 16 16" className="bi bi-chevron-left m-1"
                            href="#carouselExampleIndicators" role="button" data-slide="prev"
                            fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
                        </svg>
                        <img className="white-line pr-3" src={whiteLine}></img>
                        <img src={icon}></img>
                        <img className="white-line pl-3" src={whiteLine}></img>
                        <svg width="1em" height="2em" viewBox="0 0 16 16" className="bi bi-chevron-right m-1" 
                            href="#carouselExampleIndicators" role="button" data-slide="next"   
                            fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
                        </svg>
                    </div>
                </div> 
                <div className="container">
                    <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel" data-interval="5000">
                        <div className="carousel-inner">
                            <div className="carousel-item active p-3">
                                <div className="row">
                                    <div className="col">
                                        <div className="card">
                                            <img className="card-img-top" src={firstImage} alt="Product image"></img>
                                            <div className="card-body text-center">
                                                <p className="card-text">Kristina Dam Oak Table With White Marble</p>
                                                <p className="text-success">Awesome</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card">
                                            <img className="card-img-top" src={secondImage} alt="Product image"></img>
                                            <div className="card-body text-center">
                                                <p className="card-text">Kristina Dam Oak Table With White Marble</p>
                                                <p className="text-success">Marketing</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card">
                                            <img className="card-img-top" src={thirdImage} alt="Product image"></img>
                                            <div className="card-body text-center">
                                                <p className="card-text">Kristina Dam Oak Table With White Marble</p>
                                                <p className="text-success">Awesome</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card">
                                            <img className="card-img-top img-fluid" src={fourthImage} alt="Product image"></img>
                                            <div className="card-body text-center">
                                                <p className="card-text">Kristina Dam Oak Table With White Marble</p>
                                                <p className="text-success">Marketing</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="carousel-item p-3">
                                <div className="row">
                                    <div className="col">
                                        <div className="card">
                                            <img className="card-img-top" src={fourthImage} alt="Product image"></img>
                                            <div className="card-body text-center">
                                                <p className="card-text">Kristina Dam Oak Table With White Marble</p>
                                                <p className="text-success">Awesome</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col">
                                        <div className="card">
                                            <img className="card-img-top" src={firstImage} alt="Product image"></img>
                                            <div className="card-body text-center">
                                                <p className="card-text">Kristina Dam Oak Table With White Marble</p>
                                                <p className="text-success">Awesome</p>
                                            </div>
                                        </div>                                   
                                    </div>
                                    <div className="col">
                                        <div className="card">
                                            <img className="card-img-top" src={secondImage} alt="Product image"></img>
                                            <div className="card-body text-center">
                                                <p className="card-text">Kristina Dam Oak Table With White Marble</p>
                                                <p className="text-success">Awesome</p>
                                            </div>
                                        </div>                                    
                                    </div>
                                    <div className="col">
                                        <div className="card">
                                            <img  className="card-img-top" src={thirdImage} alt="Product image"></img>
                                            <div className="card-body text-center">
                                                <p className="card-text">Kristina Dam Oak Table With White Marble</p>
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