import React from "react";

export const Services = (props) => {
  return (
    <div id="video" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Concept Video</h2>
          <iframe
            width="750"
            height="400"
            src="https://www.youtube.com/embed/PL-9t2C86RQ"
            title="Video title"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
