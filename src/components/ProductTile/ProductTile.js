import React, { Component } from 'react';


class ProductTile extends Component {
    constructor(props) {
        super(props);
        this.state = {
            card: {
                img: Image,
                text: String,
                price: String,
                isFullCover: Boolean,
                isButton: Boolean,
            }
        }
    }
    render() {
        const isCover = this.state.card.isFullCover;
        const hasButton = this.state.card.isButton;
        let card;
        if(isCover == true) {
            card = 
            <div>
                <div class="card text-center">
                    <img class="card-img-top" src={this.props.card.img}></img>
                </div>
            </div>
        }
        else if(hasButton == true){
            card = 
            <div>
                <div class="card text-center">
                    <img class="card-img-top" src={this.props.card.img}></img>
                    <div class="card-body">
                        <p class="card-text">{this.props.card.text}</p>
                        <p>{this.props.card.price}</p>
                        <button>Press here</button>
                    </div>
                </div>
            </div>
        }
        else{
            card = 
            <div>
                <div class="card text-center">
                    <img class="card-img-top" src={this.props.card.img}></img>
                    <div class="card-body">
                        <p class="card-text">{this.props.card.text}</p>
                        <p>{this.props.card.price}</p>
                    </div>
                </div>
            </div>
        }
        
        return (
            <div>
                {card}
            </div>
        );
    }
}

export default ProductTile;