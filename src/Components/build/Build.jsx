import { Box } from "@mui/system";
import React from "react";
import Section1 from "../About/Section1";
import BuildSmart from "../../Assets/background1.png";
import BuildSec1 from "./BuildSec1";
import BuildSec2 from "./BuildSec2";
import BuildSec3 from "./BuildSec3";
import BuildSec4 from "./BuildSec4";
import BuildSec5 from "./BuildSec5";
import BuildSec6 from "./BuildSec6";
import BuildSec7 from "./BuildSec7";

const Build = () => {
  return (
    <>
      <Box>
        <Section1 name="Build Smart" LiveMap="with Pact" img={BuildSmart} />
      </Box>
      <BuildSec1 />
      <BuildSec2 />
      <BuildSec3 />
      <BuildSec4 />
      <BuildSec5 />
      <BuildSec6 />
      <BuildSec7 />
    </>
  );
};

export default Build;
