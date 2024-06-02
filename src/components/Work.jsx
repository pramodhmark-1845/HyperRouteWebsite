import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import smartBox from '../assets/smart box.png';
import chemBuilding from '../assets/chem building.jpg';
import rajpath from '../assets/rajpath.jpg';
import timepass from '../assets/timepass.jpg';

export const Work = () => {
    return (
        <div id="Work" className="container-md">
            <div className="row gy-4">
                <div className="col-sm-4">
                    <div className="h2">Our<br /><span>Progress</span></div>
                </div>
                <div className="col-sm-8"></div>
                <div id="Work1" className="carousel slide" data-bs-ride="carousel">
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#Work1" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                        <button type="button" data-bs-target="#Work1" data-bs-slide-to="1" aria-label="Slide 2"></button>
                        <button type="button" data-bs-target="#Work1" data-bs-slide-to="2" aria-label="Slide 3"></button>
                        <button type="button" data-bs-target="#Work1" data-bs-slide-to="3" aria-label="Slide 4"></button>
                    </div>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={smartBox} className="d-block w-100 image-fluid" alt="Feature 1" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Feature 1</h5>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={chemBuilding} className="d-block w-100 image-fluid" alt="Feature 2" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Feature 2</h5>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={rajpath} className="d-block w-100 image-fluid" alt="Feature 3" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Feature 3</h5>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <img src={timepass} className="d-block w-100 image-fluid" alt="Feature 4" />
                            <div className="carousel-caption d-none d-md-block">
                                <h5>Feature 4</h5>
                            </div>
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#Work1" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#Work1" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                </div>
            </div>
        </div>
    )
}
