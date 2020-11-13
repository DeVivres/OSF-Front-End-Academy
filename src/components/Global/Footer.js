import React, { Component } from 'react';
import { Link } from "react-router-dom"
import Facebook_Icon from '../../img/Social/Facebook_Icon.png'
import Google_Icon from '../../img/Social/Google_Icon.png'
import Pinterest_Icon from '../../img/Social/Pinterest_Icon.png'
import Twitter_Icon from '../../img/Social/Twitter_Icon.png'

class Footer extends Component {
    render() {  
        return (
            <div className="row pt-3 px-3 pad-from-bottom-nav">
                {/* Lr and Xl layout - first three section*/}
                {/* First section*/}
                <div className="col d-none d-xl-block d-lg-block p-3">
                    <p>@ Copyright {(new Date().getFullYear())}.<br></br>All Rights Reserved.</p>
                    <h6 className="text-uppercase">Contact</h6>
                    <p>Headquarters:<br></br>5600, Blvd. des Galeries, Bur 530<br></br>Quebec, Quebec G2K 2H6</p>    
                    <p><a href="mailto:exampleEmail@gmail.com">contact@osf-global.com</a></p>
                    <p><a href="tel:+1885484344">+1 (888) 548-4344</a></p>
                </div>
                {/* Second section*/}
                <div className="col-5 d-none d-xl-block d-lg-block p-3">
                    <h6 className="text-uppercase mb-4">Categories</h6>
                    <div className="row">
                        <div className="col">
                            <ul className="list-unstyled">
                                <li className="mb-2"><Link to="/notfoundpage">Alcohol</Link></li>
                                <li className="mb-2"><Link to="/notfoundpage">Art</Link></li>
                                <li className="mb-2"><Link to="/notfoundpage">Books</Link></li>
                                <li className="mb-2"><Link to="/notfoundpage">Drink</Link></li>
                                <li className="mb-2"><Link to="/notfoundpage">Elecronics</Link></li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul className="list-unstyled">
                                <li className="mb-2"><Link to="/notfoundpage">Home</Link></li>
                                <li className="mb-2"><Link to="/notfoundpage">Jewelry</Link></li>
                                <li className="mb-2"><Link to="/notfoundpage">Kids and Baby</Link></li>
                                <li className="mb-2"><Link to="/notfoundpage">Men's Fashion</Link></li>
                                <li className="mb-2"><Link to="/notfoundpage">Mobile</Link></li>
                                <li className="mb-2"><Link to="/notfoundpage">Motorcycles</Link></li>
                                <li className="mb-2"><Link to="/notfoundpage">Movies</Link></li>
                                <li className="mb-2"><Link to="/notfoundpage">Music</Link></li>
                            </ul>
                        </div>
                        <div className="col">
                            <ul className="list-unstyled">
                                <li className="mb-2"><Link to="/notfoundpage">Sport</Link></li>
                                <li className="mb-2"><Link to="/notfoundpage">Toys</Link></li>  
                                <li className="mb-2"><Link to="/notfoundpage">Travel</Link></li>
                                <li className="mb-2"><Link to="/notfoundpage">Women's Fashio</Link></li>
                            </ul> 
                        </div>
                    </div>
                </div>
                {/* Third section*/}
                <div className="col-2 d-none d-xl-block d-lg-block p-3">
                    <h6 className="text-uppercase mb-4">About</h6> 
                    <ul className="list-unstyled">
                        <li className="mb-2"><Link to="/notfoundpage">About us</Link></li>
                        <li className="mb-2"><Link to="/notfoundpage">Delivery</Link></li>
                        <li className="mb-2"><Link to="/notfoundpage">Testimonials</Link></li>
                        <li className="mb-2"><Link to="/notfoundpage">Contact</Link></li>
                    </ul>
                </div>

                {/* Es Sm Md layout - first three section*/}
                {/* First section*/}
                <div className="col-lg d-xl-none d-lg-none">
                    <p>@ Copyright 2019.<br></br>All Rights Reserved.</p>
                    <a className="d-flex justify-content-between text-dark" data-toggle="collapse" href="#collapseInfo" role="button" aria-expanded="false" aria-controls="collapseInfo">
                        <h6 className="text-uppercase">Contact</h6>
                        <a className="dropdown-toggle"></a>
                    </a>
                    <div className="collapse" id="collapseInfo">
                        <div>
                            <p>Headquarters:<br></br>5600, Blvd. des Galeries, Bur 530<br></br>Quebec, Quebec G2K 2H6</p>    
                            <p><a href="mailto:exampleEmail@gmail.com">contact@osf-global.com</a></p>
                            <p><a href="tel:+1885484344">+1 (888) 548-4344</a></p>
                        </div>
                    </div>
                </div>
                {/* Second section*/}
                <div className="col-lg d-xl-none d-lg-none">
                    <a className="d-flex justify-content-between text-dark" data-toggle="collapse" href="#collapseServices" role="button" aria-expanded="false" aria-controls="collapseInfo">
                        <h6 className="text-uppercase">Categories</h6>
                        <a className="dropdown-toggle"></a>
                    </a>
                    <div className="collapse text-muted" id="collapseServices">
                        <div>
                            <ul className="list-unstyled">
                                <li className="mb-2"><Link to="/notfoundpage">Alcohol</Link></li>
                                <li className="mb-2"><Link to="/notfoundpage">Art</Link></li>
                                <li className="mb-2"><Link to="/notfoundpage">Books</Link></li>
                                <li className="mb-2"><Link to="/notfoundpage">Drink</Link></li>
                                <li className="mb-2"><Link to="/notfoundpage">Elecronics</Link></li>
                            </ul>
                            <ul className="list-unstyled">
                                <li className="mb-2"><Link to="/notfoundpage">Home</Link></li>
                                <li className="mb-2"><Link to="/notfoundpage">Jewelry</Link></li>
                                <li className="mb-2"><Link to="/notfoundpage">Kids and Baby</Link></li>
                                <li className="mb-2"><Link to="/notfoundpage">Men's Fashion</Link></li>
                                <li className="mb-2"><Link to="/notfoundpage">Mobile</Link></li>
                                <li className="mb-2"><Link to="/notfoundpage">Motorcycles</Link></li>
                                <li className="mb-2"><Link to="/notfoundpage">Movies</Link></li>
                                <li className="mb-2"><Link to="/notfoundpage">Music</Link></li>
                            </ul>
                            <ul className="list-unstyled">
                                <li className="mb-2"><Link to="/notfoundpage">Sport</Link></li>
                                <li className="mb-2"><Link to="/notfoundpage">Toys</Link></li>  
                                <li className="mb-2"><Link to="/notfoundpage">Travel</Link></li>
                                <li className="mb-2"><Link to="/notfoundpage">Women's Fashio</Link></li>
                            </ul> 
                        </div>
                    </div>
                </div>
                {/* Third section*/}
                <div className="col-lg d-xl-none d-lg-none">
                    <a className="d-flex justify-content-between text-dark" data-toggle="collapse" href="#collapseAbout" role="button" aria-expanded="false" aria-controls="collapseAbout">
                        <h6 className="text-uppercase">About</h6>
                        <a className="dropdown-toggle"></a>
                    </a>
                    <div className="collapse" id="collapseAbout">
                        <div>
                            <ul className="list-unstyled">
                                <li className="mb-2"><Link to="/notfoundpage">About us</Link></li>
                                <li className="mb-2"><Link to="/notfoundpage">Delivery</Link></li>
                                <li className="mb-2"><Link to="/notfoundpage">Testimonials</Link></li>
                                <li className="mb-2"><Link to="/notfoundpage">Contact</Link></li>
                            </ul>   
                        </div>
                    </div>
                </div>

                {/* Fourth section - same for all screens*/}
                <div className="col-lg-2 p-3">
                    <ul className="list-inline list-unstyled d-flex justify-content-between">
                        <li className="list-inline-item">
                            <a href="https://www.facebook.com" target="_blank">
                                <img className="img-fluid icon-fading" src={Facebook_Icon}></img>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://www.google.com/" target="_blank">
                                <img className="img-fluid icon-fading" src={Google_Icon}></img>
                            </a>
                        </li>
                        <li className="list-inline-item">
                            <a href="https://www.pinterest.com/" target="_blank">
                                <img className="img-fluid icon-fading" src={Pinterest_Icon}></img>
                            </a>
                        </li>
                        <li className="list-inline-item">
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