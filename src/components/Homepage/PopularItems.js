import React, { Component } from 'react';
import lineImage from '../../img/PopularItems/PopularItems_Line.png'
import firstImage from '../../img/PopularItems/PopularItems_Image1.png'
import secondImage from '../../img/PopularItems/PopularItems_Image2.png'
import thirdImage from '../../img/PopularItems/PopularItems_Image3.png'
import fourthImage from '../../img/PopularItems/PopularItems_Image4.png'
import fifthImage from '../../img/PopularItems/PopularItems_Image5.png'
import sixthImage from '../../img/PopularItems/PopularItems_Image6.png'
import seventhImage from '../../img/PopularItems/PopularItems_Image7.png'
import eighthImage from '../../img/PopularItems/PopularItems_Image8.png'
import '../App.css';
import ProductTile from '../ProductTile/ProductTile';

class PopularItems extends Component {
    render() {
        return (
            <div className="row d-block bg-items p-3">
                <div className="col d-flex justify-content-center align-items-center pt-4">
                    <h5 className="text-white">Popular Items</h5>
                </div>
                <div className="col p-0">
                    <div className="row p-3">
                        <div className="col-md-6 col-lg-3 p-3">
                            <ProductTile card={{img:firstImage, text:"Kristina Dam Oak Table Marble", price:"$799.55"}}/>
                        </div>
                        <div className="col-md-6 col-lg-3 p-3">
                            <ProductTile card={{img:secondImage, text:"Hay - About A Lounge Chair AAL 93", price:"$659.55",}}/>
                        </div>
                        <div className="col-md-6 col-lg-3 p-3">
                            <ProductTile card={{img:thirdImage, text:"Activate Facial Mask and Charcoal Soap", price:"$129.55"}}/>
                        </div>
                        <div className="col-md-6 col-lg-3 p-3">
                            <ProductTile card={{img:fourthImage, text:"Cocktail Table Walnut | Yes or No", price:"$299.99"}}/>
                        </div>
                        <div className="col-md-6 col-lg-3 p-3">
                            <ProductTile card={{img:fifthImage, text:"Hay - About A Lounge Chair AAL 93", price:"$659.55"}}/>
                        </div>
                        <div className="col-md-6 col-lg-3 p-3">
                            <ProductTile card={{img:sixthImage, text:"Tory Desk Calendar | Sure to Buy", price:"$410.99"}}/>
                        </div>
                        <div className="col-md-6 col-lg-3 p-3">
                            <ProductTile card={{img:seventhImage, text:"Ch445 Wing Chair on Suite Ny", price:"$330.55"}}/>
                        </div>
                        <div className="col-md-6 col-lg-3 p-3">
                            <ProductTile className="bg-card"card={{img:firstImage, text:"Tory Desk Calendar | Sure to Buy", price:"$320.99"}}/>
                        </div>
                    </div>
                </div>
                <div className="col d-flex justify-content-center align-self-center pb-3">
                    <button className="text-white bg-items border rounded-pill px-5 py-1">
                        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Load More &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    </button>
                </div>
            </div>
        );
    }
}

export default PopularItems;