import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "../Styles/Card.css";
import { FaLinkedin, FaTwitter } from "react-icons/fa";

import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardComponent from "./CardComponent";

const Card = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://quesslab-1.onrender.com/api/get")
      .then((res) => {
        console.log("Fetched Data:", res.data.data);
        setData(res.data.data || []);
      })
      .catch((err) => console.error("API error:", err));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    autoplay: true,
    autoplaySpeed: 2500,
    slidesToShow: 3,
    slidesToScroll: 1,
    pauseOnHover: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  if (data.length === 0) {
    return (
      <p style={{ color: "white", textAlign: "center" }}>Loading cards...</p>
    );
  }

  return (
    <div   className="main-wrapper" >
     <div className="carousel-container">
      <Slider {...settings} className="slider-class">
        {data.map((item) => (
          <div className="crousel-wrapper">
            <div key={item._id} className="card-carousel">
              <div>
                <img
                  src={item.ProfilePhoto}
                  alt="profile"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src =
                      "https://www.w3schools.com/howto/img_avatar.png";
                  }}
                />
              </div>
              <div className="text-container">
                <div className="name">
                  {item.FirstName} {item.LastName}
                </div>
                <div className="role">{item.Role}</div>
                <div className="linkdein-twitter-container">
                  <a
                    href={item.LinkedInProfile}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-link"
                  >
                    <FaLinkedin size={24} color="#0e76a8" />
                  </a>

                  <a
                    href={item.Twitter}
                    target="_blank"
                    rel="noreferrer"
                    className="icon-link"
                  >
                    <FaTwitter size={24} color="#1DA1F2" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
    <div>
    <CardComponent  data={data}/>
    </div>
    </div>
   
  );
};

export default Card;
