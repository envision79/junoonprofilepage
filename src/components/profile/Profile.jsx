import React from "react";

import AboutUserDetail from "./AboutUserDetail";
import NewBadge from "./NewBadge";

const Profile = (props) => {
  // const classes = useStyles();
  return (
    <div>
      <div className="circle-bottom"></div>
      <div className="circle-top"></div>
      <div className="profile">
        <div className="photo-links">
          <div className="image">
            <img src={props.imgUrl} alt="profileImage" />
            <p style={{fontSize: 18}} className="headingColor">{props.user}</p>
            <p style={{ fontSize: 14, opacity: 0.8 }}>
              {props.positionInSociety}
            </p>
          </div>
          <div className="link-wrapper">
            <a style={{fontSize: 18}} className="headingColor" href="https://www.instagram.com/?hl=en">
              <i className="fab fa-instagram" />
              @{props.instaName}
            </a>

            <a style={{fontSize: 18}} className="headingColor" href>
              <i className="fas fa-images" />
              My images
            </a>
            <a style={{fontSize: 18}} className="headingColor" href>
              <i className="fas fa-paper-plane" />
              Upcoming comp
            </a>
          </div>
          <div className="new-competition">
            <p>{props.newCompetition}</p>
            <i class="fas fa-gamepad"></i>
          </div>
        </div>


        <div className="about-me">
          <AboutUserDetail
            nickname={props.nickname}
            phone={props.phone}
            city={props.city}
            email={props.email}
          />
          <div className="all-badge">
            <h2>Badges</h2>
            <div className="badges">
              <div className="couple-badges">
                {props.arr.map((arrItem, index) => {
                  return <NewBadge arrItem={arrItem} />;
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;