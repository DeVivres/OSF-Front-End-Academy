import React, { Component } from 'react';
import './Footer.css';
import Facebook_Icon from '../../img/Social/Facebook_Icon.png'
import Google_Icon from '../../img/Social/Google_Icon.png'
import Pinterest_Icon from '../../img/Social/Pinterest_Icon.png'
import Twitter_Icon from '../../img/Social/Twitter_Icon.png'




class Footer extends Component {
    render() {
        return (
            <div className="row">
                <div className="col-lg-3">
                    <p> @ Copyright 2019.<br></br>All Rights Reserved.</p>
                    <h6 className="text-uppercase">Contact</h6>
                    <p>Headquarters:<br></br>5600, Blvd. des Galeries, Bur 530 <br></br>Quebec, Quebec G2K 2H6</p>    
                    <p>contact@osf-global.com</p>
                    <p>+1 (888) 548-4344</p>
                </div>
                <div className="col-lg-5">
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
                <div className="col-lg-2">
                    <h6 className="text-uppercase">About</h6> 
                        <ul className="list-unstyled text-muted">
                            <li className="mb-2">About us</li>
                            <li className="mb-2">Delivery</li>
                            <li className="mb-2">Testimonials</li>
                            <li className="mb-2">Contact</li>
                        </ul>
                    </div>
                <div className="col-lg-2">
                    <ul className="list-inline list-unstyled d-flex justify-content-around mx-auto">
                        <li class="list-inline-item "><a><img className="img-fluid" src={Facebook_Icon}></img></a></li>
                        <li class="list-inline-item"><a><img className="img-fluid" src={Google_Icon}></img></a></li>
                        <li class="list-inline-item"><a><img className="img-fluid" src={Pinterest_Icon}></img></a></li>
                        <li class="list-inline-item"><a><img className="img-fluid" src={Twitter_Icon}></img></a></li>
                    </ul>                    
                </div>
            </div>
        );
    }
}

export default Footer;