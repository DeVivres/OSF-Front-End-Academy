import React, { Component } from 'react';
import Footer from '../components/Global/Footer';
import Header from '../components/Global/Header';
import BenefitsContent from '../components/Homepage/BenefitsContent';
import Breadcrumbs from '../components/Landing/Breadcrumbs';
import CookiesPolicy from '../components/Non-Product/CookiesPolicy';
import LogInDialog from '../components/Non-Product/LogInDialog';
import ProductImage from '../components/ProductDetailed/ProductImage';
import ProductDetails from '../components/ProductDetailed/ProductDetails';
import Tabs from '../components/ProductDetailed/Tabs';
import firstImage from '../img/PopularItems/PopularItems_Image1.png'
import secondImage from '../img/PopularItems/PopularItems_Image2.png'
import thirdImage from '../img/PopularItems/PopularItems_Image3.png'
import fourthImage from '../img/PopularItems/PopularItems_Image4.png'
import ProductHover from '../components/ProductTiles/ProductHover';
import lineImage from '../img/NotFound/Line_Img.png'


class ProductDetailedPage extends Component {
    render() {
        return (
            <div className="container">
                <Header /> 
                <CookiesPolicy />
                <LogInDialog />
                <div className="row bg-color-not-found d-block p-3 p-lg-5">
                    <Breadcrumbs direction={{linkToPrevious:"/homepage", previousPage:"Home", currentPage:"OSF Theme", pageTitle:"Ruffle V-Neck Cardigan"}}/>
                    <div className="row bg-white m-2">
                        <ProductImage />
                        <ProductDetails product={{price:"$299.99", 
                                        info:"Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore Beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas", 
                                        moreInfo:"sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"}}/>
                    </div>
                    <Tabs />
                    <div className="row d-block mt-5 mb-n3">
                        <div className="col d-flex justify-content-center align-items-center">
                            <img className="w-25" src={lineImage}></img>
                            <h4 className="mx-3 text-center">Popular Items</h4>
                            <img className="w-25" src={lineImage}></img>
                        </div>  
                        <div className="col">   
                            <div className="row">
                                <ProductHover card={{img:firstImage, text:"Kristina Dam Oak Table Marble", price:"$799.55"}}/>
                                <ProductHover card={{img:secondImage, text:"Hay - About A Lounge Chair AAL 93", price:"$659.55"}}/>
                                <ProductHover card={{img:thirdImage, text:"Activate Facial Mask and Charcoal", price:"$129.55"}}/>
                                <ProductHover card={{img:fourthImage, text:"Cocktail Table Walnut | Yes or No", price:"$299.99"}}/>
                            </div>
                        </div>
                    </div>
                    
                </div>
                
                <BenefitsContent /> 
                <Footer />
            </div>
        );
    }
}

export default ProductDetailedPage;