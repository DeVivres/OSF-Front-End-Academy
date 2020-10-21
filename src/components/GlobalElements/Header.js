import React, { Component } from 'react';
import '../App.css';
import './Header.css';
import OSF_Logo from '../../img/Header/OSF_Logo.png'
import ShoppingCart_Icon from '../../img/Header/ShoppingCart_Icon.png'
import Wishlist_Icon from '../../img/Header/Wishlist_Icon.png'
import Profile_Icon from '../../img/Header/Profile_Icon.png'
import Search_Icon from '../../img/Header/Search_Icon.png'

class Header extends Component {
    render() {
        return (             
                <nav class="navbar container bg-white border-bottom fixed-top navbar-expand-lg navbar-light">
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <a class="navbar-brand" href="#"><img className="logo-image" src={OSF_Logo}></img></a>
                    <ul class="navbar navbar-nav container bg-nav-mobile d-lg-none d-xl-none border-top d-flex flex-row justify-content-around fixed-bottom">
                            <li class="nav-item">
                                <a class="nav-link ml-3" href="#"><img className="img-fluid icon-image icon-brightness" src={Search_Icon}></img></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ml-3" href="#"><img className="img-fluid icon-image icon-brightness" src={Profile_Icon}></img></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ml-3" href="#"><img className="img-fluid icon-image icon-brightness" src={Wishlist_Icon}></img></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ml-3" href="#"><img className="img-fluid icon-image icon-brightness" src={ShoppingCart_Icon}></img></a>
                            </li>
                        </ul>
                    <div class="collapse navbar-collapse justify-content-between" id="navbar">
                        <a class="navbar-brand small-fix d-none d-xl-block d-lg-block">
                            <a className="osf-text">OSF</a>
                            <br></br>
                            <a className="academy-text">Academy</a>
                        </a>  
                        <ul class="navbar-nav">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle text-dark " href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Services
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <div>
                                        <h5>Product Categories</h5>
                                        <a class="dropdown-item" href="#">Accessories</a>
                                        <a class="dropdown-item" href="#">Alcohol</a>
                                        <a class="dropdown-item" href="#">Art</a>
                                        <a class="dropdown-item" href="#">Books</a>
                                        <a class="dropdown-item" href="#">Drink</a>
                                        <a class="dropdown-item" href="#">Electronics</a>
                                        <a class="dropdown-item" href="#">Flower and Plants</a>
                                        <a class="dropdown-item" href="#">Food</a>
                                    </div>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-dark" href="#">Company</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link text-dark" href="#">Library</a>
                            </li>
                            <li class="nav-item disabled">
                                <a class="nav-link text-dark" href="#">Contact Us</a>
                            </li>
                            <li class="nav-item dropdown ml-4 d-none d-xl-flex d-lg-flex">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    En
                                </a>
                                <div class="dropdown-menu size" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Ua</a>
                                    <a class="dropdown-item" href="#">De</a>
                                </div>
                            </li>
                            <li class="nav-item dropdown d-none d-xl-flex d-lg-flex">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    $Us
                                </a>
                                <div class="dropdown-menu size" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">£Gbp</a>
                                    <a class="dropdown-item" href="#">₴Uah</a>
                                </div>
                            </li>
                        </ul>
                        <ul class="navbar-nav d-none d-sm-none d-md-none d-lg-flex d-xl-flex">
                            <li class="nav-item">
                                <a class="nav-link ml-3" href="#"><img className="img-fluid icon-image" src={Search_Icon}></img></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ml-3" href="#"><img className="img-fluid icon-image" src={Profile_Icon}></img></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ml-3" href="#"><img className="img-fluid icon-image" src={Wishlist_Icon}></img></a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link ml-3" href="#"><img className="img-fluid icon-image" src={ShoppingCart_Icon}></img></a>
                            </li>
                        </ul>
                    </div>
                </nav>
        );
    }
}

export default Header;