import React from "react";
import { makeStyles, Typography, Box, withStyles } from "@material-ui/core";

const NewBadge = (props) => {
  return (
    <Box>
      <div className="one-badge">
        <i className="fas fa-trophy" />
        <div className="winner-info">
          <p>{props.arrItem.position}</p>
          <p style={{opacity: 0.7}}>{props.arrItem.competition}</p>
        </div>
      </div>
    </Box>
  );
};

export default NewBadge;
