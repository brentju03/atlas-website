import React from "react";

export const Process = (props) => {
  return (
    <div id="process" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Process</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  {" "}
                  <h3>{d.title}</h3>
                  <a href={d.link} target="_blank">
                    PDF
                  </a>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
