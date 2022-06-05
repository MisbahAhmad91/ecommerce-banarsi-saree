import React from "react";
//import Navbar from './Navbar'
//import Product from './Product'
import { Carousel } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import slide1 from "./img/slide1.png";
import slide2 from "./img/slide2.png";
import slide3 from "./img/slide3.png";

function Banner() {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="d-block w-100" src={slide1} alt="First slide" />
        <Carousel.Caption>
          <h3>The Art of Banaarasi</h3>
          <p>Upto 60% off on all Products.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide2} alt="Second slide" />

        <Carousel.Caption>
          <h3>Made for the World</h3>
          <p>Upto 60% off on all Products.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={slide3} alt="Third slide" />

        <Carousel.Caption>
          <h3>Heritage Lehengas</h3>
          <p>Upto 60% off on all Products.</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
}

export default Banner;
