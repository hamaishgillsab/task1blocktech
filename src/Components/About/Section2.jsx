import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import group3 from "../../Assets/Group3.png";
import group4 from "../../Assets/Group4.png";
import group5 from "../../Assets/Group5.png";
import group6 from "../../Assets/Group6.png";
import group7 from "../../Assets/Group7.png";

let Data = [
  {
    id: 1,
    img: group3,
    name: "Safer smart contracts",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  },
  {
    id: 2,
    img: group4,
    name: "No-cost transactions",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  },
  {
    id: 3,
    img: group5,
    name: "Energy efficient at scale",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  },
  {
    id: 4,
    img: group6,
    name: "Proven security",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  },
  {
    id: 5,
    img: group7,
    name: "Industrial scalability",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  },
];

const Section2 = () => {
  return (
    <Box sx={{ mt: 8 }}>
      <Container>
        <Box sx={{ px: { md: 6, sm: 4, xs: 1 }, mb: 10 }}>
          <Typography
            sx={{
              fontWeight: 700,
              fontSize: { md: "40px", sm: "28px", xs: "18px" },
              color: "#6100BF",
              fontFamily: "Lato",
            }}
          >
            Build without compromise
          </Typography>
          <Typography
            sx={{
              mt: 2,
              fontWeight: 400,
              
              fontSize: { md: "23px", sm: "20px", xs: "18px" },

              color: "#000000",
              fontFamily: "Lato",
            }}
          >
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book.
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {Data.map((a, i) => (
            <Grid item md={4} sm={6} xs={12}>
              <Box
                sx={{
                  boxShadow: "0px 0px 6px 0px #00000040",
                  height: "100%",
                }}
              >
                <Box sx={{ p: 3 }}>
                  <img src={a.img} alt="" key={i} />
                  <Typography
                    sx={{
                      fontSize: { md: "24px", sm: "22px", xs: "20px" },
                      fontWeight: 700,
                      color: "#48007C",
                      fontFamily: "Lato",
                    }}
                  >
                    {a.name}
                  </Typography>
                  <Typography
                    sx={{
                      fontSize: { md: "18px", sm: "16px", xs: "1px" },
                      fontWeight: 400,
                      color: "#000",
                      fontFamily: "Lato",
                      mt: 1,
                    }}
                  >
                    {a.detail}
                  </Typography>
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default Section2;
