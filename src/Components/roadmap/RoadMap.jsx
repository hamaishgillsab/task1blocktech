// import { Box, Container } from "@mui/system";
import React from "react";
import RoadMapsec1 from "../roadmap/RoadMapsec1";
import RoadMapsec2 from "../roadmap/RoadMapsec2";
import RoadMapsec3 from "../roadmap/RoadMapsec3";
import RoadMapsec4 from "../roadmap/RoadMapsec4";
import RoadMapsec5 from "../roadmap/RoadMapsec5";
import RoadMapsec6 from "../roadmap/RoadMapsec6";
import RoadMapsec7 from "../roadmap/RoadMapsec7";
import RoadMapsec8 from "../roadmap/RoadMapsec8";
import RoadMapsec9 from "../roadmap/RoadMapsec9";
import RoadMapsec10 from "../roadmap/RoadMapsec10";
import RoadMapsec11 from "../roadmap/RoadMapsec11";
import Section1 from "../About/Section1";
import poly from "../../Assets/lowpoly2.png";
import { Box, Container, Typography } from "@mui/material";
import RoadMapsec12 from "./RoadMapsec12";
import RoadMapsec13 from "./RoadMapsec13";
import RoadMapHeading from "./RoadMapHeading";
import RoadMapsec14 from "./RoadMapsec14";
import RoadMapsec15 from "./RoadMapsec15";

const RoadMap = () => {
  return (
    <>
      <Box>
        <Container>
          <Section1 name="Name here" LiveMap="Live Road Map" img={poly} />
          <Box sx={{ textAlign: "center" }}>
            <Typography
              sx={{
                mt: 7,
                fontFamily: "Lato",
                fontWeight: 900,
                fontSize: { md: "72px", sm: "50px", xs: "40px" },
                color: "#6100BF",
              }}
            >
              RoadMap
            </Typography>
          </Box>
        </Container>
      </Box>
      <RoadMapsec1 />
      <RoadMapsec2 />
      <RoadMapsec3 />
      <RoadMapsec4 />
      <RoadMapsec5 />
      <RoadMapsec6 />
      <RoadMapsec7 />
      <RoadMapsec8 />
      <RoadMapsec9 />
      <RoadMapsec10 />
      <RoadMapsec11 />
      <RoadMapHeading />
      <RoadMapsec12 />
      <RoadMapsec13 />
      <RoadMapsec14 />
      <RoadMapsec15 />
    </>
  );
};

export default RoadMap;
