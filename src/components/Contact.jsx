import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

export const Contact = () => {
  return (
    <div id="Contact" className="container" style={{ marginTop: '10vh', marginBottom: '5vh' }}>
      <div className="h2 text-center">Get in<span> Touch</span></div>
      <div className="h4 text-center mb-4">Any questions or remarks? Leave us a message</div>
      <div className="d-flex justify-content-center">
        <form
          name="Contact"
          method="post"
          action="form.php"
          className="w-100 w-md-75 w-lg-60 bg-light p-4 rounded"
        >
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
            <div className="mb-3">
              <h5>What concern do you wish to address?</h5>
              <div className="row">
                <div className="col-12 col-sm-4">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="concern" id="concern1" value="option1" />
                    <label className="form-check-label" htmlFor="concern1">
                      Join Team
                    </label>
                  </div>
                </div>
                <div className="col-12 col-sm-4">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="concern" id="concern2" value="option2" />
                    <label className="form-check-label" htmlFor="concern2">
                      Logistics
                    </label>
                  </div>
                </div>
                <div className="col-12 col-sm-4">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="concern" id="concern3" value="option3" />
                    <label className="form-check-label" htmlFor="concern3">
                      Business
                    </label>
                  </div>
                </div>
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message</label>
              <textarea className="form-control" name="message" id="message" rows="5" placeholder="Enter your message here"></textarea>
            </div>

            <div className="text-center">
              <button type="submit" className="btn btn-primary">Submit</button>
            </div>
          </fieldset>
        </form>
      </div>
    </div>
  );
};
