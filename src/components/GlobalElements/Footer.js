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
                    <h5>Contact</h5>
                    <p>Headquarters:<br></br>5600, Blvd. des Galeries, Bur 530 <br></br>Quebec, Quebec G2K 2H6</p>    
                    <p>contact@osf-global.com</p>
                    <p>+1 (888) 548-4344</p>
                </div>
                <div className="col-lg-4">
                    <h5>Categories</h5>            
                    <div className="row">
                        <div className="col-lg m-0 text-muted">
                            <ul className="list-group">
                                <li className="mb-2">Alcohol</li>
                                <li className="mb-2">Art</li>
                                <li className="mb-2">Books</li>
                                <li className="mb-2">Drink</li>
                                <li className="mb-2">Elecronics</li>
                            </ul>
                        </div>
                        <div className="col-lg m-0 text-muted">
                            <ul className="list-group">
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
                        <div className="col-lg m-0 text-muted">
                            <ul className="list-group">
                                <li className="mb-2">Sport</li>
                                <li className="mb-2">Toys</li>
                                <li className="mb-2">Travel</li>
                                <li className="mb-2">Women's Fashio</li>
                            </ul>
                        </div>
                    </div>             
                </div>
                <div className="col-lg">
                    <h5>About</h5>
                    <ul className="list-group text-muted">
                        <li className="mb-2">About us</li>
                        <li className="mb-2">Delivery</li>
                        <li className="mb-2">Testimonials</li>
                        <li className="mb-2">Contact</li>
                    </ul>
                </div>
                <div className="col-lg">
                    <img className="img-fluid m-1" src={Facebook_Icon}></img>
                    <img className="img-fluid m-1" src={Google_Icon}></img>
                    <img className="img-fluid m-1" src={Pinterest_Icon}></img>
                    <img className="img-fluid m-1" src={Twitter_Icon}></img>
                </div>
            </div>
        );
    }
}

export default Footer;