import React from 'react';
import installation from '../assets/installation.png';
import work1 from '../assets/Work1.jpeg';
import work2 from '../assets/Work2.jpeg';
import work3 from '../assets/Work3.jpeg';
import work4 from '../assets/Work4.jpeg';
import work5 from '../assets/Work5.jpeg';
import work6 from '../assets/Work6.jpeg';
import work7 from '../assets/Work7.jpeg';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js'; // Ensure Bootstrap JS is included

export const Work = () => {
    return (
        <div id="Work" className="container-md">
            <div className="row gy-4">
                <div className="col-sm-5">
                    <div className="h2">Our<br /><span>Progress</span></div>
                </div>
                <div className="col-sm-7"></div>
                <div id="WorkCarousel" className="carousel slide" data-bs-ride="carousel" data-bs-interval="2000">
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <img src={installation} className="d-block w-100 img-fluid carousel-img" alt="Installation" />
                        </div>
                        <div className="carousel-item">
                            <img src={work1} className="d-block w-100 img-fluid carousel-img" alt="Work 1" />
                        </div>
                        <div className="carousel-item">
                            <img src={work2} className="d-block w-100 img-fluid carousel-img" alt="Work 2" />
                        </div>
                        <div className="carousel-item">
                            <img src={work3} className="d-block w-100 img-fluid carousel-img" alt="Work 3" />
                        </div>
                        <div className="carousel-item">
                            <img src={work4} className="d-block w-100 img-fluid carousel-img" alt="Work 4" />
                        </div>
                        <div className="carousel-item">
                            <img src={work5} className="d-block w-100 img-fluid carousel-img" alt="Work 5" />
                        </div>
                        <div className="carousel-item">
                            <img src={work6} className="d-block w-100 img-fluid carousel-img" alt="Work 6" />
                        </div>
                        <div className="carousel-item">
                            <img src={work7} className="d-block w-100 img-fluid carousel-img" alt="Work 7" />
                        </div>
                    </div>
                    <button className="carousel-control-prev" type="button" data-bs-target="#WorkCarousel" data-bs-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Previous</span>
                    </button>
                    <button className="carousel-control-next" type="button" data-bs-target="#WorkCarousel" data-bs-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="visually-hidden">Next</span>
                    </button>
                    {/* Indicators */}
                    <div className="carousel-indicators">
                        <button type="button" data-bs-target="#WorkCarousel" data-bs-slide-to="0" className="active" aria-current="true"></button>
                        <button type="button" data-bs-target="#WorkCarousel" data-bs-slide-to="1"></button>
                        <button type="button" data-bs-target="#WorkCarousel" data-bs-slide-to="2"></button>
                        <button type="button" data-bs-target="#WorkCarousel" data-bs-slide-to="3"></button>
                        <button type="button" data-bs-target="#WorkCarousel" data-bs-slide-to="4"></button>
                        <button type="button" data-bs-target="#WorkCarousel" data-bs-slide-to="5"></button>
                        <button type="button" data-bs-target="#WorkCarousel" data-bs-slide-to="6"></button>
                        <button type="button" data-bs-target="#WorkCarousel" data-bs-slide-to="7"></button>
                    </div>
                </div>
            </div>
        </div>
    );
};
