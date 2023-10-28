import React from "react";
import Item from "./Item";

const Main = () => {
  return (
    <div className="col-md-10">
      <div className="row">
        <div className="col-md-3">
          <p style={{ fontSize: "20px" }}>16 Product(s) found</p>
        </div>
        <div className="col-md-3"></div>
        <div className="col-md-3"></div>
        <div className="col-md-3">
          <p
            style={{ fontSize: "20px", marginLeft: "40px", marginRight: "0px" }}
          >
            Order by{" "}
            <select>
              <option>Select</option>
            </select>
          </p>
        </div>
      </div>

      <div className="row">
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
        <Item />
      </div>
    </div>
  );
};

export default Main;
