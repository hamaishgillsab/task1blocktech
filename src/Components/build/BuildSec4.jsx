import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import group577 from "../../Assets/Group577.png";

const Data = [
  {
    name: "Developer program",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,",
  },
  {
    name: "Technical grants",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, ",
  },
  {
    name: "Developer community",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  ",
  },
  {
    name: "Share a proposal",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,  ",
  },
];

const BuildSec4 = () => {
  return (
    <Box sx={{ mt: 3 }}>
      <Container>
        <Box sx={{ p: 5, textAlign: "center" }}>
          <Typography
            sx={{
              fontFamily: "Lato",

              fontWeight: 900,

              fontSize: { md: "48px", sm: "35px", xs: "25px" },

              color: "#48007C",
              lineHeight: 1.1,
            }}
          >
            Build your best ideas with us
          </Typography>
        </Box>

        <Grid container spacing={3}>
          {Data.map((a, i) => (
            <Grid key={i} item md={6} sm={6} xs={12}>
              <Box
                sx={{
                  py: { md: 5, sm: 2, xs: 2 },
                  px: { md: 3, sm: 2, xs: 1 },
                  boxShadow: "0px 0px 6px 0px #00000040",
                  borderTop: "8px solid rgba(136,0,255,1)",
                
                }}
                gap={3}
              >
                <Box
                  sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    // mt: 1,
                    mb: 1,
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Lato",
                      fontWeight: 700,

                      fontSize: { md: "24px", sm: "20px", xs: "16px" },

                      color: "#48007C",
                      lineHeight: 1,
                    }}
                  >
                    {a.name}
                  </Typography>
                  <img
                    style={{ width: "30px", height: "30px" }}
                    src={group577}
                    alt=""
                  />
                </Box>
                <Typography
                  sx={{
                    fontFamily: "Lato",

                    fontWeight: 400,
                   
                    fontSize: { md: "18px", sm: "16px", xs: "14px" },

                    color: "#000000",
                  }}
                >
                  {a.detail}
                </Typography>
              </Box>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default BuildSec4;
