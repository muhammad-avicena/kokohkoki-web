import React, { useState, useEffect } from "react";
import Slider from "react-slick";
import Heading from "../Products/Heading";
import Product from "../Products/Product";
import SampleNextArrow from "./SampleNextArrow";
import SamplePrevArrow from "./SamplePrevArrow";
import axios from "axios";
import BASE_URL from "../../../config/config";

const Event = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios
      .get(`${BASE_URL}/fish?isEvent=true&sort=asc`)
      .then((response) => {
        setProducts(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    responsive: [
      {
        breakpoint: 1025,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
        },
      },
      {
        breakpoint: 769,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        },
      },
    ],
  };
  return (
    <div className="w-full pb-16">
      <Heading heading="New Arrivals" />
      <Slider {...settings}>
        {products && products.length > 0 ? (
          products.map((product) => (
            <div className="px-2" key={product._id}>
              <Product
                _id={product._id}
                img={product.images.image1}
                name={product.name}
                price={product.price}
                type={product.type}
                gender={product.gender}
                color={product.color}
                badge={product.badge}
                des={product.desc}
              />
            </div>
          ))
        ) : (
          <div className="px-2 text-white">
            <p>Please wait...</p>
          </div>
        )}
      </Slider>
    </div>
  );
};

export default Event;
