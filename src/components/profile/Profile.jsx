// cd /mnt/c/Users/kumar/Documents/projects/profile-r

import React from "react";
import { makeStyles, Typography, Box, withStyles } from "@material-ui/core";

import AboutUserDetail from "./AboutUserDetail";
import NewBadge from "./NewBadge";

const useStyles = makeStyles({
  circle: {
    position: 'absolute',
    height: 200,
    width: 200,
    border: '1px solid whitesmoke',
    borderRadius: '50%',
    background: 'linear-gradient(-45deg, #8D63E7, #5E9AAC)',
    opacity: 0.5,
  },
})

const Profile = (props) => {
  const classes = useStyles();
  return (
    <div>
      <div style={{left:180, bottom: 30}} className={classes.circle} />
      <div style={{right:180, top: 30}} className={classes.circle} />
      <div className="profile">
        <div className="photo-links">
          <div className="image">
            <img src={props.imgUrl} alt="profile-iamge" />
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
          <div className="all-badges">
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
