import React, { Component } from 'react';
import '../App.css';
import '../Homepage/PopularItems.css'


class PopularItems extends Component {
    render() {
        return (
            <div className="row bg-items">
                <div className="col-lg">
                    <h5 className="text-center text-white">Popular Items</h5>
                </div>
            </div>
        );
    }
}

export default PopularItems;