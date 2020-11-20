import React, { Component } from 'react';
import {Link} from "react-router-dom"


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
            <div className="col-md-6 col-lg-3 p-3">
               <div class="card text-center h-100">
                    <Link to="/productdetailedpage">
                        <img class="card-img-top" src={this.props.card.img}></img>                    
                    </Link>
                    <div class="card-body">
                        <p class="card-text">{this.props.card.text}</p>
                        <p className="text-success">{this.props.card.price}</p>
                    </div>
                </div> 
            </div>            
        )      
    }
}

export default ProductHover;