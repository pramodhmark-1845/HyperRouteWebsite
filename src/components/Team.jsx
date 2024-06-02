import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import pramodh from '../assets/team/pramodh.jpeg';
import mahi from '../assets/team/Mahi_Hyperroute.jpg';
import aman from '../assets/team/aman.jpeg';

export const Team = () => {
  return (
    <div id="Team" className="container-sm my-5">
      <div className="row">
        <div className="col-12 col-md-5 mb-4 mb-md-0">
          <div className="h3">
            Meet our team of experts in<br /><span>Design and automation</span>
          </div>
        </div>
        <div className="col-12 col-md-7">
          <p>
            To be the company our customers want us to be, it takes an eclectic group of passionate operators. Get to know the people leading the way at Hyper Route.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <figure className="figure text-center">
            <img src={pramodh} className="figure-img img-fluid rounded-circle shadow" alt="Pramodh" />
            <figcaption className="figure-caption text-center">
              <strong>Founder, Team lead at Hyper Route</strong>
            </figcaption>
          </figure>
        </div>
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <figure className="figure text-center">
            <img src={mahi} className="figure-img img-fluid rounded-circle shadow" alt="Mahi" />
            <figcaption className="figure-caption text-center">
              <strong>Co-Founder, IoT Engineer at Hyper Route</strong>
            </figcaption>
          </figure>
        </div>
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <figure className="figure text-center">
            <img src={aman} className="figure-img img-fluid rounded-circle shadow" alt="Aman" />
            <figcaption className="figure-caption text-center">
              <strong>Co-Founder, Mechanical Engineer at Hyper Route</strong>
            </figcaption>
          </figure>
        </div>
      </div>
    </div>
  );
};
