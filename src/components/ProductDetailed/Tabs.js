import React, { Component } from 'react';

class Tabs extends Component {
    render() {
        return (
            <div className="row pad-from-nav justify-content-center">
                <ul class="nav nav-tabs pad-from-nav" id="myTab" role="tablist">
                    <li class="nav-item mx-2">
                        <a class="nav-link text-muted border-fix" id="home-tab" data-toggle="tab" href="#home" role="tab" aria-controls="home" aria-selected="true">
                            <h4 className="mx-4 my-2">Description</h4>
                        </a>
                    </li>
                    <li class="nav-item mx-2">
                        <a class="nav-link text-muted border-fix" id="profile-tab" data-toggle="tab" href="#profile" role="tab" aria-controls="profile" aria-selected="false">
                            <h4 className="mx-4 my-2">Additional Information</h4>
                        </a>
                    </li>
                    <li class="nav-item mx-2">
                        <a class="nav-link text-muted border-fix" id="contact-tab" data-toggle="tab" href="#contact" role="tab" aria-controls="contact" aria-selected="false">
                            <h4 className="mx-4 my-2">Reviews(3)</h4>
                        </a>
                    </li>
                </ul>
                <div class="tab-content bg-items text-white" id="myTabContent">
                    <div class="tab-pane fade show active" id="home" role="tabpanel" aria-labelledby="home-tab">
                        <div className="row p-5">
                            <div className="col m-2">
                                <p>
                                    1
                                    Aenean commondo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient,
                                    nascetur ridiculus mus.
                                    <br></br>
                                    <br></br>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commondo ligula eget dolor.Aenean massa.
                                </p>
                            </div>
                            <div className="col m-2">
                                <p>
                                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                                    <br></br>
                                    ultricles nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, 
                                    fringilla vet, aliquet nec, vulputate eget, arcu.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="profile" role="tabpanel" aria-labelledby="profile-tab">
                        <div className="row p-5">
                            <div className="col m-2">
                                <p>
                                    2
                                    Aenean commondo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient,
                                    nascetur ridiculus mus.
                                    <br></br>
                                    <br></br>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commondo ligula eget dolor.Aenean massa.
                                </p>
                            </div>
                            <div className="col m-2">
                                <p>
                                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                                    <br></br>
                                    ultricles nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, 
                                    fringilla vet, aliquet nec, vulputate eget, arcu.
                                </p>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane fade" id="contact" role="tabpanel" aria-labelledby="contact-tab">
                        <div className="row p-5">
                            <div className="col m-2">
                                <p>
                                    3
                                    Aenean commondo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient,
                                    nascetur ridiculus mus.
                                    <br></br>
                                    <br></br>
                                    Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commondo ligula eget dolor.Aenean massa.
                                </p>
                            </div>
                            <div className="col m-2">
                                <p>
                                    Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis,
                                    <br></br>
                                    ultricles nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, 
                                    fringilla vet, aliquet nec, vulputate eget, arcu.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Tabs;