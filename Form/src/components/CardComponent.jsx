import React from 'react'
import { FaLinkedin, FaTwitter } from "react-icons/fa";

const CardComponent = ({data}) => {
  return (
    
        <div className="simple-cards-wrapper" >
        {data.map((item) => (
          <div className="single-card" key={"list-" + item._id} style={{ marginBottom: "20px" }}>
            <div>
              <img
                src={item.ProfilePhoto}
                alt="profile"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src =
                    "https://www.w3schools.com/howto/img_avatar.png";
                }}
                style={{ width: "100px", height:"100px", borderRadius: "50%" }}
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
                  <FaLinkedin size={20} color="#0e76a8" />
                </a>

                <a
                  href={item.Twitter}
                  target="_blank"
                  rel="noreferrer"
                  className="icon-link"
                >
                  <FaTwitter size={20} color="#1DA1F2" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
      
    
  )
}

export default CardComponent
