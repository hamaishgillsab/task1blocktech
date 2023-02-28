import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import img from "../../Assets/Vector6.png";

const Section5 = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${img})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        mt: 10,
      }}
    >
      <Box
        sx={{
          px: { md: 20, sm: 10, xs: 3 },
          py: { md: 15, sm: 13, xs: 8 },
        }}
      >
        <Typography
          sx={{
            fontSize: { md: "70px", sm: "50px", xs: "35px" },
            fontWeight: 900,
            color: "#FFFFFF",
            fontFamily: "Lato",
            mt: 10,
          }}
        >
          Lets Join Our Community
        </Typography>
        <Typography
          sx={{
            fontSize: { md: "25px", sm: "20px", xs: "15px" },
            fontWeight: 400,
            color: "#FFFFFF",
            fontFamily: "Lato",
          }}
        >
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book.{" "}
        </Typography>
        <Button
          variant="contained"
          sx={{
            background:
              "radial-gradient(133.33% 1564.91% at 14.8% 49.12%, #6300C6 0%, #AD00FF 100%)",
            mt: 3,
            px: 10,
            borderRadius: 5,
            fontSize: "15px",
          }}
        >
          Join Now
        </Button>
      </Box>
    </Box>
  );
};

export default Section5;
