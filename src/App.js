// App.js
import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <img src="assets/logohyperroute.png" width="90" height="54" alt="Hyper Route Logo" />
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="true" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-center" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Features">Features</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#App">App</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Work">Work</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Team">Team</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#Contact">Contact</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <div id="Home" className="container-md d-flex justify-content-start align-items-center" style={{ height: '70vh' }}>
        <div className="text-start">
          <h1 style={{ fontSize: '54px' }}>
            <strong>Experience Parcel Services<br /><span>at your finger tips</span></strong>
          </h1>
          <p>Remodeling Hyperlocal, Intercity, Lastmile delivery services</p>
          <div className="row">
            <div className="col-sm-2">
              <button type="button" className="btn btn-primary" style={{ '--bs-btn-padding-y': '.25rem', '--bs-btn-padding-x': '.5rem', '--bs-btn-font-size': '.75rem' }}>
                Get Started
              </button>
            </div>
            <div className="col-sm-2">
              <button type="button" className="btn btn-outline-primary" style={{ '--bs-btn-padding-y': '.25rem', '--bs-btn-padding-x': '.5rem', '--bs-btn-font-size': '.75rem' }}>
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>

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
                <img src="assets/bus graphic.jpg" className="d-block w-100 image-fluid" alt="Feature 1" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Feature 1</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img src="assets/timepass.jpg" className="d-block w-100 image-fluid" alt="Feature 2" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Feature 2</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img src="assets/last_mile_delivery_services.png" className="d-block w-100 image-fluid" alt="Feature 3" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Feature 3</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img src="assets/ondc.webp" className="d-block w-100 image-fluid" alt="Feature 4" />
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

      <div id="App" className="container-md">
        <div className="row">
          <div className="col-sm-4">
            <div className="h2">Order, Track parcels through our <span>Mobile App</span></div>
          </div>
          <div className="col-sm-8 carousel slide" id="App1" data-bs-ride="carousel">
            <div className="carousel-inner justify-content-center">
              <div className="carousel-item active">
                <img src="assets/app-demo-1.png" className="d-block image-fluid" alt="App 1" />
              </div>
              <div className="carousel-item">
                <img src="assets/app-demo-2.png" className="d-block image-fluid" alt="App 2" />
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
                <img src="assets/smart box.png" className="d-block w-100 image-fluid" alt="Feature 1" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Feature 1</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img src="assets/chem building.jpg" className="d-block w-100 image-fluid" alt="Feature 2" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Feature 2</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img src="assets/rajpath.jpg" className="d-block w-100 image-fluid" alt="Feature 3" />
                <div className="carousel-caption d-none d-md-block">
                  <h5>Feature 3</h5>
                </div>
              </div>
              <div className="carousel-item">
                <img src="assets/timepass.jpg" className="d-block w-100 image-fluid" alt="Feature 4" />
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

      <div id="Team" className="container-sm">
        <div className="row">
          <div className="col-5">
            <div className="h3">Meet our team of experts in<br /><span>Design and automation</span></div>
          </div>
          <div className="col-7">
            <p>To be the company our customers want us to be, it takes an electric group of passionate operators. Get to know the people leading the way at Hyper Route</p>
          </div>
          <div className="col-3">
            <figure className="figure">
              <img src="assets/team/pramodh.jpeg" className="figure-img img-fluid" style={{ borderRadius: '200px', boxShadow: '5px 3px #222' }} alt="Pramodh" />
              <figcaption className="figure-caption text-center"><strong>Founder, Team lead at Hyper Route</strong></figcaption>
            </figure>
          </div>
          <div className="col-1"></div>
          <div className="col-3">
            <figure className="figure">
              <img src="assets/team/Mahi_Hyperroute.jpg" className="figure-img img-fluid" style={{ borderRadius: '200px', boxShadow: '5px 3px #222' }} alt="Mahi" />
              <figcaption className="figure-caption text-center"><strong>Co-Founder, IoT Engineer at Hyper Route</strong></figcaption>
            </figure>
          </div>
          <div className="col-1"></div>
          <div className="col-3">
            <figure className="figure">
              <img src="assets/team/aman.jpeg" className="figure-img img-fluid" style={{ borderRadius: '200px', boxShadow: '5px 3px #222' }} alt="Aman" />
              <figcaption className="figure-caption text-center"><strong>Co-Founder, Mechanical Engineer at Hyper Route</strong></figcaption>
            </figure>
          </div>
        </div>
      </div>

      <div id="Contact" className="container" style={{ marginTop: '10vh', marginBottom: '5vh' }}>
        <div className="h2 text-center">Get in<span> Touch</span></div>
        <div className="h4 text-center">Any questions or remarks? Leave us a message</div>
        <div className="d-flex justify-content-center">
          <form name="Contact" method="post" action="form.php" style={{ width: '60%', backgroundColor: 'aliceblue', padding: '20px', borderRadius: '20px' }}>
            <fieldset>
              <div className="mb-3">
                <label htmlFor="name" className="form-label">Name</label>
                <input type="text" name="name" id="name" className="form-control" placeholder="Enter your name here" />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">Email address</label>
                <input type="email" name="email" className="form-control" id="email" placeholder="name@example.com" />
              </div>
              <div className="mb-3">
                <label htmlFor="phone" className="form-label">Mobile Number</label>
                <input type="tel" name="phone" id="phone" className="form-control" placeholder="Enter your mobile number here" />
              </div>
              <div className="row">
                <div className="col-10"><h5>What concern do you wish to address?</h5></div>
                <div className="form-check col-3">
                  <input className="form-check-input" type="radio" name="concern" id="concern1" value="option1" />
                  <label className="form-check-label" htmlFor="concern1">
                    Join Team
                  </label>
                </div>
                <div className="form-check col-3">
                  <input className="form-check-input" type="radio" name="concern" id="concern2" value="option2" />
                  <label className="form-check-label" htmlFor="concern2">
                    Logistics
                  </label>
                </div>
                <div className="form-check col-3">
                  <input className="form-check-input" type="radio" name="concern" id="concern3" value="option3" />
                  <label className="form-check-label" htmlFor="concern3">
                    Business
                  </label>
                </div>
              </div>

              <div className="mb-3">
                <label htmlFor="message" className="form-label">Message</label>
                <textarea className="form-control" name="message" id="message" rows="5" placeholder="Enter your message here"></textarea>
              </div>

              <div className="text-center"><button type="submit" className="btn btn-primary">Submit</button></div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
