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
            <div className="row-lg">
                <br></br>
                
                <nav class="navbar container nav-fill bg-white border-bottom fixed-top navbar-expand-lg navbar-light width">
                    <a class="navbar-brand" href="#"><img className="img-fluid logo-image" src={OSF_Logo}></img></a>
                    <a class="navbar-brand">OSF<br></br>Academy</a>  
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul class="navbar-nav mx-auto">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
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
                                <a class="nav-link" href="#">Company</a>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link" href="#">Library</a>
                            </li>
                            <li class="nav-item disabled">
                                <a class="nav-link" href="#">Contact Us</a>
                            </li>
                        </ul>
                        <ul class="navbar-nav mx-auto">
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    En
                                </a>
                                <div class="dropdown-menu size" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Ua</a>
                                    <a class="dropdown-item" href="#">De</a>
                                </div>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    $Us
                                </a>
                                <div class="dropdown-menu size" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">£Gbp</a>
                                    <a class="dropdown-item" href="#">₴Uah</a>
                                </div>
                            </li>
                        </ul>
                        <ul class="navbar-nav">
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
            </div>
        );
    }
}

export default Header;