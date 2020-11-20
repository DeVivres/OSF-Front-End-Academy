import React, { Component } from 'react';

class ProductBuy extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card: {
                img: Image,
                price: String,
                text: String,
            }
        }
    }
    render() {
        return (
            <div className="col-md-6 col-lg-3 p-3">
                <div className="card text-center h-100">
                    <img className="card-img-top" src={this.props.card.img}></img>
                    <div className="card-body">
                        <p className="card-text">{this.props.card.text}</p>
                        <div className="border border-secondary rounded-pill d-flex justify-content-center mt-n2 mb-2">
                            <button className="pr-3 btn text-success border-right">{this.props.card.price}</button>
                            <button className="pl-3 btn border-left" role="button">Buy Now</button>
                        </div>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default ProductBuy;