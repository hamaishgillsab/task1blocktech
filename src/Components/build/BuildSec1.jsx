import { Grid, Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";

let Data = [
  {
    id: 1,
    name: "DeFi",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  },
  {
    id: 2,
    name: "NFT",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  },
  {
    id: 3,
    name: "Interop",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  },
  {
    id: 4,
    name: "Multi-protocol",
    detail:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. ",
  },
];

const BuildSec1 = () => {
  return (
    <Box sx={{ mt: 10 }}>
      <Container>
        <Box sx={{ textAlign: { md: "left", sm: "center", xs: "center" } }}>
          <Typography
            sx={{
              fontWeight: 700,
              fontFamily: "Lato",
              fontSize: { md: "72px", sm: "50px", xs: "35px" },
              color: "#48007C",
              mb: { md: -4, sm: -3, xs: -1 },
              ml: { md: 5, sm: 3, xs: 0 },
              lineHeight: 1,
            }}
          >
            Build without compromise
          </Typography>
        </Box>

        <Box
          sx={{
            mt: 5,
            maxWidth: "800px",
            width: "100%",
          }}
        >
          <Grid container spacing={3}>
            {Data.map((a, i) => (
              <Grid item sm={6} xs={12} key={i}>
                <Box
                  sx={{
                    boxShadow: "0px 0px 11px 0px #00000040",
                    borderTop: "8px solid rgba(136,0,255,1)",
                    mt: 5,
                    p: { md: 4, sm: 2, xs: 2 },
                  }}
                >
                  <Typography
                    sx={{
                      fontFamily: "Lato",

                      fontWeight: 700,

                      fontSize: { md: "24px", sm: "22px", xs: "18px" },

                      color: "#48007C",
                    }}
                  >
                    {a.name}
                  </Typography>

                  <Typography
                    sx={{
                      fontFamily: "Lato",

                      fontWeight: 400,
                      // fontSize: "15px",
                      fontSize: { md: "16px", sm: "14px", xs: "12px" },

                      color: "#000000",
                    }}
                  >
                    {a.detail}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </Box>
  );
};

export default BuildSec1;
