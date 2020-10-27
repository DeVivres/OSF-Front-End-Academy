import React, { Component } from 'react';
import '../App.css';
import './Header.css';
import { Link } from "react-router-dom"
import OSF_Logo from '../../img/Header/OSF_Logo.png'
import ShoppingCart_Icon from '../../img/Header/ShoppingCart_Icon.png'
import Wishlist_Icon from '../../img/Header/Wishlist_Icon.png'
import Profile_Icon from '../../img/Header/Profile_Icon.png'
import Search_Icon from '../../img/Header/Search_Icon.png'

class Header extends Component {
    render() {
        return (             
            <nav className="navbar container navbar-expand-lg navbar-light bg-white border-bottom fixed-top">
                {/* Icon and burger menu for Xs, Sm, Md screens */}
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link to="/homepage">
                    <a className="navbar-brand"><img className="logo-image" src={OSF_Logo}></img></a>
                </Link>
                {/* Bottom fixed icons for Xs, Sm, Md screens */}
                <ul className="navbar navbar-nav container bg-nav-mobile d-lg-none d-xl-none border-top d-flex flex-row justify-content-around fixed-bottom">
                    <li className="nav-item">
                        <a className="nav-link ml-3" href="#"><img className="img-fluid icon-image icon-brightness" src={Search_Icon}></img></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link ml-3" href="#"><img className="img-fluid icon-image icon-brightness" src={Profile_Icon}></img></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link ml-3" href="#"><img className="img-fluid icon-image icon-brightness" src={Wishlist_Icon}></img></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link ml-3" href="#"><img className="img-fluid icon-image icon-brightness" src={ShoppingCart_Icon}></img></a>
                    </li>
                </ul>
                {/* Menu for Lr, Xl screens and collapsed menu for Xs, Sm, Md screens */}
                <div className="collapse navbar-collapse justify-content-between" id="navbar">
                    <a className="navbar-brand small-fix d-none d-xl-block d-lg-block">
                        <a className="osf-text">OSF</a>
                        <br></br>
                        <a className="academy-text">Academy</a>
                    </a>  
                    <ul className="navbar-nav">
                         <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle text-dark text-uppercase" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                            Services
                            </a>
                            <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                <div>
                                    <h5>Product Categories</h5>
                                    <a className="dropdown-item">Accessories</a>
                                    <a className="dropdown-item">Alcohol</a>
                                    <a className="dropdown-item">Art</a>
                                    <a className="dropdown-item">Books</a>
                                    <a className="dropdown-item">Drink</a>
                                    <a className="dropdown-item">Electronics</a>
                                    <a className="dropdown-item">Flower and Plants</a>
                                    <a className="dropdown-item">Food</a>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item ">
                            <a className="nav-link text-dark text-uppercase" href="#">Company</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link text-dark text-uppercase" href="#">Library</a>
                        </li>
                        <li className="nav-item disabled">
                            <a className="nav-link text-dark text-uppercase" href="#">Contact Us</a>
                        </li>
                        <li className="nav-item dropdown ml-4 d-none d-xl-flex d-lg-flex">
                            <a className="nav-link dropdown-toggle text-uppercase" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                En
                            </a>
                        </li>
                        <li className="nav-item dropdown d-none d-xl-flex d-lg-flex">
                            <a className="nav-link dropdown-toggle text-uppercase" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                $Us
                            </a>
                        </li>
                    </ul>
                    <ul className="navbar-nav d-none d-sm-none d-md-none d-lg-flex d-xl-flex">
                        <li className="nav-item">
                            <a className="nav-link ml-3" href="#"><img className="img-fluid icon-image" src={Search_Icon}></img></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ml-3" href="#"><img className="img-fluid icon-image" src={Profile_Icon}></img></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ml-3" href="#"><img className="img-fluid icon-image" src={Wishlist_Icon}></img></a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link ml-3" href="#"><img className="img-fluid icon-image" src={ShoppingCart_Icon}></img></a>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;