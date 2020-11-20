import React, { Component } from 'react';


class FullWidthImage extends Component {
    render() {
        return (
            <div>
                <div className="row size banner align-items-center d-none d-xl-flex d-lg-flex">
                    <div className="col-lg text-center text-white">
                        <h1>Banner OSF Theme</h1>
                        <p>Sed ut perspiciatis unde omnis iste natus<br></br>error sit voluptatem accusantims</p>
                    </div>
                </div>
                <div className="row banner align-items-center d-lg-none d-xl-none">
                    <div className="col-lg text-center text-white my-4 py-2">
                        <h2>Banner OSF Theme</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus<br></br>error sit voluptatem accusantims</p>
                    </div>
                </div>
            </div>
        );
    }
}

export default FullWidthImage;