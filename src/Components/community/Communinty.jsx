import { Box } from "@mui/system";
import React from "react";
import Section1 from "../About/Section1";
import background21 from "../../Assets/background21.png";
import CommunitySec1 from "./CommunitySec1";
import CommunitySec2 from "./CommunitySec2";
import CommunitySec3 from "./CommunitySec3";
import CommunitySec4 from "./CommunitySec4";

const Communinty = () => {
  return (
    <>
      <Box>
        <Section1 name="People make" LiveMap="it happen" img={background21} />
      </Box>
      <CommunitySec1 />
      <CommunitySec2 />
      <CommunitySec3 />
      <CommunitySec4 />
    </>
  );
};

export default Communinty;
