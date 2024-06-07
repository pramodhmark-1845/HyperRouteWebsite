import React from 'react';
import product from '../assets/product.png';
import service1 from '../assets/service1.png';
import service2 from '../assets/service2.png';


export const Features = () => {
    return (
        <div id="Features" className="container-md">
            <div className="row gy-4">
                <div className="col-sm-5">
                    <div className="h2">We automate<br /><span>Logistic Requests</span></div>
                </div>
                <div className="col-sm-7"></div>
                <div id="Features1" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#Features1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#Features1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#Features1" data-bs-slide-to="2" aria-label="Slide 3"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={product} className="d-block w-100 img-fluid carousel-img" alt="Feature 1" />
                        </div>
                        <div className="carousel-item">
                            <img src={service1} className="d-block w-100 img-fluid carousel-img" alt="Feature 2" />
                        </div>
                        <div className="carousel-item">
                            <img src={service2} className="d-block w-100 img-fluid carousel-img" alt="Feature 3" />
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
