import React, { Component } from 'react';
import {Link} from "react-router-dom"
import lineImage from '../../img/NotFound/Line_Img.png'
import firstImage from '../../img/PopularItems/PopularItems_Image1.png'
import secondImage from '../../img/PopularItems/PopularItems_Image2.png'
import thirdImage from '../../img/PopularItems/PopularItems_Image3.png'
import fourthImage from '../../img/PopularItems/PopularItems_Image4.png'
import fifthImage from '../../img/PopularItems/PopularItems_Image5.png'
import sixthImage from '../../img/PopularItems/PopularItems_Image6.png'
import seventhImage from '../../img/PopularItems/PopularItems_Image7.png'
import eighthImage from '../../img/PopularItems/PopularItems_Image8.png'
import ProductTile from '../ProductTile/ProductTile';


class CategoryLanding extends Component {
    render() {
        return (
            <div className="row bg-color-not-found d-block p-3 p-lg-5">
                <div className="col pad-from-nav">
                    <div className="col">
                        <nav aria-label="breadcrumb" className="mb-n4">
                            <ol class="breadcrumb bg-color-not-found justify-content-center align-items-center">
                                <li className="breadcrumb-item"><Link  to="/homepage" className="text-success">Home</Link></li>
                                <li class="breadcrumb-item active" aria-current="page">Category Landing</li>
                            </ol>
                        </nav>
                    </div>
                    <div className="col d-flex justify-content-center align-items-center p-3">
                        <h1 className="mx-3">Services</h1>
                    </div>
                </div>
                <div className="col bg-white p-3">
                    <form>
                        <div class="form-row ">
                            <div class="form-group col-md">
                                <label for="inputState">Price</label>
                                <select id="inputState" class="form-control rounded-pill">
                                    <option>$0.00 - $100.00</option>
                                </select>
                            </div>
                            <div class="form-group col-md">
                                <label for="inputState">Brands</label>
                                <select id="inputState" class="form-control rounded-pill">
                                    <option>Ukraine Sport</option>
                                </select>
                            </div>
                            <div class="form-group col-md">
                                <label for="inputState">Size</label>
                                <select id="inputState" class="form-control rounded-pill">
                                    <option>Small</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-row">
                            <div class="form-group col-md">
                                <label for="inputState">Color</label>
                                <select id="inputState" class="form-control rounded-pill">
                                    <option className="text-primary">Blue</option>
                                    <option className="text-secondary">White Dark</option>
                                    <option className="text-success">Green</option>
                                    <option className="text-danger">Red</option>
                                    <option className="text-info">Deep Blue</option>
                                    <option className="text-dark">Dark</option>
                                    <option className="text-warning">Yellow</option>
                                </select>
                            </div>
                            <div class="form-group col-md">
                                <label for="inputState">Sort By</label>
                                <select id="inputState" class="form-control rounded-pill">
                                    <option>Price</option>
                                </select>
                            </div> 
                            <div class="form-group col-md">
                                <label for="inputState">Show</label>
                                <select id="inputState" class="form-control rounded-pill">
                                    <option>16 per page</option>
                                </select>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col d-flex justify-content-center align-self-center">
                    <p className="pt-4">12,931 in apparel</p> 
                </div>
                <div className="col p-0">
                    <div className="row">
                        <div className="col-md-6 col-lg-3 p-3">
                            <ProductTile card={{img:firstImage, text:"Kristina Dam Oak Table With White Marble Top", price:"$799.55"}}/>
                        </div>
                        <div className="col-md-6 col-lg-3 p-3">
                            <ProductTile card={{img:secondImage, text:"Hay - About A Lounge Chair AAL 93", price:"$659.55",}}/>
                        </div>
                        <div className="col-md-6 col-lg-3 p-3">
                            <ProductTile card={{img:thirdImage, text:"Activate Facial Mask and Charcoal Soap", price:"$129.55"}}/>
                        </div>
                        <div className="col-md-6 col-lg-3 p-3">
                            <ProductTile card={{img:fourthImage, text:"Cocktail Table Walnut | Yes Or Not", price:"$299.99"}}/>
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
                            <ProductTile className="bg-card"card={{img:fifthImage, text:"Activate Facial Mask and Charcoal Soap", price:"$129.55"}}/>
                        </div>
                        <div className="col-md-6 col-lg-3 p-3">
                            <ProductTile card={{img:firstImage, text:"Kristina Dam Oak Table With White Marble Top", price:"$799.55"}}/>
                        </div>
                        <div className="col-md-6 col-lg-3 p-3">
                            <ProductTile card={{img:secondImage, text:"Hay - About A Lounge Chair AAL 93", price:"$659.55",}}/>
                        </div>
                        <div className="col-md-6 col-lg-3 p-3">
                            <ProductTile card={{img:thirdImage, text:"Activate Facial Mask and Charcoal Soap", price:"$129.55"}}/>
                        </div>
                        <div className="col-md-6 col-lg-3 p-3">
                            <ProductTile card={{img:fourthImage, text:"Cocktail Table Walnut | Yes Or Not", price:"$299.99"}}/>
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
                            <ProductTile className="bg-card"card={{img:secondImage, text:"Activate Facial Mask and Charcoal Soap", price:"$129.55"}}/>
                        </div>
                    </div>
                </div>
                <div className="col d-flex justify-content-center align-self-center p-3">
                    <button className="text-white bg-success border rounded-pill px-3 py-1">&nbsp;&nbsp;&nbsp;&nbsp; Load More &nbsp;&nbsp;&nbsp;&nbsp;</button>
                </div>
            </div>
        );
    }
}

export default CategoryLanding;