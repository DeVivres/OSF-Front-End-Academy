import React, { Component } from 'react';


class ProductTile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card: {
                img: Image,
                text: String,
                price: Number,
            }
            
        }
    }
    render() {
        return (
            <div>
                <div class="card text-center">
                    <img class="card-img-top" src={this.props.card.img}></img>
                    <div class="card-body">
                        <p class="card-text">{this.props.card.text}</p>
                        <p>{this.props.card.price}</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductTile;