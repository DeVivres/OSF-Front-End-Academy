import React, { Component } from 'react';
import Facebook_Icon from '../../img/Social/Facebook_Icon.png'
import Google_Icon from '../../img/Social/Google_Icon.png'
import Pinterest_Icon from '../../img/Social/Pinterest_Icon.png'
import Twitter_Icon from '../../img/Social/Twitter_Icon.png'

class ProductDetails extends Component {
    constructor(props) {
        super(props);
        this.state = {
            product: {
                price: String,
                info: String,
                moreInfo: String,
            },
            quantity: 1,
            
        }
    }
    increment = () =>  {
        this.setState(prevState => {
          if(prevState.quantity < 100) {
            return {
              quantity: prevState.quantity + 1
            }
          } else {
            return null;
          }
        });
    }
    decrement = () => {
        this.setState(prevState => {
          if(prevState.quantity > 1) {
            return {
              quantity: prevState.quantity - 1
            }
          } else {  
            return null;
          }
        });
    }
    
    render() {
        return (
            <div className="col-4">
                <div className="my-3"> 
                    <h1>{this.props.product.price}</h1>
                    <select id="inputState" class="form-control col-md-3 col-lg-6 my-3 rounded-pill">
                        <option className="text-primary">Blue</option>
                        <option className="text-secondary">White Dark</option>
                        <option className="text-success">Green</option>
                        <option className="text-danger">Red</option>
                        <option className="text-info">Deep Blue</option>
                        <option className="text-dark">Dark</option>
                        <option className="text-warning">Yellow</option>
                    </select>
                    <div className="my-3 d-flex">
                        <div className="border rounded-pill d-flex justify-content-between align-items-center mr-3">
                            <button className="btn mx-1" onClick={this.decrement}>-</button>
                            <span className="mx-1">{this.state.quantity}</span>
                            <button className="btn mx-1" onClick={this.increment}>+</button>
                        </div>
                        <button className="btn border rounded-pill bg-success text-white px-4">Add To Cart</button>
                    </div>
                </div>
                <div className="my-3">
                    <p>
                        {this.props.product.info}
                        <span class="collapse" id="collapseExample">
                            &nbsp;{this.props.product.moreInfo}
                        </span>
                        <br></br>
                        <a className="text-success" data-toggle="collapse" href="#collapseExample" 
                        role="button" aria-expanded="false" aria-controls="collapseExample">
                            Read More
                        </a>    
                    </p>
                </div>
                <button className="btn border rounded-pill bg-success text-white px-4">Print Page</button>
                <div className="d-flex align-items-center my-3">
                    <p className="text-muted">Share</p>
                    <div className="col-lg-2">
                        <ul className="list-inline list-unstyled d-flex justify-content-between">
                            <li className="list-inline-item">
                                <a href="https://www.facebook.com" target="_blank">
                                    <img className="icon-fading mx-1" src={Facebook_Icon}></img>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://www.google.com/" target="_blank">
                                    <img className="icon-fading mx-1" src={Google_Icon}></img>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://www.pinterest.com/" target="_blank">
                                    <img className="icon-fading mx-1" src={Pinterest_Icon}></img>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="https://twitter.com/" target="_blank">
                                    <img className="icon-fading mx-1" src={Twitter_Icon}></img>
                                </a>
                            </li>
                        </ul>                    
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductDetails;