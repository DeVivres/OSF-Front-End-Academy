import React, { Component } from 'react';
import Carousel_Photo1 from '../../img/Banner/Carousel_Photo1.png'
import Carousel_Photo2 from '../../img/Banner/Carousel_Photo2.png'
import Carousel_Photo3 from '../../img/Banner/Carousel_Photo3.png'
import Sale_Image from '../../img/Banner/Sale_Image.png'
import Facebook_Icon from '../../img/Banner/Facebook_Icon.png'  

class CarouselBanner extends Component {
    render() {
        return (
            <div className="row pad-from-nav px-3 pb-3">
                <div className="col-lg-9 p-3">
                    <div id="carousel" className="carousel slide" data-ride="carousel">        
                        <div className="carousel-inner">
                            <div className="carousel-item active">
                                <img src={Carousel_Photo1} alt="Items image"></img>
                                <div className="carousel-caption text-left">                            
                                    <h2>Control and manage any device with cloud solutions</h2>
                                    <p>Improve business performance and the user experience with right mix of IoT technology and processes</p>
                                    <br></br>
                                    <a className="btn border border-white rounded-pill text-white"> &nbsp; View More &nbsp;</a>
                                    <br></br>
                                    <br></br>
                                    <ol className="carousel-indicators">
                                        <li data-target="#carousel" data-slide-to="0" className="active"></li>
                                        <li data-target="#carousel" data-slide-to="1"></li>
                                        <li data-target="#carousel" data-slide-to="2"></li>
                                    </ol>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={Carousel_Photo2} alt="Computer image"></img>
                                <div className="carousel-caption text-center">
                                    <h2>Control and manage any device with cloud solutions</h2>
                                    <p>Improve business performance and the user experience with right mix of IoT technology and processes</p>
                                    <br></br>
                                    <a className="btn border border-white rounded-pill text-white"> &nbsp; View More &nbsp;</a>
                                    <br></br>
                                    <br></br>
                                    <ol className="carousel-indicators">
                                        <li data-target="#carousel" data-slide-to="0"></li>
                                        <li data-target="#carousel" data-slide-to="1" className="active"></li>
                                        <li data-target="#carousel" data-slide-to="2"></li>
                                    </ol>
                                </div>
                            </div>
                            <div className="carousel-item">
                                <img src={Carousel_Photo3} alt="City image"></img>
                                <div className="carousel-caption text-right">
                                    <h2>Control and manage any device with cloud solutions</h2>
                                    <p>Improve business performance and the user experience with right mix of IoT technology and processes</p>
                                    <br></br>
                                    <a className="btn border border-white rounded-pill text-white"> &nbsp; View More &nbsp; </a>
                                    <br></br>
                                    <br></br>
                                    <ol className="carousel-indicators">
                                        <li data-target="#carousel" data-slide-to="0"></li>
                                        <li data-target="#carousel" data-slide-to="1"></li>
                                        <li data-target="#carousel" data-slide-to="2" className="active"></li>
                                    </ol>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col text-center d-none d-xl-block d-lg-block p-3">
                    <img className="img-fluid" src={Sale_Image}></img>
                    <br></br>
                    <div className="pt-5">
                        <h5>Follow us on Facebook</h5>
                        <p className="pb-3">Sed ut perspiciatis unde omnis iste natus error sit</p>
                        <a className="btn border border-primary rounded-pill text-uppercase icon-color py-1" href="https://www.facebook.com" target="_blank">
                            <img className="img-fluid icon-photo" src={Facebook_Icon}></img>
                            Follow &nbsp;&nbsp;&nbsp;&nbsp;
                        </a>
                    </div>
                </div>
            </div>
        );
    }
}

export default CarouselBanner;