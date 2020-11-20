import React, { Component } from 'react';

class Filters extends Component {
    render() {
        return (
            <div className="col bg-white p-3">
                <form>
                    <div class="form-row">
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
        );
    }
}

export default Filters;