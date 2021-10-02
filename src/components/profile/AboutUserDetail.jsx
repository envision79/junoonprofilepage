import React from "react";
import { makeStyles, Typography, Box, withStyles } from "@material-ui/core";

const AboutUserDetail =(props) => {
    return (
        <Box>
            <div className="about-me-details">
            <h2>About Me</h2>
            <div className="details">
              <p>Nickname: {props.nickname}</p>
              <p>Phone Number: {props.phone}</p>
              <p>City: {props.city}</p>
              <p>Email: {props.email}</p>
            </div>
          </div>
        </Box>
    )
}

export default AboutUserDetail;