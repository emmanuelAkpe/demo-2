import React from "react";
import { Carousel } from "react-bootstrap";
import "./Slider.css";

const Slider = () => {
  return (
    <div>
      <Carousel className="h-50">
        <Carousel.Item className="drk">
          <div
            style={{ height: "70vh", objectFit: "cover" , background:'#02a45d'}}
          />
          <Carousel.Caption className="ccd">
            <div className="c-text">
              <h2>Find great laptops at reduced price.</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Possimus, sed.
              </p>
            </div>
            <img src="/images/2.webp" alt=""  className="slider-image "/>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="drk">
          <div
            style={{ height: "70vh", objectFit: "cover" , background:'#0d1137'}}
          />
          <Carousel.Caption className="ccd">
            <div className="c-text">
              <h2>Lasting Products at a moderate price.</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Possimus, sed.
              </p>
            </div>
            <img src="/images/1.png" alt=""   className="slider-image "/>
          </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item className="drk">
          <div
            style={{ height: "70vh", objectFit: "cover" , background:'teal'}}
          />
          <Carousel.Caption className="ccd">
            <div className="c-text">
              <h2>Buy from the best brands in Ghana.</h2>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Possimus, sed.
              </p>
            </div>
            <img src="/images/3.png" alt=""   className="slider-image "/>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
};

export default Slider;
