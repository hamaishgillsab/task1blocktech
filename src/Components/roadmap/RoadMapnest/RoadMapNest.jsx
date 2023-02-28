import { Box } from "@mui/system";
import React from "react";
import Section1 from "../../About/Section1";
import roadmap2 from "../../../Assets/roadmap2.png";
import { Container, Typography } from "@mui/material";
import goup97 from "../../../Assets/Group 97.png";

const RoadMapNest = () => {
  return (
    <>
      <Box>
        <Section1 name="Live RoadMap" img={roadmap2} />
      </Box>
      <Box>
        <Container>
          <Box sx={{}}>
            <Typography
              sx={{
                fontFamily: "Lato",
                fontSize: { md: "72px", sm: "50px", xs: "35px" },
                fontWeight: 900,
                color: "#48007C",
                textAlign: "center",
              }}
            >
              RoadMap
            </Typography>
            <Typography
              sx={{
                fontFamily: "Lato",
                // fontSize: "24px",
                fontSize: { md: "24px", sm: "22px", xs: "18px" },

                fontWeight: 400,
                color: "#000000",
                textAlign: "center",
              }}
            >
              The Koraplay project roadmap is a technical guideline of what is
              to come. Our project is community driven, and we strive to achieve
              the goals we have set at the earliest.
            </Typography>
          </Box>

          <Box sx={{ mt: 10, display: "flex", justifyContent: "center" }}>
            <img src={goup97} alt="" />
          </Box>
        </Container>
      </Box>
    </>
  );
};

export default RoadMapNest;
