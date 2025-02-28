import React from "react";
import { Carousel } from "antd";
const contentStyle = {
  margin: 0,
  height: "100%",
  color: "#fff",
  lineHeight: "60vh",
  textAlign: "center",
  background: "#364d79",
};
const Crousels = () => (
  <Carousel arrows infinite={false}>
    <div>
      <h3 style={contentStyle}>1</h3>
    </div>
    <div>
      <h3 style={contentStyle}>2</h3>
    </div>
    <div>
      <h3 style={contentStyle}>3</h3>
    </div>
    <div>
      <h3 style={contentStyle}>4</h3>
    </div>
  </Carousel>
);
export default Crousels;
