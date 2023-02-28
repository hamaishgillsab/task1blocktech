import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

import Ellipse8 from "../../Assets/Ellipse 8.png";
import youtubemain from "../../Assets/youtube (2).png";
import logos_youtube from "../../Assets/logos_youtube.png";

const Data = [
  {
    id: 1,
    name: "Don't get Rekt - Build Safer With Pact",

    button: " Plugin",
  },
  {
    id: 2,

    name: "Fireside: Stuart & Mason",

    button: " Bond Now",
  },
  {
    id: 3,

    name: "Stuart Haber Fireside Chat with Stuart Popejoy!",

    button: " Join the DAO",
  },
  {
    id: 4,
    name: "How Chainweb Works: A Simple Animation",

    button: " Apply Today",
  },
];

const CommunitySec3 = () => {
  return (
    <Box sx={{ mt: 10 }}>
      <Container>
        <Box>
          <Typography
            sx={{
              fontFamily: "Lato",
              fontSize: { md: "70px", sm: "50px", xs: "35px" },
              fontWeight: 900,
              color: "#48007C",
              lineHeight: 1.2,
              textAlign: "center",
            }}
          >
            Watch with us
          </Typography>
        </Box>

        <Grid container spacing={5}>
          {Data.map((a, i) => (
            <Grid item md={6} sm={6} xs={12}>
              <Box
                key={i}
                sx={{
                  height: "350px",
                  mt: 5,
                  background:
                    i === 2
                      ? "linear-gradient(180deg, #48007C 75.57%, rgba(72, 0, 124, 0.61) 100%)"
                      : "#282828",
                  boxShadow: "0px 0px 11px 0px #00000040",
                  display: "flex",
                  justifyContent: "space-between",
                  flexDirection: "column",
                  alignItems: "center",
                  textAlign: "center",
                }}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-start",
                    flexDirection: "row",
                    alignItems: "center",
                    mt: 2,
                  }}
                  gap={2}
                >
                  <img src={Ellipse8} alt="" />
                  <Typography
                    sx={{
                      fontFamily: "Lato",
                      // fontSize: "18px",
                      fontSize: { md: "18px", sm: "16px", xs: "14px" },

                      fontWeight: 900,
                      color: "#FFFFFF",
                    }}
                  >
                    {a.name}
                  </Typography>
                </Box>

                <Box>
                  <img src={youtubemain} alt="" />
                </Box>
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "flex-end",
                    alignSelf: "flex-end",
                    mr: 2,
                    mb: 1,
                  }}
                >
                  <img src={logos_youtube} alt="" />
                </Box>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CommunitySec3;
