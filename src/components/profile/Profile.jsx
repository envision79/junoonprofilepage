// cd /mnt/c/Users/kumar/Documents/projects/profile-r

import React from "react";
import { makeStyles, Typography, Box, withStyles } from "@material-ui/core";

import AboutUserDetail from './AboutUserDetail';
import NewBadge from "./NewBadge";

const Profile = (props) => {
  return (
    <div>
      <div className="profile">
        <div className="photo-links">
          <div className="image">
            <img src={props.imgUrl} alt="profile-iamge" />
            <p className="headingColor">{props.user}</p>
            <p style={{fontSize: 14, opacity: 0.8}}>{props.positionInSociety}</p>
          </div>
          <a className="headingColor" href="https://www.instagram.com/?hl=en">
            <i className="fab fa-instagram" />
            {props.instaName}
          </a>
          <a className="headingColor" href>
            <i className="fas fa-images" />
            My images
          </a>
          <a className="headingColor" href>
            <i className="fas fa-paper-plane" />
            Upcoming comp
          </a>
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
                  return (
                    <NewBadge 
                      arrItem={arrItem}
                    />
                  )
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
