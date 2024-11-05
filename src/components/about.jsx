import React from "react";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <h2>About Atlas</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <p>Try our Figma prototype </p>
              <a href="https://www.figma.com/proto/HhfwHkIW8wnoYEMowmHwhV/Atlas-App?node-id=20-414&node-type=canvas&t=ealYu1XLCpQQ0Pou-0&scaling=min-zoom&content-scaling=fixed&page-id=15%3A2278&starting-point-node-id=20%3A414&show-proto-sidebar=1">
                here!
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
