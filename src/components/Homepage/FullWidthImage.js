import React, { Component } from 'react';
import '../App.css';
import '../Homepage/FullWidthImage.css'


class FullWidthImage extends Component {
    render() {
        return (
            <div className="row banner align-items-center">
                <div className="col-lg text-center text-white">
                    <h3>Banner OSF Theme</h3>
                    <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantims</p>
                </div>
            </div>
        );
    }
}

export default FullWidthImage;