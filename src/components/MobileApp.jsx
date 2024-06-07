import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import app1 from '../assets/app1.png';
import app2 from '../assets/app2.png';
import app3 from '../assets/app3.png';
import app4 from '../assets/app4.png';
import app5 from '../assets/app5.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGooglePlay } from '@fortawesome/free-brands-svg-icons';

export const MobileApp = () => {
  return (
    <div id="App" className="container-md my-5">
      <div className="row">
        <div className="col-12 col-md-4 mb-4 mb-md-0">
          <div className="h2" style={{ fontSize: '2rem' }}>
            Order, Access Smart Lockers and Track parcels through our <span>Mobile App</span>
          </div>
          <a
            href="https://play.google.com/store/apps/details?id=com.pramodhmark.hyperroute_nitc&pcampaignid=web_share"
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary mt-3"
          >
            Download on the Play Store <FontAwesomeIcon icon={faGooglePlay} />
          </a>
        </div>
        <div className="col-12 col-md-8">
          <div id="App1" className="carousel slide" data-bs-ride="carousel">
            <div className="carousel-inner justify-content-center">
              <div className="carousel-item active">
                <img
                  style={{ maxHeight: '800px', width: 'auto', margin: '0 auto' }}
                  src={app1}
                  className="d-block img-fluid"
                  alt="App 1"
                />
              </div>
              <div className="carousel-item">
                <img
                  style={{ maxHeight: '800px', width: 'auto', margin: '0 auto' }}
                  src={app2}
                  className="d-block img-fluid"
                  alt="App 2"
                />
              </div>
              <div className="carousel-item">
                <img
                  style={{ maxHeight: '800px', width: 'auto', margin: '0 auto' }}
                  src={app3}
                  className="d-block img-fluid"
                  alt="App 3"
                />
              </div>
              <div className="carousel-item">
                <img
                  style={{ maxHeight: '800px', width: 'auto', margin: '0 auto' }}
                  src={app4}
                  className="d-block img-fluid"
                  alt="App 4"
                />
              </div>
              <div className="carousel-item">
                <img
                  style={{ maxHeight: '800px', width: 'auto', margin: '0 auto' }}
                  src={app5}
                  className="d-block img-fluid"
                  alt="App 5"
                />
              </div>
            </div>
            <button
              className="carousel-control-prev"
              type="button"
              data-bs-target="#App1"
              data-bs-slide="prev"
            >
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Previous</span>
            </button>
            <button
              className="carousel-control-next"
              type="button"
              data-bs-target="#App1"
              data-bs-slide="next"
            >
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="visually-hidden">Next</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
