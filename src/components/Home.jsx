import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Home = () => {
  return (
    <div id="Home" className="container-md d-flex justify-content-start align-items-center" style={{ height: '70vh'}}>
      <div className="text-start">
        <h1 className="display-4" style={{ fontSize: '4rem', fontWeight : 500}}>
          <strong>Efficient, Sustainable Delivery</strong>
        </h1>
        <h1 style={{ color: '#4034cf', fontWeight: 400, fontSize : '2rem'}}>Empowering Small-Medium Parcel Logistics with Public Transport</h1>
        <p style={{fontWeight : 400}}>Remodeling Hyperlocal, Intercity, Lastmile Delivery Services</p>
        <div className="row">
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-2">
            <a href="#App" className="btn btn-primary btn-sm">
              Get Started
            </a>
          </div>
          <div className="col-6 col-sm-4 col-md-3 col-lg-2 mb-2">
            <a href="#Features" className="btn btn-outline-primary btn-sm">
              Learn more
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
