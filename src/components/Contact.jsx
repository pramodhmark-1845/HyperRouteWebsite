import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useForm, ValidationError } from '@formspree/react';

export const Contact = () => {
  const [state, handleSubmit] = useForm("mleqyoko");

  const handleClick = () => {
    // Inform the user about security restrictions
    alert('Due to security limitations, directly composing emails within the application is not possible. However, you can open Gmail to draft a new message.');
    // Optionally, provide a pre-filled "To" field using the mailto protocol (limited functionality)
    window.location.href = `mailto:${'hyperroute1845@gmail.com'}`;
  };

  if (state.succeeded) {
    return <p>Thanks for your message!</p>;
  }

  return (
    <div id="Contact" className="container" style={{ marginTop: '10vh', marginBottom: '5vh' }}>
      <div className="h2 text-center">Get in<span> Touch</span></div>
      <div className="h4 text-center mb-4">Any questions or remarks? Leave us a message</div>
      <div className="d-flex justify-content-center">
        <form
          onSubmit={handleSubmit}
          className="w-100 w-md-75 w-lg-60 bg-light p-4 rounded"
        >
          <fieldset>
            <div className="mb-3">
              <label htmlFor="name" className="form-label">Name*</label>
              <input type="text" name="name" id="name" className="form-control" placeholder="Enter your name here" required />
            </div>
            <div className="mb-3">
              <label htmlFor="email" className="form-label">Email address*</label>
              <input type="email" name="email" className="form-control" id="email" placeholder="name@example.com" required />
              <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div className="mb-3">
              <label htmlFor="phone" className="form-label">Mobile Number*</label>
              <input type="tel" name="phone" id="phone" className="form-control" placeholder="Enter your mobile number here" required />
            </div>
            <div className="mb-3">
              <h5>What concern do you wish to address?*</h5>
              <div className="row">
                <div className="col-12 col-sm-4">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="concern" id="concern1" value="Join Team" required />
                    <label className="form-check-label" htmlFor="concern1">
                      Join Team
                    </label>
                  </div>
                </div>
                <div className="col-12 col-sm-4">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="concern" id="concern2" value="Logistics" required />
                    <label className="form-check-label" htmlFor="concern2">
                      Logistics
                    </label>
                  </div>
                </div>
                <div className="col-12 col-sm-4">
                  <div className="form-check">
                    <input className="form-check-input" type="radio" name="concern" id="concern3" value="Business" required />
                    <label className="form-check-label" htmlFor="concern3">
                      Business
                    </label>
                  </div>
                </div>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="message" className="form-label">Message*</label>
              <textarea className="form-control" name="message" id="message" rows="5" placeholder="Enter your message here" required></textarea>
              <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
            <div className="text-center">
              <button type="submit" className="btn btn-primary" disabled={state.submitting}>Submit</button>
            </div>
          </fieldset>
        </form>
      </div>
      <div className="text-center mt-4">
        <small>&copy; PBRL Innovations Private Limited, Copyrights Reserved, {new Date().getFullYear()}</small>
        <br />
        <span className="gmail-id" onClick={handleClick}>
          {'hyperroute1845@gmail.com'}
        </span>
      </div>
    </div>
  );
};
