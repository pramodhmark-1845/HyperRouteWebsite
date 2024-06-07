import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import pramodh from "../assets/team/pramodh_square.jpeg";
import aman from "../assets/team/aman.jpeg";
import gourav from "../assets/team/GouravSarkar.jpeg";
import siddharth from "../assets/team/siddharth_square.jpeg";
import akhil from "../assets/team/akhil2.png";

export const Team = () => {
  return (
    <div id="Team" className="container-sm my-5 pt-4">
      <div className="row mb-4">
        <div className="col-12">
          <div className="h3">
            Meet our team of experts in
            <br />
            <span>Design and automation</span>
          </div>
        </div>
        <div className="col-12">
          <p style={{ fontWeight: 500 }}>
            To be the company our customers want us to be, it takes an eclectic
            group of passionate operators. Get to know the people leading the
            way at HyperRoute.
          </p>
        </div>
      </div>
      <div className="row text-center">
        <div className="col-12 col-md-4 mb-4">
          <figure className="figure">
            <img
              src={pramodh}
              className="figure-img img-fluid rounded-circle shadow"
              alt="Pramodh"
              style={{ width: "100%", maxWidth: "150px", height: "auto" }} // Set size here
            />
            <figcaption className="figure-caption">
              <strong>Pramodh Podety</strong>
              <br />
              <strong>Founder, Product Lead at HyperRoute</strong>
            </figcaption>
          </figure>
        </div>
        <div className="col-12 col-md-4 mb-4">
          <figure className="figure">
            <img
              src={aman}
              className="figure-img img-fluid rounded-circle shadow"
              alt="Aman"
              style={{ width: "100%", maxWidth: "150px", height: "auto" }} // Set size here
            />
            <figcaption className="figure-caption">
              <strong>Aman De Sarker</strong>
              <br />
              <strong>
                Co-Founder, Mechanical Lead and Engineer at HyperRoute
              </strong>
            </figcaption>
          </figure>
        </div>
        <div className="col-12 col-md-4 mb-4">
          <figure className="figure">
            <img
              src={gourav}
              className="figure-img img-fluid rounded-circle shadow"
              alt="Gourav"
              style={{ width: "100%", maxWidth: "150px", height: "auto" }} // Set size here
            />
            <figcaption className="figure-caption">
              <strong>Gourav Sarkar</strong>
              <br />
              <strong>Software Lead and Developer at HyperRoute</strong>
            </figcaption>
          </figure>
        </div>
      </div>
      <div className="row justify-content-center">
        {" "}
        {/* Centering the row */}
        <div className="col-12 col-md-6 mb-4">
          {" "}
          {/* Adjust the width for mobile and centering */}
          <div className="row text-center">
            <div className="col-12 col-md-6 mb-4">
              <figure className="figure">
                <img
                  src={siddharth}
                  className="figure-img img-fluid rounded-circle shadow"
                  alt="Siddharth"
                  style={{ width: "100%", maxWidth: "150px", height: "auto" }} // Set size here
                />
                <figcaption className="figure-caption">
                  <strong>Siddharth Varma</strong>
                  <br />
                  <strong>Electronics Lead and Engineer at HyperRoute</strong>
                </figcaption>
              </figure>
            </div>
            <div className="col-12 col-md-6 mb-4">
              <figure className="figure">
                <img
                  src={akhil}
                  className="figure-img img-fluid rounded-circle shadow"
                  alt="Akhil"
                  style={{ width: "100%", maxWidth: "150px", height: "auto" }} // Set size here
                />
                <figcaption className="figure-caption">
                  <strong>Akhil</strong>
                  <br />
                  <strong>
                    Incharge HyperRouteNITC, Software Developer at HyperRoute
                  </strong>
                </figcaption>
              </figure>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
