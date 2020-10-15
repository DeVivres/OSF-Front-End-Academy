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
            <div className="row border border-danger">
                <div className="col">
                    Header
                </div>
                <div className="col">
                    One of three columns
                </div>
                <div className="col">
                    One of three columns
                </div>
                <div className="col">
                    One of four columns
                </div>
            </div>
        );
    }
}

export default Header;