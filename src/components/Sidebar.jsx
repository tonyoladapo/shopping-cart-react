import React from "react";

const Sidebar = () => {
  return (
    <div className="col-md-2">
      <div className="row">
        <h3 style={{ marginLeft: "15px" }}>Sizes:</h3>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className="button"> XS</div>
        </div>
        <div className="col-md-3">
          <div className="button"> S</div>
        </div>
        <div className="col-md-3">
          <div className="button"> M</div>
        </div>
        <div className="col-md-3">
          <div className="button"> ML</div>
        </div>
      </div>
      <div className="row">
        <div className="col-md-3">
          <div className="button"> L</div>
        </div>
        <div className="col-md-3">
          <div className="button"> XL</div>
        </div>
        <div className="col-md-3">
          <div className="button"> XXL</div>
        </div>
      </div>

      <div className="row">
        <p style={{ marginLeft: "15px" }}>
          This be some coded site oo. Chairmen p3 dey come here.
        </p>
      </div>
      <div className="row">
        <div className="col-md-3"></div>
        <div className="col-md-3">
          <button type="button" className="btn btn-default btn-xs">
            <span
              className="glyphicon glyphicon-star"
              aria-hidden="true"
            ></span>{" "}
            Star
          </button>
        </div>
        <div className="col-md-3">
          <button type="button" className="btn btn-default btn-xs">
            843
          </button>
        </div>
        <div className="col-md-3"></div>
      </div>
    </div>
  );
};

export default Sidebar;
