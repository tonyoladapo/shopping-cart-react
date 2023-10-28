import React from "react";

const Item = () => {
  return (
    <div className="col-md-3">
      <button type="button" className="btn btn-primary btn-sm but">
        Free Delivery
      </button>
      <img
        src="images/dom-hill-nimElTcTNyY-unsplash.jpg"
        className="img-responsive"
        style={{ minHeight: "150px" }}
      />
      <h5 className="text-center">Yellow Jam Suite</h5>
      <center>
        <div className="line text-center"></div>
      </center>
      <div className="row text-center">
        <h4>
          <sub>$</sub>
          <b>10.</b>90
        </h4>
      </div>
      <div className="row text-center">
        <h4>Or 9x$1.21</h4>
      </div>
      <div className="row text-center">
        <button type="button" className="btn btn-primary btn-lg cart">
          Add to cart
        </button>
      </div>
    </div>
  );
};

export default Item;
