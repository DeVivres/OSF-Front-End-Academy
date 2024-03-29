import React, { Component } from 'react';
import {Link} from "react-router-dom"
import lineImage from '../../img/PopularItems/FeaturedProducts_WhiteLine.png'
import firstImage from '../../img/PopularItems/PopularItems_Image1.png'
import secondImage from '../../img/PopularItems/PopularItems_Image2.png'
import thirdImage from '../../img/PopularItems/PopularItems_Image3.png'
import fourthImage from '../../img/PopularItems/PopularItems_Image4.png'
import fifthImage from '../../img/PopularItems/PopularItems_Image5.png'
import sixthImage from '../../img/PopularItems/PopularItems_Image6.png'
import seventhImage from '../../img/PopularItems/PopularItems_Image7.png'
import ProductBuy from '../ProductTiles/ProductBuy';
import Breadcrumbs from './Breadcrumbs';
import Filters from './Filters';


class CategoryLanding extends Component {
    render() {
        return (
            <div className="row bg-color-not-found d-block p-3 p-lg-5">
                <Breadcrumbs direction={{linkToPrevious:"/homepage", previousPage:"Home", currentPage:"Category Landing", pageTitle:"Services"}}/>
                <Filters />
                <div className="col d-flex justify-content-center align-self-center">
                    <p className="pt-4">12,931 in apparel</p> 
                </div>
                <div className="col p-0">
                    <div className="row">
                        <ProductBuy card={{img:firstImage, text:"Kristina Dam Oak Table With White", price:"$799.55"}}/>
                        <ProductBuy card={{img:secondImage, text:"Hay - About A Lounge Chair AAL 93", price:"$659.55",}}/>
                        <ProductBuy card={{img:thirdImage, text:"Activate Facial Mask and Charcoal Soap", price:"$129.55"}}/>
                        <ProductBuy card={{img:fourthImage, text:"Cocktail Table Walnut | Yes Or Not", price:"$299.99"}}/>
                        <ProductBuy card={{img:fifthImage, text:"Hay - About A Lounge Chair AAL 93", price:"$659.55"}}/>
                        <ProductBuy card={{img:sixthImage, text:"Tory Desk Calendar | Sure to Buy", price:"$410.99"}}/>
                        <ProductBuy card={{img:seventhImage, text:"Ch445 Wing Chair on Suite Ny", price:"$330.55"}}/>
                        <ProductBuy className="bg-card"card={{img:fifthImage, text:"Activate Facial Mask and Charcoal Soap", price:"$129.55"}}/>
                        <ProductBuy card={{img:firstImage, text:"Kristina Dam Oak Table With White", price:"$799.55"}}/>
                        <ProductBuy card={{img:secondImage, text:"Hay - About A Lounge Chair AAL 93", price:"$659.55",}}/>
                        <ProductBuy card={{img:thirdImage, text:"Activate Facial Mask and Charcoal Soap", price:"$129.55"}}/>
                        <ProductBuy card={{img:fourthImage, text:"Cocktail Table Walnut | Yes Or Not", price:"$299.99"}}/>
                        <ProductBuy card={{img:fifthImage, text:"Hay - About A Lounge Chair AAL 93", price:"$659.55"}}/>
                        <ProductBuy card={{img:sixthImage, text:"Tory Desk Calendar | Sure to Buy", price:"$410.99"}}/>
                        <ProductBuy card={{img:seventhImage, text:"Ch445 Wing Chair on Suite Ny", price:"$330.55"}}/>
                        <ProductBuy card={{img:secondImage, text:"Activate Facial Mask and Charcoal Soap", price:"$129.55"}}/>
                    </div>
                </div>
                <div className="col d-flex justify-content-center align-self-center p-3">
                    <button className="btn text-white bg-success border rounded-pill px-3 py-1">
                        &nbsp;&nbsp;&nbsp;&nbsp; Load More &nbsp;&nbsp;&nbsp;&nbsp;
                    </button>
                </div>
            </div>
        );
    }
}

export default CategoryLanding;