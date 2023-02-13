import React from "react";
import "animate.css";
import TrackVisibility from "react-on-screen";
// import brands data
import { brands } from "../data";

const Brands = () => {
  return (
    <div className="d-flex align-items-center justify-content-evenly">
      {brands.map((brand, idx) => {
        return (
          <TrackVisibility>
            {({ isVisible }) => (
              <div
                className={
                  isVisible
                    ? "animate__animated animate__fadeIn animate__slower	2s"
                    : ""
                }
              >
                <div key={idx}>
                  <img src={brand.img} alt="" />
                </div>
              </div>
            )}
          </TrackVisibility>
        );
      })}
    </div>
  );
};

export default Brands;
