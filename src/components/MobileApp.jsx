import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import appDemo1 from '../assets/app-demo-1.png';
import appDemo2 from '../assets/app-demo-2.png';

export const MobileApp = () => {
  return (
    <div id="App" className="container-md my-5">
      <div className="row">
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <div className="h2">
            Order, Track parcels through our <span>Mobile App</span>
          </div>
          <a href="https://play.google.com/store/apps/details?id=your.app.id" target="_blank" rel="noopener noreferrer" className="btn btn-primary mt-3">
            Download on the Play Store
          </a>
        </div>
        <div className="col-12 col-md-8">
          <div id="App1" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner justify-content-center">
              <div className="carousel-item active">
                <img style={{ maxHeight: '800px', width: 'auto', margin: '0 auto' }} src={appDemo1} className="d-block img-fluid" alt="App 1" />
              </div>
              <div className="carousel-item">
                <img style={{ maxHeight: '800px', width: 'auto', margin: '0 auto' }} src={appDemo2} className="d-block img-fluid" alt="App 2" />
              </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#App1" data-bs-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#App1" data-bs-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};