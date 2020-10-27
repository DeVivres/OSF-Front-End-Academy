import React, { Component } from 'react';
import '../App.css';

class PopularItems extends Component {
    render() {
        return (
            <div className="row bg-items p-4">
                <div className="col-lg p-4 m-4">
                    <h5 className="text-center text-white">Popular Items</h5>
                </div>
            </div>
        );
    }
}

export default PopularItems;