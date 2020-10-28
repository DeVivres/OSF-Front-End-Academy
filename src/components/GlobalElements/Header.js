import React, { Component } from 'react';
import '../App.css';
import './Header.css';
import { Link } from "react-router-dom"
import OSF_Logo from '../../img/Header/OSF_Logo.png'
import MobilePhoto from '../../img/Header/Mobile_Photo_BurgerMeny.png'
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
                        <a className="nav-link ml-3" href="#" data-toggle="modal" data-target="#modalLoginForm"><img className="img-fluid icon-image icon-brightness" src={Profile_Icon}></img></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link ml-3" href="#"><img className="img-fluid icon-image icon-brightness" src={Wishlist_Icon}></img></a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link ml-3" href="#"><img className="img-fluid icon-image icon-brightness" src={ShoppingCart_Icon}></img></a>
                    </li>
                </ul>
                
                {/* Menu layouts for mobile and desktop */}
                <div className="collapse navbar-collapse" id="navbar">
                    {/* Collapsed menu for Xs, Sm, Md screens */}
                    <ul className="navbar-nav d-lg-none d-xl-none">
                        <li className="nav-item dropdown">
                            <a className="nav-link d-flex justify-content-between text-dark" data-toggle="collapse" href="#collapseServices" role="button" aria-expanded="false" aria-controls="collapseCompany">
                                <h6 className="text-uppercase">Services</h6>
                                <a className="dropdown-toggle"></a>
                            </a>
                            <div className="collapse ml-3" id="collapseServices">
                                <div>
                                    <a className="nav-link d-flex justify-content-between" data-toggle="collapse" href="#collapseProduct" role="button" aria-expanded="false" aria-controls="collapseCompany">
                                        <h6>Product Categories</h6>
                                        <a className="dropdown-toggle"></a>
                                    </a>
                                    <div className="collapse" id="collapseProduct">
                                        <ul className="list-unstyled ml-3">
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
                                    <a className="nav-link d-flex justify-content-between" data-toggle="collapse" href="#collapseSales" role="button" aria-expanded="false" aria-controls="collapseCompany">
                                        <h6>Sales</h6>
                                        <a className="dropdown-toggle"></a>
                                    </a>
                                    <div className="collapse" id="collapseSales">
                                        <ul className="list-unstyled ml-3">
                                            <li className="mb-2"><Link to="/notfoundpage">Accessories</Link></li>
                                            <li className="mb-2"><Link to="/notfoundpage">Alcohol</Link></li>
                                            <li className="mb-2"><Link to="/notfoundpage">Art</Link></li>
                                            <li className="mb-2"><Link to="/notfoundpage">Books</Link></li>
                                            <li className="mb-2"><Link to="/notfoundpage">Drink</Link></li>
                                            <li className="mb-2"><Link to="/notfoundpage">Electronics</Link></li>
                                            <li className="mb-2"><Link to="/notfoundpage">Flower & Plants</Link></li>
                                            <li className="mb-2"><Link to="/notfoundpage">Food</Link></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link d-flex justify-content-between text-dark" data-toggle="collapse" href="#collapseCompany" role="button" aria-expanded="false" aria-controls="collapseCompany">
                                <h6 className="text-uppercase">Company</h6>
                                <a className="dropdown-toggle"></a>
                            </a>
                            <div className="collapse" id="collapseCompany">
                                <div className="ml-3">
                                    <p>Company Info</p>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link d-flex justify-content-between text-dark" data-toggle="collapse" href="#collapseLibrary" role="button" aria-expanded="false" aria-controls="collapseLibrary">
                                <h6 className="text-uppercase">Library</h6>
                                <a className="dropdown-toggle"></a>
                            </a>
                            <div className="collapse" id="collapseLibrary">
                                <div className="ml-3">
                                    <p>Books</p>
                                </div>
                            </div>
                        </li>
                        <li className="nav-item">                          
                            <a className="nav-link d-flex justify-content-between text-dark" data-toggle="collapse" href="#collapseInfo" role="button" aria-expanded="false" aria-controls="collapseContactUs">
                                <h6 className="text-uppercase">Contact Us</h6>
                                <a className="dropdown-toggle"></a>
                            </a>
                            <div className="collapse" id="collapseInfo">
                                <div className="ml-3">
                                    <p>Headquarters:<br></br>5600, Blvd. des Galeries, Bur 530<br></br>Quebec, Quebec G2K 2H6</p>    
                                    <p><a href="mailto:exampleEmail@gmail.com">contact@osf-global.com</a></p>
                                    <p><a href="tel:+1885484344">+1 (888) 548-4344</a></p>
                                </div>
                            </div>
                        </li>
                        <img className="img-fluid mx-auto d-md-none d-lg-none d-xl-none" src={MobilePhoto}></img>
                    </ul>
                    
                    {/* Meny for Lg, Xl screens */}
                    <div className="navbar-collapse justify-content-between d-none d-sm-none d-md-none">
                        <a className="navbar-brand small-fix">
                            <a className="osf-text">OSF</a>
                            <br></br>
                            <a className="academy-text">Academy</a>
                        </a>  
                        <ul className="navbar-nav">
                            <li className="nav-item dropdown ">
                                <a className="nav-link dropdown-toggle text-dark text-uppercase" data-offset="100,20" 
                                id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Services
                                </a>
                                <div class="dropdown-menu dropdown-size border-0" aria-labelledby="navbarDropdown">
                                    <div className="row d-flex m-3">
                                        <div className="col-lg-6 text-white">
                                            <h5>Product Categories</h5>
                                            <div className="row">
                                                <div className="col">
                                                    <ul className="list-unstyled text-white">
                                                        <li className="mb-2"><Link to="/notfoundpage" className="text-white">Accessories</Link></li>
                                                        <li className="mb-2"><Link to="/notfoundpage" className="text-white">Alcohol</Link></li>
                                                        <li className="mb-2"><Link to="/notfoundpage" className="text-white">Art</Link></li>
                                                        <li className="mb-2"><Link to="/notfoundpage" className="text-white">Books</Link></li>
                                                        <li className="mb-2"><Link to="/notfoundpage" className="text-white">Drink</Link></li>
                                                        <li className="mb-2"><Link to="/notfoundpage" className="text-white">Electronics</Link></li>
                                                        <li className="mb-2"><Link to="/notfoundpage" className="text-white">Flower & Plants</Link></li>
                                                        <li className="mb-2"><Link to="/notfoundpage" className="text-white">Food</Link></li>
                                                    </ul>
                                                </div>
                                                <div className="col">
                                                    <ul className="list-unstyled">
                                                        <li className="mb-2"><Link to="/notfoundpage" className="text-white">Gadgets</Link></li>
                                                        <li className="mb-2"><Link to="/notfoundpage" className="text-white">Garden</Link></li>
                                                        <li className="mb-2"><Link to="/notfoundpage" className="text-white">Grocery</Link></li>
                                                        <li className="mb-2"><Link to="/notfoundpage" className="text-white">Home</Link></li>
                                                        <li className="mb-2"><Link to="/notfoundpage" className="text-white">Jewelry</Link></li>
                                                        <li className="mb-2"><Link to="/notfoundpage" className="text-white">Kids & Baby</Link></li>
                                                        <li className="mb-2"><Link to="/notfoundpage" className="text-white">Men's Fashion</Link></li>
                                                        <li className="mb-2"><Link to="/notfoundpage" className="text-white">Mobile</Link></li>
                                                    </ul>
                                                </div>
                                                <div className="col">
                                                    <ul className="list-unstyled">
                                                        <li className="mb-2"><Link to="/notfoundpage" className="text-white">Motorcycles</Link></li>
                                                        <li className="mb-2"><Link to="/notfoundpage" className="text-white">Movies</Link></li>
                                                        <li className="mb-2"><Link to="/notfoundpage" className="text-white">Music</Link></li>
                                                        <li className="mb-2"><Link to="/notfoundpage" className="text-white">Office</Link></li>
                                                        <li className="mb-2"><Link to="/notfoundpage" className="text-white">Pets</Link></li>
                                                        <li className="mb-2"><Link to="/notfoundpage" className="text-white">Romantic</Link></li>
                                                        <li className="mb-2"><Link to="/notfoundpage" className="text-white">Sport</Link></li>
                                                        <li className="mb-2"><Link to="/notfoundpage" className="text-white">Toys</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col">
                                            <h5 className="text-white">Sale</h5>
                                            <div className="row">
                                                <div className="col">
                                                    <ul className="list-unstyled">
                                                        <li className="mb-2"><Link to="/notfoundpage" className="text-white">Accessories</Link></li>
                                                        <li className="mb-2"><Link to="/notfoundpage" className="text-white">Alcohol</Link></li>
                                                        <li className="mb-2"><Link to="/notfoundpage" className="text-white">Art</Link></li>
                                                        <li className="mb-2"><Link to="/notfoundpage" className="text-white">Books</Link></li>
                                                        <li className="mb-2"><Link to="/notfoundpage" className="text-white">Drink</Link></li>
                                                        <li className="mb-2"><Link to="/notfoundpage" className="text-white">Electronics</Link></li>
                                                        <li className="mb-2"><Link to="/notfoundpage" className="text-white">Flower & Plants</Link></li>
                                                        <li className="mb-2"><Link to="/notfoundpage" className="text-white">Food</Link></li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-4 d-flex justify-content-center">
                                            <img className="img-fluid" src={MobilePhoto}></img>
                                        </div>
                                    </div>
                                </div>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark text-uppercase" href="#">Company</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark text-uppercase" href="#">Library</a>
                            </li>
                            <li className="nav-item disabled">
                                <a className="nav-link text-dark text-uppercase" href="#">Contact Us</a>
                            </li>
                            <li className="nav-item dropdown ml-4">
                                <a className="nav-link dropdown-toggle text-uppercase" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    En
                                </a>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle text-uppercase" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    $Us
                                </a>
                            </li>
                        </ul>
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link ml-3" href="#"><img className="img-fluid icon-image" src={Search_Icon}></img></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ml-3" href="#" data-toggle="modal" data-target="#modalLoginForm"><img className="img-fluid icon-image" src={Profile_Icon}></img></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ml-3" href="#"><img className="img-fluid icon-image" src={Wishlist_Icon}></img></a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link ml-3" href="#"><img className="img-fluid icon-image" src={ShoppingCart_Icon}></img></a>
                            </li>
                        </ul>
                    </div>
                </div>                
            </nav>
        );
    }
}

export default Header;