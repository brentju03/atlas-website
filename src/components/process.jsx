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
                <div
                  key={`${d.title}-${i}`}
                  className="col-xs-6 col-md-3 card space-between"
                >
                  {" "}
                  <h3>{d.title}</h3>
                  {d.link ? (
                    <a href={d.link} target="_blank">
                      PDF
                    </a>
                  ) : (
                    <h4>TBD</h4>
                  )}
                  {d.readme ? (
                    <a href={d.readme} target="_blank">
                      {" README"}
                    </a>
                  ) : (
                    <div></div>
                  )}
                  {d.excel ? (
                    <a href={d.excel} target="_blank">
                      Excel
                    </a>
                  ) : (
                    <div></div>
                  )}
                  {d.demo ? (
                    <a href={d.demo} target="_blank">
                      {" Prototype Link "}
                    </a>
                  ) : (
                    <div></div>
                  )}
                  {d.poster ? (
                    <a href={d.poster} target="_blank">
                      {" Poster "}
                    </a>
                  ) : (
                    <div></div>
                  )}
                  {d.script ? (
                    <a href={d.script} target="_blank">
                      {" Pitch Script "}
                    </a>
                  ) : (
                    <div></div>
                  )}
                  {d.video ? (
                    <a href={d.video} target="_blank">
                      {" Video Demo "}
                    </a>
                  ) : (
                    <div></div>
                  )}
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
