import React, { Component } from 'react';

class ProductHover extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card: {
                img: Image,
                text: String,
                price: String,
            }
        }
    }
    render() {
        return (
            <div class="card text-center h-100">
                <img class="card-img-top" src={this.props.card.img}></img>
                <div class="card-body">
                    <p class="card-text">{this.props.card.text}</p>
                    <p className="text-success">{this.props.card.price}</p>
                </div>
            </div>
        )      
    }
}

export default ProductHover;