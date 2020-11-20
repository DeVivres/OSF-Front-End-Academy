import React, { Component } from 'react';
import $ from 'jquery';

import firstBigProductImage from '../../img/ProductImages/1_Big_ProductPhoto.jpg'
import firstSmallProductImage from '../../img/ProductImages/1_Small_ProductPhoto.jpg'
import secondBigProductImage from '../../img/ProductImages/2_Big_ProductPhoto.jpg'
import secondSmallProductImage from '../../img/ProductImages/2_Small_ProductPhoto.jpg'
import thirdBigProductImage from '../../img/ProductImages/3_Big_ProductPhoto.jpg'
import thirdSmallProductImage from '../../img/ProductImages/3_Small_ProductPhoto.jpg'
import fourthBigProductImage from '../../img/ProductImages/4_Big_ProductPhoto.jpg'
import fourthSmallProductImage from '../../img/ProductImages/4_Small_ProductPhoto.jpg'

class ProductImage extends Component {
    render() {
        return (
            <div className="col d-flex align-items-center">
                <div className="col-9 d-flex justify-content-end" id="imageBox">
                    <img src={firstBigProductImage}></img>
                </div>
                <div className="col-2">
                    <img className="img-fluid p-1" onClick={this.handleClick} src={firstBigProductImage}></img>
                    <img className="img-fluid p-1 icon-fading" onClick={this.handleClick} src={secondBigProductImage}></img>
                    <img className="img-fluid p-1 icon-fading" onClick={this.handleClick} src={thirdBigProductImage}></img>
                    <img className="img-fluid p-1 icon-fading" onClick={this.handleClick} src={fourthBigProductImage}></img>
                </div>
            </div>
        );
    }
}

export default ProductImage;