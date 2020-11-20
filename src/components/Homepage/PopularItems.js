import React, { Component } from 'react';
import lineImage from '../../img/PopularItems/FeaturedProducts_WhiteLine.png'
import firstImage from '../../img/PopularItems/PopularItems_Image1.png'
import secondImage from '../../img/PopularItems/PopularItems_Image2.png'
import thirdImage from '../../img/PopularItems/PopularItems_Image3.png'
import fourthImage from '../../img/PopularItems/PopularItems_Image4.png'
import fifthImage from '../../img/PopularItems/PopularItems_Image5.png'
import sixthImage from '../../img/PopularItems/PopularItems_Image6.png'
import seventhImage from '../../img/PopularItems/PopularItems_Image7.png'
import eighthImage from '../../img/PopularItems/PopularItems_Image8.png'
import '../App.css';
import ProductBuy from '../ProductTiles/ProductBuy';
import ProductHover from '../ProductTiles/ProductHover';

class PopularItems extends Component {
    render() {
        return (
            <div className="row d-block bg-items p-3">
                <div className="col d-flex justify-content-center align-items-center pt-4">
                    <img className="w-25" src={lineImage}></img>
                    <h2 className="text-white mx-3 text-center">Popular Items</h2>
                    <img className="w-25" src={lineImage}></img>
                </div>
                <div className="col p-0">
                    <div className="row p-3">
                        <ProductHover card={{img:firstImage, text:"Kristina Dam Oak Table Marble", price:"$799.55"}}/>
                        <ProductBuy card={{img:secondImage, text:"Hay - About A Lounge Chair AAL 93", price:"$659.55"}}/>
                        <ProductHover card={{img:thirdImage, text:"Activate Facial Mask and Charcoal", price:"$129.55"}}/>
                        <ProductHover card={{img:fourthImage, text:"Cocktail Table Walnut | Yes or No", price:"$299.99"}}/>
                        <ProductHover card={{img:fifthImage, text:"Hay - About A Lounge Chair AAL 93", price:"$659.55"}}/>
                        <ProductHover card={{img:sixthImage, text:"Tory Desk Calendar | Sure to Buy", price:"$410.99"}}/>
                        <ProductHover card={{img:seventhImage, text:"Ch445 Wing Chair on Suite Ny", price:"$330.55"}}/>
                        <ProductBuy card={{img:firstImage, text:"Hay - About A Lounge Chair AAL 93", price:"$659.55"}}/>
                    </div>
                </div>
                <div className="col d-flex justify-content-center align-self-center pb-3">
                    <button className="btn border rounded-pill text-white bg-items px-5 py-1">
                        Load More 
                        <svg width="1em" height="1em" viewBox="0 0 16 16" className="bi bi-arrow-counterclockwise position-relative ml-4 mr-n4" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" d="M8 3a5 5 0 1 1-4.546 2.914.5.5 0 0 0-.908-.417A6 6 0 1 0 8 2v1z"/>
                            <path d="M8 4.466V.534a.25.25 0 0 0-.41-.192L5.23 2.308a.25.25 0 0 0 0 .384l2.36 1.966A.25.25 0 0 0 8 4.466z"/>
                        </svg>                     
                    </button>
                </div>
            </div>
        );
    }
}

export default PopularItems;