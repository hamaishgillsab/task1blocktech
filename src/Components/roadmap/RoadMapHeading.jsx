import { Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const RoadMapHeading = () => {
  return (
    <Box sx={{ mt: 15 }}>
      <Typography
        sx={{
          fontWeight: 700,
          // fontSize: "36px",
          fontSize: { md: "36px", sm: "30px", xs: "25px" },

          color: "#48007C",
          fontFamily: "Lato",
          textAlign: "center",
          mb: 5,
        }}
      >
        Upcoming milestones
      </Typography>
    </Box>
  );
};

export default RoadMapHeading;
