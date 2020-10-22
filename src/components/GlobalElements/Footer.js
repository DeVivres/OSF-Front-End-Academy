import React, { Component } from 'react';
import './Footer.css';
import Facebook_Icon from '../../img/Social/Facebook_Icon.png'
import Google_Icon from '../../img/Social/Google_Icon.png'
import Pinterest_Icon from '../../img/Social/Pinterest_Icon.png'
import Twitter_Icon from '../../img/Social/Twitter_Icon.png'




class Footer extends Component {
    render() {
        return (
            <div className="row pt-3 px-3 pad-from-bottom-nav">
                <div className="col-lg-3 d-none d-xl-block d-lg-block">
                    <p> @ Copyright 2019.<br></br>All Rights Reserved.</p>
                    <h6 className="text-uppercase">Contact</h6>
                    <p>Headquarters:<br></br>5600, Blvd. des Galeries, Bur 530 <br></br>Quebec, Quebec G2K 2H6</p>    
                    <p><a href="mailto:exampleEmail@gmail.com">contact@osf-global.com</a></p>
                    <p><a href="tel:+1885484344">+1 (888) 548-4344</a></p>
                </div>
                <div className="col-lg d-xl-none d-lg-none">
                    <p> @ Copyright 2019.<br></br>All Rights Reserved.</p>
                    <a class="d-flex justify-content-between" data-toggle="collapse" href="#collapseInfo" role="button" aria-expanded="false" aria-controls="collapseInfo">
                        <h6 className="text-uppercase text-dark">Contact</h6>
                        <a className="dropdown-toggle text-dark"></a>
                    </a>
                    <div className="collapse" id="collapseInfo">
                        <div class="">
                            <p>Headquarters:<br></br>5600, Blvd. des Galeries, Bur 530 <br></br>Quebec, Quebec G2K 2H6</p>    
                            <p><a href="mailto:exampleEmail@gmail.com">contact@osf-global.com</a></p>
                            <p><a href="tel:+1885484344">+1 (888) 548-4344</a></p>
                        </div>
                    </div>
                </div>

                <div className="col-lg-5 d-none d-xl-block d-lg-block">
                    <h6 className="text-uppercase">Categories</h6>
                    <div className="row justify-content-between">
                        <div className="col">
                        <ul className="list-unstyled text-muted">
                            <li className="mb-2">Alcohol</li>
                            <li className="mb-2">Art</li>
                            <li className="mb-2">Books</li>
                            <li className="mb-2">Drink</li>
                            <li className="mb-2">Elecronics</li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul className="list-unstyled text-muted">
                                <li className="mb-2">Home</li>
                                <li className="mb-2">Jewelry</li>
                                <li className="mb-2">Kids and Baby</li>
                                <li className="mb-2">Men's Fashion</li>
                                <li className="mb-2">Mobile</li>
                                <li className="mb-2">Motorcycles</li>
                                <li className="mb-2">Movies</li>
                                <li className="mb-2"> Music</li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul className="list-unstyled text-muted">
                            <li className="mb-2">Sport</li>
                            <li className="mb-2">Toys</li>  
                            <li className="mb-2">Travel</li>
                            <li className="mb-2">Women's Fashio</li>
                        </ul> 
                        </div>
                    </div>
                </div>
                <div className="col-lg d-xl-none d-lg-none">
                    <a class="d-flex justify-content-between" data-toggle="collapse" href="#collapseServices" role="button" aria-expanded="false" aria-controls="collapseInfo">
                        <h6 className="text-uppercase text-dark">Categories</h6>
                        <a className="dropdown-toggle text-dark"></a>
                    </a>
                    <div className="collapse" id="collapseServices">
                        <div class="">
                            <ul className="list-unstyled text-muted">
                                <li className="mb-2">Alcohol</li>
                                <li className="mb-2">Art</li>
                                <li className="mb-2">Books</li>
                                <li className="mb-2">Drink</li>
                                <li className="mb-2">Elecronics</li>
                            </ul>
                            <ul className="list-unstyled text-muted">
                                <li className="mb-2">Home</li>
                                <li className="mb-2">Jewelry</li>
                                <li className="mb-2">Kids and Baby</li>
                                <li className="mb-2">Men's Fashion</li>
                                <li className="mb-2">Mobile</li>
                                <li className="mb-2">Motorcycles</li>
                                <li className="mb-2">Movies</li>
                                <li className="mb-2"> Music</li>
                            </ul>
                            <ul className="list-unstyled text-muted">
                                <li className="mb-2">Sport</li>
                                <li className="mb-2">Toys</li>  
                                <li className="mb-2">Travel</li>
                                <li className="mb-2">Women's Fashio</li>
                            </ul> 
                        </div>
                    </div>
                </div>

                <div className="col-lg-2 d-none d-xl-block d-lg-block">
                    <h6 className="text-uppercase">About</h6> 
                    <ul className="list-unstyled text-muted">
                        <li className="mb-2">About us</li>
                        <li className="mb-2">Delivery</li>
                        <li className="mb-2">Testimonials</li>
                        <li className="mb-2">Contact</li>
                    </ul>
                </div>
                <div className="col-lg d-xl-none d-lg-none">
                    <a class="d-flex justify-content-between" data-toggle="collapse" href="#collapseAbout" role="button" aria-expanded="false" aria-controls="collapseAbout">
                        <h6 className="text-uppercase text-dark">About</h6>
                        <a className="dropdown-toggle text-dark"></a>
                    </a>
                    <div className="collapse" id="collapseAbout">
                        <div class="">
                            <ul className="list-unstyled text-muted">
                                <li className="mb-2">About us</li>
                                <li className="mb-2">Delivery</li>
                                <li className="mb-2">Testimonials</li>
                                <li className="mb-2">Contact</li>
                            </ul>   
                        </div>
                    </div>
                </div>

                <div className="col-lg-2">
                    <ul className="list-inline list-unstyled d-flex justify-content-between">
                        <li class="list-inline-item">
                            <a href="https://www.facebook.com" target="_blank">
                                <img className="img-fluid icon-fading" src={Facebook_Icon}></img>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="https://www.google.com/" target="_blank">
                                <img className="img-fluid icon-fading" src={Google_Icon}></img>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="https://www.pinterest.com/" target="_blank">
                                <img className="img-fluid icon-fading" src={Pinterest_Icon}></img>
                            </a>
                        </li>
                        <li class="list-inline-item">
                            <a href="https://twitter.com/" target="_blank">
                                <img className="img-fluid icon-fading" src={Twitter_Icon}></img>
                            </a>
                        </li>
                    </ul>                    
                </div>
            </div>
        );
    }
}

export default Footer;