import React, { Component } from 'react';
import {Link} from "react-router-dom"
import lineImage from '../../img/NotFound/Line_Img.png'

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
            </div>
        );
    }
}

export default CategoryLanding;