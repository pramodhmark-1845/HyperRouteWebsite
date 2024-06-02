import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Home = () => {
  return (
    <div id="Home" className="container-md d-flex justify-content-start align-items-center" style={{ height: '70vh' }}>
      <div className="text-start">
        <h1 className="display-4" style={{ fontSize: '3rem' }}>
          <strong>Experience Parcel Services<br /><span>at your fingertips</span></strong>
        </h1>
        <p>Remodeling Hyperlocal, Intercity, Lastmile delivery services</p>
        <div className="row">
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-2">
            <button type="button" className="btn btn-primary btn-sm">
              Get Started
            </button>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-2">
            <button type="button" className="btn btn-outline-primary btn-sm">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
