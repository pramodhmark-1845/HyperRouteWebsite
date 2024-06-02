import React from 'react';
import busGraphic from '../assets/bus graphic.jpg';
import timepass from '../assets/timepass.jpg';
import lastMileDelivery from '../assets/last_mile_delivery_services.png';
import ondc from '../assets/ondc.webp';

export const Features = () => {
    return (
        <div id="Features" className="container-md">
            <div className="row gy-4">
                <div className="col-sm-5">
                    <div className="h2">We automate<br /><span>Logistic Requests</span></div>
                </div>
                <div className="col-sm-7"></div>
                <div id="Features1" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#Features1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#Features1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#Features1" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#Features1" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={busGraphic} className="d-block w-100 image-fluid" alt="Feature 1" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Feature 1</h5>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={timepass} className="d-block w-100 image-fluid" alt="Feature 2" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Feature 2</h5>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={lastMileDelivery} className="d-block w-100 image-fluid" alt="Feature 3" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Feature 3</h5>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={ondc} className="d-block w-100 image-fluid" alt="Feature 4" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Feature 4</h5>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#Features1" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#Features1" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    );
};
