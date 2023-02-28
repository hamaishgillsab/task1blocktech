import React from "react";
import { Box, Typography } from "@mui/material";
import Lind from "../Assets/linkd.png";
import telegram from "../Assets/telegram.png";
import facebook from "../Assets/facebook.png";
import twiter from "../Assets/twiter.png";
import reddit from "../Assets/reddit.png";
import youtube from "../Assets/youtube.png";

let Data = [
  {
    img: Lind,
  },
  {
    img: telegram,
  },
  {
    img: facebook,
  },
  {
    img: twiter,
  },
  {
    img: reddit,
  },
  {
    img: youtube,
  },
];
const Subfooter = () => {
  return (
    <Box
      sx={{
        boxShadow: "1px 0px 23px 0px #00000040",
        p: { md: 5, sm: 3, xs: 2 },
        display: "flex",
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center",
        flexWrap: "wrap",
      }}
      gap={4}
    >
      <Box sx={{ marginX: { xs: "auto", md: 0, sm: 0 } }}>
        <Typography
          sx={{
            fontFamily: "Lato",
            fontWeight: 700,
            fontSize: "18px",
            color: "#000",
          }}
        >
          Name Here All rights reserved @ 2021
        </Typography>
      </Box>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          marginX: { xs: "auto", md: 0, sm: 0 },
        }}
        gap={{ md: 3, sm: 1, xs: 2 }}
      >
        {Data.map((a, i) => (
          <img key={i} src={a.img} alt="" />
        ))}
      </Box>
    </Box>
  );
};

export default Subfooter;
